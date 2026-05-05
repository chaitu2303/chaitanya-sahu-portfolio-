import { motion } from "framer-motion";
import { Activity, Github, ShieldAlert, Star, GitFork, Linkedin, ExternalLink, Award, Code2, Zap } from "lucide-react";
import linkedinPosts from "../data/linkedin-posts.json";
import { useState, useEffect } from "react";
import { getGithubRepos, type Repository } from "@/lib/github";
import { certs } from "./Certificates";

export const Dashboard = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    getGithubRepos("chaitu2303").then(data => setRepos(data));
    
    // System Uptime Logic (Simulated active session)
    const startTime = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl">
      <div className="mb-24 text-center lg:text-left relative z-20">
        <div className="inline-block p-10 md:p-16 glass-card bg-zinc-950/80 backdrop-blur-3xl border-white/5 rounded-[3.5rem] shadow-[0_0_100px_rgba(34,211,238,0.1)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" 
            />
            Live Technical Analytics
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter font-outfit uppercase leading-none">
            Developer <br className="md:hidden" />
            <span className="text-gradient">Analytics</span>
          </h2>
        </div>
      </div>

      {/* ── Analytics Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: Technical Stats (8 Columns) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center text-center group">
              <Github className="w-10 h-10 text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              <span className="text-5xl font-black text-white font-outfit">{repos.length}</span>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-3">Live Repos</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center text-center group">
              <Award className="w-10 h-10 text-zinc-600 mb-6 group-hover:text-amber-400 transition-colors" />
              <span className="text-5xl font-black text-white font-outfit">{certs.length}+</span>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-3">Verified Certs</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center text-center group">
              <ShieldAlert className="w-10 h-10 text-zinc-600 mb-6 group-hover:text-magenta-400 transition-colors" />
              <span className="text-5xl font-black text-white font-outfit">98%</span>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-3">VAPT Readiness</p>
            </motion.div>
          </div>

          {/* Detailed Performance Row */}
          <div className="glass-card p-10 md:p-14 bg-zinc-950/90 border-white/5 rounded-[3rem] relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white font-outfit uppercase tracking-tighter">System Pulse</h3>
                <div className="flex items-center gap-4">
                   <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Uptime:</div>
                   <div className="text-xl font-mono font-black text-cyan-400 tabular-nums bg-cyan-500/10 px-4 py-1.5 rounded-lg border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      {formatUptime(uptime)}
                   </div>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="text-center">
                   <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                   <span className="text-3xl font-black text-white block font-outfit">100%</span>
                   <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mt-1">Project Velocity</p>
                </div>
                <div className="text-center">
                   <Code2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                   <span className="text-3xl font-black text-white block font-outfit">6+</span>
                   <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mt-1">Core Modules</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  <span>Cybersecurity Audit Index</span>
                  <span className="text-magenta-400">98% Verified</span>
                </div>
                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '98%' }}
                    className="h-full bg-gradient-to-r from-magenta-600 to-rose-600 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Professional Feed (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div className="glass-card bg-zinc-950/90 border-white/5 rounded-[3rem] p-10 flex flex-col flex-1">
             <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                   <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                   </div>
                   <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight">Professional Feed</h3>
                </div>
                <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-zinc-500 hover:text-white transition-all">
                   <ExternalLink className="w-4 h-4" />
                </a>
             </div>

             <div className="space-y-6 overflow-y-auto max-h-[500px] custom-scrollbar pr-2">
                {linkedinPosts.map((post, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-all group"
                  >
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                      {post.text}
                    </p>
                    <div className="flex items-center justify-between">
                       <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">{new Date(post.date).toLocaleDateString()}</span>
                       <span className="text-[8px] font-black text-blue-400/60 uppercase tracking-widest">Post #{post.id}</span>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
