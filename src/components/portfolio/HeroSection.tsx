import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Eye, X } from "lucide-react";

export const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "/resume/Thenith_Ranjan_Resume.pdf";

  return (
    <>
      <section id="home" className="min-h-screen hero-gradient relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-medium/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="container-custom min-h-screen flex items-center pt-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full px-4 md:px-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6"
              >
                👋 Welcome to my Portfolio
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              >
                Hello, I'm
                <br />
                <span className="gradient-text">Thenith Ranjan P S</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-primary font-medium mb-4"
              >
                Full-Stack Developer | Web Developer | Tech Explorer
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-lg max-w-lg mb-8"
              >
                A passionate Computer Science student dedicated to creating innovative web solutions and exploring the latest in technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button variant="hero" size="lg" onClick={() => setShowResume(true)}>
                  <Eye className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-muted-foreground">Follow me:</span>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/thenith-ranjan-p-s-430aa0312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/Thenithranjan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="mailto:thenithranjan@gmail.com"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-medium rounded-full blur-sm animate-pulse-glow" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src="https://i.postimg.cc/MTjm4f1H/Chat-GPT-Image-Dec-10-2025-07-15-37-PM.png"
                    alt="Thenith Ranjan P S"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-4 top-1/4 glass-card px-4 py-3 rounded-xl shadow-lg"
                >
                  <p className="text-sm font-semibold">6+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -left-4 bottom-1/4 glass-card px-4 py-3 rounded-xl shadow-lg"
                >
                  <p className="text-sm font-semibold">2+</p>
                  <p className="text-xs text-muted-foreground">Internships</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
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
                    <a href={resumeUrl} download="Thenith_Ranjan_Resume.pdf">
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
              
              {/* PDF Viewer */}
              <div className="h-[calc(90vh-72px)]">
                <object
                  data={resumeUrl}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                    <p className="text-muted-foreground">
                      Unable to display PDF. Your browser may be blocking it.
                    </p>
                    <Button variant="hero" asChild>
                      <a href={resumeUrl} download="Thenith_Ranjan_Resume.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume Instead
                      </a>
                    </Button>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
