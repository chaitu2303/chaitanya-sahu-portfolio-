"use client";

import { motion } from "framer-motion";
import { Code2, Server, Brain, Lock, Layers } from "lucide-react";

interface TechItem {
  name: string;
  level: string;
  description: string;
}

interface TechCategory {
  title: string;
  icon: any;
  items: TechItem[];
}

const techCategories: Record<string, TechCategory> = {
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    items: [
      { name: "React.js", level: "Interactive UIs", description: "Building responsive web interfaces with reusable components and efficient rendering." },
      { name: "Next.js", level: "Modern Web App Core", description: "Implementing clean client-side routing, SEO optimization, and static site generation." },
      { name: "Tailwind CSS", level: "Responsive Styling", description: "Crafting beautiful, pixel-perfect, and mobile-friendly responsive layouts with utility classes." },
      { name: "Framer Motion", level: "Micro-Animations", description: "Enhancing user experience with subtle transitions, interactive buttons, and hover feedback." },
    ]
  },
  backend: {
    title: "Backend & Database",
    icon: Server,
    items: [
      { name: "Firebase", level: "Real-time Database", description: "Integrating real-time data sync, secure user authentication, and persistent cloud storage." },
      { name: "Node.js", level: "Server Scripting", description: "Creating simple web servers, writing REST APIs, and handling backend logic streams." },
      { name: "Python & FastAPI", level: "Fast API Routing", description: "Building backend API endpoints, processing logic payloads, and conducting server tests." },
      { name: "SQL & PHP", level: "Relational Databases", description: "Writing structured queries, designing basic database schemas, and handling local user inputs." },
    ]
  },
  ai: {
    title: "AI & Learning",
    icon: Brain,
    items: [
      { name: "OpenCV", level: "Computer Vision Study", description: "Exploring basic face tracking, image matrix manipulation, and frame-processing filters." },
      { name: "TensorFlow & NumPy", level: "AI Foundations", description: "Learning mathematical arrays, writing basic classification models, and evaluating training data." },
      { name: "GenAI & APIs", level: "AI API Integration", description: "Experimenting with large language model APIs, structuring system prompts, and building simple chatbots." },
    ]
  },
  cybersecurity: {
    title: "Cybersecurity Basics",
    icon: Lock,
    items: [
      { name: "VAPT Basics", level: "Security Testing Lab", description: "Studying OWASP Top 10 vulnerabilities and practicing basic web application security audits in local lab setups." },
      { name: "Wireshark & Nmap", level: "Network Exploration", description: "Learning network port scanning, analyzing packet headers, and practicing traffic logging." },
      { name: "Security Fundamentals", level: "Core Principles", description: "Studying hashing functions (like SHA-256), encryption principles, and secure coding best practices." },
    ]
  }
};

export const TechStack = () => {
  const categories = Object.keys(techCategories) as Array<keyof typeof techCategories>;

  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl relative">
      {/* Decorative Glow background */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magenta-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Headers */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
        <div className="text-center lg:text-left flex-1">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <Layers className="w-4 h-4" /> 
            Systems Stack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
            Technical <br className="hidden md:block" />
            <span className="text-gradient">Capabilities</span>
          </h2>
        </div>
      </div>

      {/* All Categories Grid - Direct Display W/O Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {categories.map((key) => {
          const cat = techCategories[key];
          return (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-6 md:p-10 bg-zinc-950/60 border border-white/5 hover:border-cyan-500/30 rounded-[3rem] relative overflow-hidden backdrop-blur-3xl flex flex-col justify-between gap-6 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] transition-all duration-300 group"
            >
              {/* Subtle Cyber Scanline Overlay */}
              <motion.div 
                initial={{ y: "-100%" }}
                animate={{ y: "200%" }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
              />

              <div className="flex flex-col gap-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                    <cat.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight font-outfit">{cat.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 gap-5">
                  {cat.items.map((item) => (
                    <div 
                      key={item.name}
                      className="flex flex-col gap-3 p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-cyan-500/10 hover:bg-cyan-500/[0.005] transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-black text-white uppercase font-outfit tracking-tight">{item.name}</h4>
                          <span className="text-[8px] font-black text-cyan-400/60 uppercase tracking-widest block mt-0.5">{item.level}</span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-[10px] font-black uppercase tracking-wider leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
