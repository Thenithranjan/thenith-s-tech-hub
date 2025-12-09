import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Java", level: 85 },
  { name: "React.js", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 82 },
  { name: "MySQL", level: 75 },
  { name: "Spring Boot", level: 70 },
  { name: "Python", level: 65 },
];

const tools = [
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💻" },
  { name: "Postman", icon: "📮" },
];

const personalSkills = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Team Collaboration", icon: "👥" },
  { name: "Communication", icon: "💬" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            My <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                🛠️
              </span>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-medium rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                ⚙️
              </span>
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-xl bg-background/50 border border-border/50 text-center hover:border-primary/50 hover:shadow-lg transition-all cursor-default"
                >
                  <span className="text-3xl mb-2 block">{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                  🎯
                </span>
                Personal Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {personalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-xl bg-background/50 border border-border/50 text-center hover:border-primary/50 hover:shadow-lg transition-all cursor-default"
                  >
                    <span className="text-3xl mb-2 block">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                🏆
              </span>
              Achievements
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-medium/10 border-l-4 border-primary"
              >
                <p className="font-semibold text-sm">LeetCode Ambassador</p>
                <p className="text-xs text-muted-foreground mt-1">Competitive Programming</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-medium/10 border-l-4 border-primary"
              >
                <p className="font-semibold text-sm">Symposium Coordinator</p>
                <p className="text-xs text-muted-foreground mt-1">Event Management</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-medium/10 border-l-4 border-primary"
              >
                <p className="font-semibold text-sm">Hackathon Coordinator</p>
                <p className="text-xs text-muted-foreground mt-1">Tech Events</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
