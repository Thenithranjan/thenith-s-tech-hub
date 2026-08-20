import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollVideoAnimationProps {
  children?: React.ReactNode;
  frameCount?: number;
  framePrefix?: string;
  posterSrc?: string;
}

export const ScrollVideoAnimation: React.FC<ScrollVideoAnimationProps> = ({
  children,
  frameCount = 150,
  framePrefix = "/frames/frame_",
  posterSrc = "/home-bg.png",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const isLoadedRef = useRef<boolean>(false);
  const hasAutoScrolledRef = useRef<boolean>(false);

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const fadeToAboutRef = useRef<HTMLDivElement>(null);

  // 1. Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // 2. Preload WebP frames and setup GSAP ScrollTrigger Canvas Renderer
  useEffect(() => {
    if (isReducedMotion) return;

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    const fadeLayer = fadeToAboutRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to 16:9 HD ratio
    canvas.width = 1280;
    canvas.height = 720;

    let isUnmounted = false;
    const loadedImages: HTMLImageElement[] = [];

    // Pre-draw poster onto canvas immediately while frames load
    const posterImg = new Image();
    posterImg.src = posterSrc;
    posterImg.onload = () => {
      if (!isUnmounted && currentFrameRef.current === 0 && !isLoadedRef.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(posterImg, 0, 0, canvas.width, canvas.height);
      }
    };

    const drawFrame = (index: number) => {
      const img = loadedImages[index];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        currentFrameRef.current = index;
      }
    };

    // Preload WebP image sequence
    const preloadFrames = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, "0");
        img.src = `${framePrefix}${frameNum}.webp`;

        if (i === 0) {
          img.onload = () => {
            if (!isUnmounted) {
              drawFrame(0);
              isLoadedRef.current = true;
            }
          };
          if (img.complete && img.naturalWidth > 0) {
            drawFrame(0);
            isLoadedRef.current = true;
          }
        }
        loadedImages.push(img);
      }
      imagesRef.current = loadedImages;
    };

    preloadFrames();

    // 3. Create SINGLE GSAP ScrollTrigger instance for smooth scrubbing
    let triggerInstance: ScrollTrigger | null = null;

    triggerInstance = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Map 0.0 -> 0.85 progress to full frame range (0 -> frameCount - 1)
        // This holds the final zoomed frame during 0.85 -> 1.0 for a smooth natural landing!
        const animProgress = Math.min(1, progress / 0.85);
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.floor(animProgress * frameCount))
        );

        // Draw frame directly onto Canvas (0ms seek latency!)
        if (frameIndex !== currentFrameRef.current) {
          drawFrame(frameIndex);
        }

        // Hero overlay DOM opacity fade
        if (overlay) {
          const textOpacity = Math.max(0, 1 - progress * 3.5);
          const translateY = progress * -40;
          overlay.style.opacity = String(textOpacity);
          overlay.style.transform = `translateY(${translateY}px)`;
          overlay.style.pointerEvents = progress > 0.25 ? "none" : "auto";
        }

        // Smooth transition blend into AboutSection at final scroll (0.85 -> 1.0)
        if (fadeLayer) {
          const fadeOpacity = Math.max(0, Math.min(1, (progress - 0.85) / 0.15));
          fadeLayer.style.opacity = String(fadeOpacity);
        }

        // Automatically smooth-scroll land into AboutSection upon completing the animation
        if (progress >= 0.98 && !hasAutoScrolledRef.current) {
          hasAutoScrolledRef.current = true;
          const aboutElement = document.getElementById("about");
          if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
          }
        } else if (progress < 0.70) {
          hasAutoScrolledRef.current = false;
        }
      },
    });

    return () => {
      isUnmounted = true;
      if (triggerInstance) {
        triggerInstance.kill();
      }
      ScrollTrigger.refresh();
    };
  }, [frameCount, framePrefix, posterSrc, isReducedMotion]);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full ${
        isReducedMotion ? "h-auto" : "h-[350vh]"
      } bg-[#e2d5ff] dark:bg-slate-950 transition-colors duration-300`}
    >
      {/* Sticky Viewport Container */}
      <div
        className={`${
          isReducedMotion ? "relative h-auto min-h-screen" : "sticky top-0 h-screen"
        } w-full overflow-hidden flex items-center justify-center`}
      >
        {/* Instant Background Poster Visual */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('${posterSrc}')` }}
        />

        {/* Canvas WebP Image Sequence Renderer */}
        {!isReducedMotion && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
          />
        )}

        {/* Dark theme overlay for high text contrast */}
        <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/60 pointer-events-none z-[2]" />

        {/* Smooth natural fade layer transitioning into About Section */}
        <div
          ref={fadeToAboutRef}
          className="absolute inset-0 z-[3] bg-background pointer-events-none opacity-0 transition-opacity duration-75"
        />

        {/* Hero Content Overlay */}
        <div
          ref={overlayRef}
          className="relative z-10 w-full h-full flex flex-col justify-between transition-opacity duration-150"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

