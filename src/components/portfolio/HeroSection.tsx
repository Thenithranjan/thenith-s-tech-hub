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

  const resumeImageUrl = "/resume/resume-preview.png";
  const resumePdfUrl = "/resume/Thenith_Ranjan_Resume.pdf";

  return (
    <>
      <section id="home" className="relative w-full">
        <ScrollVideoAnimation videoSrc="/portfolio-animation.mp4" posterSrc="/home-bg.png">
          {/* Main Content Area */}
          <div className="container-custom h-full flex flex-col justify-between pt-[clamp(4.5rem,7.5vh,5.5rem)] pb-[clamp(0.75rem,2vh,1.5rem)] relative z-10">
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-center w-full px-3 sm:px-5 md:px-8 my-auto pt-2 md:pt-4">
              {/* Left Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center max-w-xl"
              >
                {/* Welcome Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <span className="inline-block px-3.5 py-1 bg-[#f0e8ff]/90 dark:bg-purple-950/90 backdrop-blur-md text-[#8232fb] dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium border border-purple-200/60 dark:border-purple-800/50">
                    👋 Welcome to my Portfolio
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.3] mb-5"
                >
                  Hello, I’m
                  <br />
                  <span className="text-[#8232fb] dark:text-[#a870ff] whitespace-nowrap inline-block pt-3">
                    Thenith Ranjan P S
                  </span>
                </motion.h1>

                {/* Role Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-[#8232fb] dark:text-[#b486ff] font-medium mb-4"
                >
                  Full-Stack Developer | Web Developer | MuleSoft Developer | Tech Explorer
                </motion.p>

                {/* Bio Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-600 dark:text-slate-300 text-lg max-w-lg mb-8 font-normal"
                >
                  A passionate Computer Science student dedicated to creating innovative web solutions and exploring the latest in technology.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <a
                    href={resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#8232fb] hover:bg-[#6f21e5] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold h-12 rounded-xl px-8 text-base cursor-pointer"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Resume
                  </a>

                  <button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-[#8232fb] dark:border-purple-400 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-[#8232fb] dark:text-purple-300 hover:bg-[#8232fb] hover:text-white dark:hover:bg-purple-950/80 font-semibold h-12 rounded-xl px-8 text-base transition-all duration-300 shadow-sm"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Follow me:
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com/in/thenith-ranjan-p-s-430aa0312"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#f2e9ff] dark:bg-slate-800 text-[#8232fb] dark:text-purple-300 shadow-sm hover:shadow-md hover:scale-110 flex items-center justify-center transition-all duration-200"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="https://github.com/Thenithranjan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#f2e9ff] dark:bg-slate-800 text-[#8232fb] dark:text-purple-300 shadow-sm hover:shadow-md hover:scale-110 flex items-center justify-center transition-all duration-200"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="mailto:thenithranjan@gmail.com"
                      className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#f2e9ff] dark:bg-slate-800 text-[#8232fb] dark:text-purple-300 shadow-sm hover:shadow-md hover:scale-110 flex items-center justify-center transition-all duration-200"
                      title="Email"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href="https://leetcode.com/u/Thenithranjan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#f2e9ff] dark:bg-slate-800 text-[#8232fb] dark:text-purple-300 shadow-sm hover:shadow-md hover:scale-110 flex items-center justify-center transition-all duration-200"
                      title="LeetCode"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
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
              <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none min-h-[300px]" />
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden sm:flex flex-col items-center gap-1 self-center mx-auto mb-[clamp(0.25rem,1.5vh,1rem)] pointer-events-none z-20"
            >
              <span className="text-xs font-bold text-[#8232fb] dark:text-purple-300 tracking-wider uppercase bg-white/80 dark:bg-slate-900/80 px-3 py-0.5 rounded-full shadow-sm backdrop-blur-md border border-purple-200/60 dark:border-purple-800/60">
                Scroll Down
              </span>
              <div className="w-6 h-10 rounded-full border-2 border-[#8232fb] dark:border-purple-400 bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-md flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-[#8232fb] dark:bg-purple-300 shadow-sm"
                />
              </div>
            </motion.div>
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

