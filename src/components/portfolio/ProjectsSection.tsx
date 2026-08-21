import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  points: string[];
  techStack: string[];
  icon: string;
  image: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Retail Product Recommendation & Demand Forecasting System",
    subtitle: "AI-Driven Textile Retail & MLOps Platform",
    points: [
      "Developed an AI-driven textile retail platform combining personalized product recommendations, demand forecasting, and inventory management using customer, product, and sales data.",
      "Built ML pipelines for recommendation and demand prediction, incorporating product attributes, customer preferences, historical sales, and seasonal/festival trends to support data-driven retail decisions."
    ],
    techStack: ["React", "FastAPI", "Supabase", "Python", "Scikit-learn", "Pandas", "Machine Learning", "MLOps"],
    icon: "🛍️",
    image: "/projects/demand-sphere.png",
    github: "https://github.com/Thenithranjan",
    live: "https://demand-sphere.vercel.app/",
  },
  {
    title: "Intelligent Medical Inventory Agent using RAG",
    subtitle: "RAG & LLM-Powered Document Q&A Agent",
    points: [
      "Replaced manual document search with natural-language Q&A, letting users query multi-page medical PDFs in plain English instead of browsing manually.",
      "Converted documents into vector embeddings with Sentence Transformers, stored in a FAISS vector database, and retrieved relevant chunks via semantic similarity search for sub-second, context-grounded responses."
    ],
    techStack: ["React", "FastAPI", "FAISS", "Sentence Transformers", "Groq LLM", "Railway", "Vercel"],
    icon: "🏥",
    image: "/projects/med-inventory.png",
    github: "https://github.com/Thenithranjan",
    live: "https://intelligent-medical-inventory-agent.vercel.app/",
  },
  {
    title: "SupplyChain Guardians",
    subtitle: "Role-Based Supply Chain & Analytics Platform",
    points: [
      "Built a role-based supply chain platform serving 4 stakeholder types — Administrator, Manufacturer, Distributor, and Retailer — for real-time inventory and shipment tracking.",
      "Designed an analytics dashboard surfacing 6 live metrics (total products, available inventory, pending orders, shipment status, warehouse stats, inventory trends) to speed up operational decisions."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Vercel"],
    icon: "📦",
    image: "/projects/supply-chain.png",
    github: "https://github.com/Thenithranjan",
  },
  {
    title: "UrbanMart – E-Commerce Web Application",
    subtitle: "Full-Stack E-Commerce Platform",
    points: [
      "Built a full-stack e-commerce platform covering the complete purchase flow — product browsing, cart, and order management.",
      "Implemented backend REST APIs for authentication and product operations; developed a responsive UI with GitHub version control."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
    icon: "🛒",
    image: "/projects/urban-mart.png",
    github: "https://github.com/Thenithranjan",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding py-16 md:py-24">
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

        {/* All Projects Cards in 2-Column Design */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-purple-medium/5 to-background border border-primary/20 p-7 md:p-10 shadow-md hover:shadow-xl transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left Details Column */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium text-sm md:text-base mt-0.5">{project.subtitle}</p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 my-5 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed pl-1">
                      {project.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs md:text-sm font-medium border border-purple-200/50 dark:border-purple-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Project Link before Code Link */}
                  <div className="flex flex-wrap gap-3.5 pt-2">
                    {project.live && (
                      <Button variant="hero" size="lg" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} />
                          Project Link
                        </a>
                      </Button>
                    )}
                    <Button
                      variant={project.live ? "outline" : "hero"}
                      size="lg"
                      asChild
                      className={project.live ? "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold" : ""}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                        Code Link
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Image Container Column */}
                <div className="lg:col-span-5 relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden border border-primary/20 bg-purple-100/50 dark:bg-purple-950/30 flex items-center justify-center group shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
