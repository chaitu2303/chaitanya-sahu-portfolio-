"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ShieldCheck, Code2, Award, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getGithubRepos, type Repository } from "@/lib/github";

export const Hero = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    getGithubRepos("chaitu2303").then(data => setRepos(data));
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="flex-1 flex flex-col items-center justify-center container px-4 mx-auto relative min-h-screen pb-24 pt-32 md:pt-48 lg:pt-40">
      
      {/* ── Main Hero Content ── */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 relative z-10">
        
        {/* ── LEFT: Content Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Institution Label */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            Student @ GVPT
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-10 leading-[1.05] font-outfit relative">
            Chaitanya Kumar <br />
            <span className="relative z-10 bg-gradient-to-r from-violet-400 via-magenta-500 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.4)]" style={{ color: "transparent" }}>
              Sahu
            </span>
            <div className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[120%] bg-magenta-500/5 blur-[100px] -z-10 rounded-full opacity-30" />
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-xl mb-14 leading-relaxed font-sora">
            Architecting <span className="text-cyan-400 font-bold">Secure Infrastructures</span> and building <span className="text-white font-bold">Intelligent Full-Stack Systems</span> for the next digital era.
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <button onClick={scrollToProjects} className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollToContact} className="px-10 py-5 rounded-2xl border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
              Contact
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT: Profile Section ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Floating Technical Icons */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 z-20 p-5 bg-zinc-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl">
            <ShieldCheck className="w-7 h-7 text-cyan-400" />
          </motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 -left-16 z-20 p-5 bg-zinc-950/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl">
            <Code2 className="w-7 h-7 text-blue-400" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} className="absolute -bottom-12 -right-6 z-20 p-5 bg-zinc-950/80 backdrop-blur-xl border border-magenta-500/30 rounded-2xl shadow-2xl">
            <Award className="w-7 h-7 text-magenta-400" />
          </motion.div>

          {/* Cyber Animated Background Rings */}
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-20 border border-cyan-500/20 rounded-full blur-[1px]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-12 border border-blue-500/10 rounded-full border-dashed"
          />

          {/* Profile Card Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-[4.5rem] bg-zinc-950 p-4 border border-white/5 shadow-[0_0_100px_rgba(34,211,238,0.15)] overflow-hidden">
             <Image 
               src="/profile.JPG" 
               width={480} 
               height={480} 
               alt="Chaitanya Kumar Sahu" 
               className="w-full h-full object-cover rounded-[4rem] filter contrast-[1.02] brightness-[0.98] saturate-[1.1] group-hover:scale-105 transition-transform duration-700" 
               priority 
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-magenta-500/5 pointer-events-none" />
          </div>

          {/* Availability Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-zinc-950/90 backdrop-blur-3xl border border-emerald-500/40 px-14 py-5 rounded-3xl shadow-2xl flex items-center gap-4 z-30 whitespace-nowrap"
          >
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-emerald-400">Open for Hiring</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats Grid Row ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-7xl mt-48 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        <div className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:bg-cyan-500/5 rounded-[2.5rem]">
          <Github className="w-10 h-10 text-zinc-600 mb-5 group-hover:text-cyan-400" />
          <span className="text-5xl font-black text-white font-outfit">{repos.length}+</span>
          <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mt-3">Repositories</p>
        </div>
        <div className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:bg-blue-500/5 rounded-[2.5rem]">
          <Briefcase className="w-10 h-10 text-zinc-600 mb-5 group-hover:text-blue-400" />
          <span className="text-5xl font-black text-white font-outfit">2</span>
          <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mt-3">Internships</p>
        </div>
        <div className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:bg-cyan-500/5 rounded-[2.5rem]">
          <Code2 className="w-10 h-10 text-zinc-600 mb-5 group-hover:text-cyan-400" />
          <span className="text-5xl font-black text-white font-outfit">5+</span>
          <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mt-3">Projects</p>
        </div>
        <div className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500/5 rounded-[2.5rem]">
          <Award className="w-10 h-10 text-zinc-600 mb-5 group-hover:text-amber-400" />
          <span className="text-5xl font-black text-white font-outfit">20+</span>
          <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mt-3">Certificates</p>
        </div>
      </motion.div>

    </div>
  );
};
