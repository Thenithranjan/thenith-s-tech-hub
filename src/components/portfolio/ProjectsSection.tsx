import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Digitization & Virtual Showcase of Sikkim Monasteries",
    description: "MERN-based heritage tourism platform featuring 360° virtual tours, interactive maps, and AI-enabled cultural archives.",
    techStack: ["MERN", "React", "MongoDB", "AI Search"],
    featured: true,
    github: "https://github.com/Thenithranjan",
  },
  {
    title: "Grand Hotel Management System",
    subtitle: "Desktop-based Hotel Automation",
    description: "Complete desktop application for hotel booking, billing, and customer management with intuitive GUI.",
    techStack: ["Java", "MySQL", "JDBC", "Swing", "OOP"],
    featured: false,
    github: "https://github.com/Thenithranjan",
  },
  {
    title: "Bus Reservation System",
    subtitle: "Online Booking Platform",
    description: "Allows passengers to book seats based on selected bus facilities with real-time availability.",
    techStack: ["Java", "SQL"],
    featured: false,
    github: "https://github.com/Thenithranjan",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-purple-medium/5 to-background border border-primary/20 p-8 md:p-12 mb-12"
          >
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              <Star size={14} className="fill-current" />
              Featured
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-80 bg-gradient-to-br from-primary/20 to-purple-medium/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="text-6xl">🏛️</div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl group hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple-medium/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {project.title.includes("Hotel") ? "🏨" : "🚌"}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
              >
                <Github size={16} />
                View Project
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
