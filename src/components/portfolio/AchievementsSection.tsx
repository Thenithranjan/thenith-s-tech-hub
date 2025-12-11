import { motion } from "framer-motion";
import { Award, BookOpen, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { name: "JAVA SE", provider: "G-TEC Computer Education", year: "2024", icon: "☕" },
  { name: "Python Essentials", provider: "Cisco", year: "2025", icon: "🐍" },
  { name: "MongoDB", provider: "Cisco", year: "2025", icon: "🍃" },
  { name: "Networking Basics", provider: "Cisco Networking", year: "2025", icon: "🌐" },
  { name: "Core Java Programming", provider: "Infosys", year: "2025", icon: "☕" },
  { name: "Security Connectivity Support", provider: "Cisco", year: "2024", icon: "🔐" },
];

const certifications = [
  { name: "Python Essentials", issuer: "Cisco", icon: "🐍" },
  { name: "MongoDB", issuer: "Cisco", icon: "🍃" },
  { name: "JAVA SE", issuer: "G-TEC Computer Education", icon: "☕" },
  { name: "Core Java Programming", issuer: "Infosys", icon: "☕" },
  { name: "Introduction to Industry 4.0 & Industrial IoT", issuer: "NPTEL", icon: "🏭" },
  { name: "100 Days of LeetCode", issuer: "LeetCode", icon: "💻" },
  { name: "Networking Basics", issuer: "Cisco", icon: "🌐" },
  { name: "Security Connectivity Support", issuer: "Cisco", icon: "🔐" },
  { name: "Introduction to Modern AI", issuer: "Cisco", icon: "🤖" },
];

const codingProfiles = [
  { name: "CodeChef", url: "https://www.codechef.com/users/thenithchef07", icon: "👨‍🍳", color: "from-amber-500 to-orange-600" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/thenithranjan", icon: "💚", color: "from-green-500 to-emerald-600" },
  { name: "LeetCode", url: "https://leetcode.com/u/Thenithranjan/", icon: "🧩", color: "from-yellow-500 to-amber-600" },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Recognition</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            My <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Courses Completed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-medium/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Courses Completed</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.name + course.provider}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-5 rounded-xl group hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{course.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{course.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {course.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-medium/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Certifications Earned</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-5 group hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm leading-tight">{cert.name}</h4>
                    <p className="text-xs text-primary font-medium mt-1">{cert.issuer}</p>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Award className="w-4 h-4 text-primary/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Programming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-medium/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Competitive Programming</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${profile.color} p-6 text-white group hover:scale-105 transition-transform shadow-lg`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="text-4xl mb-3">{profile.icon}</span>
                  <h4 className="font-heading font-bold text-xl">{profile.name}</h4>
                  <div className="flex items-center gap-1 mt-2 text-white/80 text-sm">
                    View Profile <ExternalLink size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
