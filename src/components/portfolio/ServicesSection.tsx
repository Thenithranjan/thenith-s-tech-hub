import { motion } from "framer-motion";
import { Code, Globe, Database, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building dynamic web applications using React & Java Spring Boot with API integration & database-driven applications.",
    features: ["React.js", "Spring Boot", "RESTful APIs", "Database Design"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern responsive websites with clean UI/UX. Frontend development using HTML, CSS, React, and JavaScript.",
    features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "SEO Friendly"],
  },
  {
    icon: Zap,
    title: "MuleSoft Developer",
    description: "Salesforce Certified MuleSoft Developer specializing in API-led connectivity, integration design, and building scalable Anypoint Platform solutions.",
    features: ["Anypoint Platform", "API-Led Connectivity", "DataWeave", "Salesforce Integration"],
  },
  {
    icon: Layers,
    title: "Java Applications",
    description: "Desktop and console applications with robust architecture, clean code practices, and comprehensive functionality.",
    features: ["Java SE", "Swing GUI", "JDBC", "OOP Principles"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Design and implementation of efficient database systems using MySQL and MongoDB for optimal performance.",
    features: ["MySQL", "MongoDB", "Data Modeling", "Query Optimization"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl group hover:shadow-xl transition-all relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-medium/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-medium flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
