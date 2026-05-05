"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Code2, Rocket } from "lucide-react";

const steps = [
  {
    year: "2020–2023",
    title: "Diploma",
    emoji: "🚲",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.15)",
    desc: "Completed Diploma in Computer Engineering. Built foundations in programming, networking, and system design.",
    tags: ["Computer Engineering", "C/C++", "Networking"],
  },
  {
    year: "2024",
    title: "Internship I",
    emoji: "🏍️",
    icon: Briefcase,
    gradient: "from-violet-500 to-purple-500",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.15)",
    desc: "Cybersecurity Internship at Adiroha Solutions — performed VAPT on web apps, identified OWASP Top 10 vulnerabilities.",
    tags: ["VAPT", "SQL Injection", "OWASP"],
  },
  {
    year: "2023–2025",
    title: "B.Tech",
    emoji: "🚗",
    icon: Code2,
    gradient: "from-pink-500 to-rose-500",
    border: "border-pink-500/20",
    glow: "rgba(236,72,153,0.15)",
    desc: "Pursuing B.Tech at ANITS — specialized in Full-Stack Development, AI/ML, and Secure Systems Architecture.",
    tags: ["Full-Stack", "React", "Python", "Security"],
  },
  {
    year: "2025",
    title: "Internship II",
    emoji: "🏎️",
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.15)",
    desc: "Cybersecurity Internship at Symbiosys Technologies — penetration testing on 5+ VMs, enterprise security hardening.",
    tags: ["Pentesting", "Metasploit", "NSE Scripts"],
  },
];

export const Roadmap = () => {
  return (
    <div className="section-padding container px-4 mx-auto overflow-hidden">
      <div className="text-center mb-16 md:mb-20">
        <p className="section-subtitle">Evolution</p>
        <h2 className="section-title">Career <span className="text-gradient">Journey</span></h2>
        <p className="text-slate-400 mt-4 text-base md:text-lg max-w-xl mx-auto">
          From pedaling with curiosity to driving enterprise systems at full speed.
        </p>
      </div>

      {/* Animated Road */}
      <div className="road-track mb-16 md:mb-20 relative">
        <div className="absolute inset-0 flex items-center justify-around px-6 md:px-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 16, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              className="text-3xl md:text-5xl drop-shadow-lg"
            >
              {step.emoji}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestone Cards — 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
            className={`glass-card p-6 md:p-8 hover:-translate-y-2 group border ${step.border} relative overflow-hidden`}
            style={{ boxShadow: `0 0 40px ${step.glow}` }}
          >
            {/* Icon */}
            <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
              <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>

            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{step.year}</p>
            <h4 className="text-xl md:text-2xl font-black text-white mb-3">{step.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.desc}</p>

            <div className="flex flex-wrap gap-2">
              {step.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-5 text-[10px] font-bold text-indigo-400 uppercase tracking-widest group-hover:gap-3 transition-all">
              Phase {i + 1} <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
