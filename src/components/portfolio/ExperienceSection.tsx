import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Research Intern",
    company: "Research Cell, Easwari Engineering College",
    location: "Chennai, Tamil Nadu",
    period: "June 2026",
    description: [
      "Engaged in company-sponsored use-case projects under the Research Cell at Easwari Engineering College.",
      "Worked on applied research, data analysis, and technical solution engineering for industry partners.",
    ],
    color: "from-primary to-purple-medium",
  },
  {
    title: "Java Full Stack Intern",
    company: "Zidio Development",
    location: "Remote",
    period: "Sep 2025",
    description: [
      "Built production-ready web modules using Java, Spring Boot, and React.js.",
      "Implemented RESTful APIs, database schemas, and responsive UI components.",
    ],
    color: "from-purple-medium to-primary",
  },
  {
    title: "Green Internship (Top Performer)",
    company: "1M1B",
    location: "Remote",
    period: "2025",
    description: [
      "Recognized as Top Performer among the entire cohort.",
      "Developed sustainable technology solutions and green tech initiatives.",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI for Sustainability Intern",
    company: "1M1B & IBM SkillsBuild",
    location: "Chennai, Tamil Nadu",
    period: "Dec 2025",
    description: [
      "Applied AI/ML algorithms to solve real-world sustainability use cases.",
      "Gained practical experience with machine learning pipelines and IBM SkillsBuild modules.",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Web Development Intern",
    company: "ELEVATE LABS",
    location: "Remote",
    period: "2025",
    description: [
      "Developed and deployed responsive web interfaces using HTML, CSS, JavaScript, and React.",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

const leadership = [
  {
    title: "Symposium Coordinator",
    icon: "🎪",
    description: "Coordinated college symposium events & technical sessions",
  },
  {
    title: "Hackathon Coordinator",
    icon: "💻",
    description: "Organized and managed competitive hackathon events",
  },
  {
    title: "LeetCode Ambassador",
    icon: "🏆",
    description: "Promoting competitive programming & problem solving",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30 py-16 md:py-24">
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
            Experience & <span className="gradient-text">Internships</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-7 rounded-2xl hover:shadow-xl transition-all group flex flex-col justify-between border border-slate-200/60 dark:border-slate-800/60"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-105 transition-transform`}>
                  <Briefcase size={22} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-1 text-slate-900 dark:text-white">{exp.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{exp.company}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-primary/90">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
            Leadership & <span className="gradient-text">Activities</span>
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
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-slate-200/60 dark:border-slate-800/60"
            >
              <span className="text-4xl mb-3 block">{item.icon}</span>
              <h4 className="font-heading font-bold text-lg mb-1 text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
