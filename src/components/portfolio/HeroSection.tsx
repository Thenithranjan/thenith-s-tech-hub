import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Eye, X } from "lucide-react";
import { ScrollVideoAnimation } from "./ScrollVideoAnimation";

export const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const resumeImageUrl = "https://i.postimg.cc/L6Cm0DDv/RESUME-1.png";
  const resumePdfUrl = "/resume/Thenith_Ranjan_Resume.pdf";

  return (
    <>
      <section id="home" className="relative w-full">
        <ScrollVideoAnimation videoSrc="/portfolio-animation.mp4" posterSrc="/home-bg.png">
          {/* Main Content Area */}
          <div className="container-custom min-h-[calc(100vh-60px)] flex items-center pt-20 pb-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center w-full px-4 md:px-8">
              {/* Left Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center"
              >
                {/* Welcome Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-5"
                >
                  <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#e4d7fe]/90 dark:bg-purple-900/90 backdrop-blur-md text-[#3c17a6] dark:text-purple-100 rounded-full text-base sm:text-lg font-bold shadow-md border border-purple-200/60 dark:border-purple-500/50">
                    👋 Welcome to my Portfolio
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
                >
                  Hello, I’m
                  <br />
                  <span className="text-[#3c14b7] dark:text-[#b48aff] drop-shadow-sm font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] whitespace-nowrap">
                    Thenith Ranjan P S
                  </span>
                </motion.h1>

                {/* Role Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold text-[#3c14b7] dark:text-[#c4a1ff] leading-snug mb-4"
                >
                  Full-Stack Developer | Web Developer | MuleSoft Developer | Tech Explorer
                </motion.p>

                {/* Bio Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-700 dark:text-slate-200 text-lg md:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed mb-8"
                >
                  A passionate Computer Science student dedicated to creating innovative web solutions and exploring the latest in technology.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-5 mb-8"
                >
                  <button
                    onClick={() => setShowResume(true)}
                    className="inline-flex items-center justify-center px-7 py-4 bg-[#4717cc] hover:bg-[#380fa8] dark:bg-[#6b2bf5] dark:hover:bg-[#5821d6] text-white text-lg md:text-xl font-bold rounded-2xl shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <Eye className="mr-2.5 h-6 w-6" />
                    View Resume
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center px-7 py-4 border-2 border-[#4717cc] dark:border-purple-400 text-[#4717cc] dark:text-purple-200 hover:bg-[#4717cc]/10 dark:hover:bg-purple-400/20 text-lg md:text-xl font-bold rounded-2xl transition-all duration-200"
                  >
                    Contact Me
                    <ArrowRight className="ml-2.5 h-6 w-6" />
                  </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-base md:text-lg font-bold text-slate-700 dark:text-slate-300">
                    Follow me:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com/in/thenith-ranjan-p-s-430aa0312"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 text-[#4717cc] dark:text-purple-300 shadow-md hover:shadow-lg hover:scale-110 flex items-center justify-center transition-all duration-200 border border-purple-100 dark:border-slate-700"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Thenithranjan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 text-[#4717cc] dark:text-purple-300 shadow-md hover:shadow-lg hover:scale-110 flex items-center justify-center transition-all duration-200 border border-purple-100 dark:border-slate-700"
                      title="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:thenithranjan@gmail.com"
                      className="w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 text-[#4717cc] dark:text-purple-300 shadow-md hover:shadow-lg hover:scale-110 flex items-center justify-center transition-all duration-200 border border-purple-100 dark:border-slate-700"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="https://leetcode.com/u/Thenithranjan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 text-[#4717cc] dark:text-purple-300 shadow-md hover:shadow-lg hover:scale-110 flex items-center justify-center transition-all duration-200 border border-purple-100 dark:border-slate-700"
                      title="LeetCode"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Empty Right Column: displays 3D room video background clearly */}
              <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none min-h-[400px]" />
            </div>
          </div>
        </ScrollVideoAnimation>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[90vh] bg-background rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
                <h3 className="font-semibold text-foreground">Resume - Thenith Ranjan P S</h3>
                <div className="flex items-center gap-2">
                  <Button variant="hero" size="sm" asChild>
                    <a href={resumePdfUrl} download="Thenith_Ranjan_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowResume(false)}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Resume Image Viewer */}
              <div className="h-[calc(90vh-72px)] overflow-auto p-4 flex items-start justify-center bg-muted/30">
                <img
                  src={resumeImageUrl}
                  alt="Resume - Thenith Ranjan P S"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

