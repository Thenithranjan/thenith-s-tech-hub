import { motion } from "framer-motion";
import { MapPin, Code, Users, Lightbulb } from "lucide-react";
const quickInfo = [{
  icon: MapPin,
  label: "Location",
  value: "Kallakurichi, Tamil Nadu"
}, {
  icon: Code,
  label: "Fields",
  value: "Full-Stack, Web Dev"
}, {
  icon: Users,
  label: "Interests",
  value: "Problem Solving, Tech"
}, {
  icon: Lightbulb,
  label: "Focus",
  value: "Innovation & Learning"
}];
export const AboutSection = () => {
  return <section id="about" className="section-padding bg-muted/30">
    <div className="container-custom">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
          Designing Solutions,
          <br />
          <span className="gradient-text">Not Just Visuals</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Main Content */}
        <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="lg:col-span-3 space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            I'm <span className="font-semibold text-primary">Thenith Ranjan P S</span>, a passionate Computer Science and Engineering student (2024–2028) at Easwari Engineering College, Chennai. My journey in technology is driven by an insatiable curiosity to understand how things work and a desire to build solutions that make a difference.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            My objective is to obtain a challenging career opportunity in an organization that values professional development and excellence, where I can utilize my skills and experience to contribute to company objectives.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I specialize in full-stack web development with expertise in Java, React.js, and modern web technologies. I'm constantly exploring new frameworks and tools to stay at the forefront of technological innovation.
          </p>

          {/* Education Card */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="glass-card p-6 rounded-2xl mt-8">
            <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Education
            </h3>
            <div className="space-y-2">
              <p className="font-medium text-foreground">B.E., Computer Science and Engineering</p>
              <p className="text-muted-foreground">Easwari Engineering College, Chennai, Tamil Nadu</p>
              <p className="text-sm text-primary font-medium">2024 – 2028</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Info Sidebar */}
        <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="lg:col-span-2">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <h3 className="font-heading font-semibold text-lg">Quick Info</h3>
            <div className="space-y-4">
              {quickInfo.map((item, index) => <motion.div key={item.label} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.3,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex items-start gap-4 p-3 rounded-xl bg-background/50 hover:bg-secondary/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>)}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.4,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="glass-card p-6 rounded-2xl text-center">
              <p className="font-heading text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </motion.div>
            <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.4,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="glass-card p-6 rounded-2xl text-center">
              <p className="font-heading text-3xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">Internships</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};