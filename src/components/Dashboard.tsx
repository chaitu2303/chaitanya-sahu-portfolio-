"use client";

import { motion } from "framer-motion";
import { Star, Terminal, Code2, ShieldCheck, Database, RefreshCcw, Activity, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

interface Props { repos: any[]; }

export const Dashboard = ({ repos }: Props) => {
  const [pulse, setPulse] = useState(false);
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);

  useEffect(() => {
    const id = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { label: "GitHub Repos",  value: repos.length, icon: Rocket,   color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
    { label: "Total Stars",   value: totalStars,   icon: Star,     color: "text-amber-400",  bg: "bg-amber-500/10 border-amber-500/20"  },
    { label: "System Status", value: "Optimal",    icon: Activity, color: "text-emerald-400",bg: "bg-emerald-500/10 border-emerald-500/20", isPulse: true },
  ];

  const skills = [
    { name: "Full-Stack Dev",        pct: "98%", icon: Code2,       tags: ["Next.js", "React", "Node.js"] },
    { name: "Security Engineering",  pct: "92%", icon: ShieldCheck, tags: ["VAPT", "OWASP", "Zero-Trust"] },
    { name: "Data & Infrastructure", pct: "88%", icon: Database,    tags: ["MongoDB", "PostgreSQL", "Cloud"] },
  ];

  return (
    <div className="section-padding container px-4 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5">
        <div>
          <p className="section-subtitle">Real-Time Pulse</p>
          <h2 className="section-title">Developer <span className="text-gradient">Cockpit</span></h2>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-slate-500 uppercase tracking-widest self-start sm:self-auto">
          <RefreshCcw className={`w-4 h-4 text-indigo-400 ${pulse ? "rotate-180" : ""} transition-transform duration-700`} />
          Live Sync
        </div>
      </div>

      {/* Stats — 1 col mobile, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 flex items-center gap-5"
          >
            <div className={`p-4 rounded-2xl border ${s.bg} flex-shrink-0`}>
              <s.icon className={`w-7 h-7 ${s.color} ${s.isPulse && pulse ? "scale-110" : ""} transition-transform`} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{s.label}</p>
              <p className="text-3xl md:text-4xl font-black text-white">{s.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills + Quote — stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-indigo-400" /> Mastery Index
          </h3>
          <div className="space-y-8">
            {skills.map((sk, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <sk.icon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="font-bold text-white text-sm md:text-base">{sk.name}</span>
                  </div>
                  <span className="text-indigo-400 font-black text-sm">{sk.pct}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: sk.pct }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {sk.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-500 px-3 py-1 bg-white/5 border border-white/10 rounded-lg uppercase tracking-wider">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 md:p-10 flex flex-col justify-center" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.04) 100%)" }}>
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-7">
            <ShieldCheck className="w-7 h-7 text-indigo-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
            Engineered for the <br />
            <span className="text-gradient">Next Decade.</span>
          </h3>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Full-stack precision meets defensive security engineering.
            Ready to tackle enterprise-grade challenges from Day 1.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-xs font-bold text-emerald-400 uppercase tracking-widest self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            Status: Ready for Deployment
          </div>
        </div>
      </div>
    </div>
  );
};
