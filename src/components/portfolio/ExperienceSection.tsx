import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Intern",
    company: "Zidio Development",
    location: "Bangalore",
    period: "Sep 2025",
    description: [
      "Learned Java full stack concepts",
      "Exposure to backend fundamentals",
      "Worked on real-world development projects",
    ],
    color: "from-primary to-purple-medium",
  },
  {
    title: "Intern",
    company: "1M1B & IBM SkillsBuild",
    location: "Chennai",
    period: "Dec 2025",
    description: [
      "Gained knowledge in Machine Learning & AI",
      "Explored sustainability in tech",
      "Worked on ML-based problem-solving tasks",
    ],
    color: "from-purple-medium to-primary",
  },
];

const leadership = [
  {
    title: "Symposium Coordinator",
    icon: "🎪",
    description: "Coordinated symposium events",
  },
  {
    title: "Hackathon Coordinator",
    icon: "💻",
    description: "Coordinated hackathon events",
  },
  {
    title: "LeetCode Ambassador",
    icon: "🏆",
    description: "Promoting competitive programming",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Experience</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover:shadow-xl transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-primary-foreground mb-6`}>
                <Briefcase size={24} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{exp.title}</h3>
              <p className="text-primary font-medium mb-3">{exp.company}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-2xl font-bold">
            Leadership <span className="gradient-text">Roles</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-all"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
