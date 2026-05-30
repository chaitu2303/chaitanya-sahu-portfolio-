"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ShieldCheck, Code2, Award, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { STATS_EVENTS, trackEvent } from "@/lib/stats";
import { getGithubRepos, type Repository } from "@/lib/github";

export const Hero = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    getGithubRepos("chaitu2303").then(data => setRepos(data));
  }, []);

  const scrollToProjects = () => {
    trackEvent(STATS_EVENTS.INTERACTION);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    trackEvent(STATS_EVENTS.INTERACTION);
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
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start pt-10 md:pt-0"
        >
          {/* Institution Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Student @ GVPT
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Chaitanya Kumar <br />
            <span className="text-blue-500">Sahu</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed">
            Building <span className="text-white font-semibold">Reliable Web Applications</span> and responsive <span className="text-white font-semibold">Full-Stack Systems</span> focused on performance and design.
          </p>

          {/* Currently Building Status Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/10 max-w-xl">
             <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Working On
             </div>
             <p className="text-sm text-zinc-400 leading-relaxed text-center sm:text-left">
                Currently Building: <span className="text-white font-medium">Advanced Web Interfaces</span> & <span className="text-white font-medium">Full-Stack Platforms</span>
             </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button onClick={scrollToProjects} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollToContact} className="px-6 py-3 rounded-xl border border-white/20 text-zinc-300 font-semibold hover:bg-white/5 transition-all">
              Contact
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT: Profile Section ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group mt-10 lg:mt-0"
        >
          {/* Profile Card Container */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-zinc-900/50 p-2 border border-white/10 shadow-2xl overflow-hidden mx-auto">
             <Image 
               src="/profile.JPG" 
               width={384} 
               height={384} 
               alt="Chaitanya Kumar Sahu" 
               className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500" 
               priority 
             />
          </div>

          {/* Availability Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 px-6 py-2 rounded-full shadow-2xl flex items-center gap-2 z-30 whitespace-nowrap"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-zinc-300">Open for Hiring</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Simple Animated Tech Ribbon ── */}
      <div className="w-full max-w-7xl mt-24 border-t border-b border-white/10 py-4 overflow-hidden relative bg-transparent">
         <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
         <div className="animate-marquee gap-12 text-sm font-semibold text-zinc-500 items-center">
            <span>React.js</span> <span className="text-zinc-700">•</span>
            <span>Next.js</span> <span className="text-zinc-700">•</span>
            <span>Firebase</span> <span className="text-zinc-700">•</span>
            <span>Tailwind CSS</span> <span className="text-zinc-700">•</span>
            <span>Python</span> <span className="text-zinc-700">•</span>
            <span>FastAPI</span> <span className="text-zinc-700">•</span>
            <span>MongoDB</span> <span className="text-zinc-700">•</span>
            <span>SQL Database</span> <span className="text-zinc-700">•</span>
            <span>OpenCV</span> <span className="text-zinc-700">•</span>
            
            {/* Duplicated for infinite effect */}
            <span>React.js</span> <span className="text-zinc-700">•</span>
            <span>Next.js</span> <span className="text-zinc-700">•</span>
            <span>Firebase</span> <span className="text-zinc-700">•</span>
            <span>Tailwind CSS</span> <span className="text-zinc-700">•</span>
            <span>Python</span> <span className="text-zinc-700">•</span>
            <span>FastAPI</span> <span className="text-zinc-700">•</span>
            <span>MongoDB</span> <span className="text-zinc-700">•</span>
            <span>SQL Database</span> <span className="text-zinc-700">•</span>
            <span>OpenCV</span> <span className="text-zinc-700">•</span>
         </div>
      </div>

      {/* ── Stats Grid Row ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-7xl mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="bg-white/[0.02] border border-white/5 p-8 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm">
          <Github className="w-8 h-8 text-zinc-500 mb-3" />
          <span className="text-4xl font-bold text-white">11+</span>
          <p className="text-xs font-semibold text-zinc-500 uppercase mt-2">Repositories</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 p-8 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm">
          <Briefcase className="w-8 h-8 text-zinc-500 mb-3" />
          <span className="text-4xl font-bold text-white">2</span>
          <p className="text-xs font-semibold text-zinc-500 uppercase mt-2">Internships</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 p-8 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm">
          <Code2 className="w-8 h-8 text-zinc-500 mb-3" />
          <span className="text-4xl font-bold text-white">3+</span>
          <p className="text-xs font-semibold text-zinc-500 uppercase mt-2">Projects</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 p-8 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm">
          <Award className="w-8 h-8 text-zinc-500 mb-3" />
          <span className="text-4xl font-bold text-white">15+</span>
          <p className="text-xs font-semibold text-zinc-500 uppercase mt-2">Certificates</p>
        </div>
      </motion.div>

    </div>
  );
};
