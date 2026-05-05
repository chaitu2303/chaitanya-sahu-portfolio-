"use client";

import { motion, LayoutGroup } from "framer-motion";
import {
  SiReact, SiJavascript, SiPython,
  SiMongodb, SiGit, SiGithub,
  SiHtml5, SiCss,
} from "react-icons/si";
import { ShieldCheck, Bug } from "lucide-react";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML",        Icon: SiHtml5,       color: "#E34F26", category: "Frontend" },
  { name: "CSS",         Icon: SiCss,         color: "#1572B6", category: "Frontend" },
  { name: "JavaScript",  Icon: SiJavascript,  color: "#F7DF1E", category: "Frontend" },
  { name: "React",       Icon: SiReact,       color: "#61DAFB", category: "Frontend" },
  // Database
  { name: "MongoDB",     Icon: SiMongodb,     color: "#47A248", category: "Database" },
  // Programming
  { name: "Python",      Icon: SiPython,      color: "#3776AB", category: "Programming" },
  // Tools
  { name: "Git",         Icon: SiGit,         color: "#F05032", category: "Tools" },
  { name: "GitHub",      Icon: SiGithub,      color: "#ffffff", category: "Tools" },
  // Security
  { name: "VAPT",        Icon: ShieldCheck,   color: "#8b5cf6", category: "Security" },
  { name: "OWASP",       Icon: Bug,           color: "#ef4444", category: "Security" },
];

const categories = ["All", "Frontend", "Database", "Programming", "Tools", "Security"];

export const Skills = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter(s => s.category === active);

  return (
    <div className="section-padding container px-4 mx-auto">
      <div className="text-center mb-14">
        <p className="section-subtitle">Tech Arsenal</p>
        <h2 className="section-title">Skills & <span className="text-gradient">Technologies</span></h2>
        <p className="text-zinc-500 mt-4 text-base max-w-lg mx-auto">
          Core technologies I work with every day.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <LayoutGroup>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                active === cat ? "text-white" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </LayoutGroup>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
            whileHover={{ y: -8, scale: 1.08 }}
            className="glass-card p-6 flex flex-col items-center justify-center gap-3 cursor-default group aspect-square"
          >
            <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_16px_var(--glow)]"
              style={{ "--glow": `${skill.color}80` } as React.CSSProperties}
            >
              <skill.Icon className="w-10 h-10" style={{ color: skill.color }} />
            </div>
            <span className="text-[11px] font-semibold text-zinc-500 group-hover:text-white transition-colors text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
