"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Radio, BellRing, Settings } from "lucide-react";

export const EngineeringDepth = () => {
  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl relative">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Title Section */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
          <Settings className="w-4 h-4" /> 
          Architectural Core
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          Engineering <br />
          <span className="text-gradient">Depth & Systems</span>
        </h2>
        <p className="text-zinc-500 text-xs md:text-sm font-black uppercase tracking-[0.25em] mt-8 max-w-2xl mx-auto">
          “High-performance pipelines, fail-safe fallbacks, and real-time synchronization.”
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Interactive Diagram (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-card p-6 md:p-10 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                Live Pipelines: ACTIVE_TRANSMISSION
              </span>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              </div>
            </div>

            {/* SVG Animated Diagram */}
            <div className="relative aspect-[16/10] w-full bg-black/40 rounded-2xl border border-white/5 p-4 flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                {/* Mobile client to Firebase */}
                <path d="M 150 250 H 350" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                {/* Firebase to Engine */}
                <path d="M 450 250 H 650" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                {/* Firebase to SMS */}
                <path d="M 400 200 L 400 100 L 580 100" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                {/* Firebase to FCM */}
                <path d="M 400 300 L 400 400 L 580 400" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

                {/* Animated Flowing Dots (Cyan/Magenta) */}
                <motion.circle cx="150" cy="250" r="4" fill="#06b6d4"
                  animate={{ cx: [150, 350], cy: [250, 250] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                <motion.circle cx="450" cy="250" r="4" fill="#d946ef"
                  animate={{ cx: [450, 650], cy: [250, 250] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }}
                />
                <motion.circle cx="400" cy="200" r="3" fill="#3b82f6"
                  animate={{ cx: [400, 400, 580], cy: [200, 100, 100] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
                <motion.circle cx="400" cy="300" r="3" fill="#10b981"
                  animate={{ cx: [400, 400, 580], cy: [300, 400, 400] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                />
              </svg>

              {/* Grid Node Overlays */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 pr-6 sm:p-8 sm:pr-16 lg:pr-24 font-mono text-[9px] uppercase tracking-wider text-zinc-500 pointer-events-none">
                {/* Top Nodes Row */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2" />
                  {/* Gateway (SMS) */}
                  <div className="relative bg-zinc-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-center shadow-lg w-32 sm:w-36 -translate-x-6 sm:-translate-x-12 lg:-translate-x-16 -translate-y-2 sm:-translate-y-5">
                    <span className="text-[7px] text-zinc-500 block">Gateway</span>
                    <span className="text-zinc-200 block mt-0.5 text-[8px] sm:text-xs">Fast2SMS (SMS)</span>
                    <span className="text-emerald-400 block mt-0.5 text-[7px] sm:text-[9px]">READY</span>
                  </div>
                </div>

                {/* Center Node Row */}
                <div className="flex justify-between items-center relative z-10 gap-2 sm:gap-4">
                  {/* Client App */}
                  <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-3 sm:p-4 text-center shadow-lg w-24 sm:w-28 flex-shrink-0">
                    <span className="text-[7px] text-cyan-400 block mb-1 font-black uppercase">App Client</span>
                    <span className="text-white font-bold block text-[8px] sm:text-xs">Mobile APK</span>
                    <span className="text-zinc-500 text-[6px] block mt-1">BACKGROUND SERVICE</span>
                  </div>

                  {/* Sync Database */}
                  <div className="bg-zinc-900/90 border border-cyan-500/20 rounded-2xl p-3 sm:p-4 text-center shadow-xl w-28 sm:w-32 relative flex-shrink-0">
                    <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl animate-pulse pointer-events-none" />
                    <span className="text-[7px] text-cyan-400 block mb-1 font-black uppercase">Database Core</span>
                    <span className="text-white font-bold block text-[8px] sm:text-xs">Firebase RTDB</span>
                    <span className="text-emerald-400 text-[6px] block mt-1">SYNCED (16ms)</span>
                  </div>

                  {/* Control Command Portal */}
                  <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-3 sm:p-4 text-center shadow-lg w-24 sm:w-28 flex-shrink-0 -translate-x-4 sm:-translate-x-10 lg:-translate-x-14">
                    <span className="text-[7px] text-magenta-400 block mb-1 font-black uppercase">Web Portal</span>
                    <span className="text-white font-bold block text-[8px] sm:text-xs">Admin Hub</span>
                    <span className="text-zinc-500 text-[6px] block mt-1">MAPBOX RENDER</span>
                  </div>
                </div>

                {/* Bottom Nodes Row */}
                <div className="flex justify-between items-end">
                  <div />
                  {/* Gateway (Push) */}
                  <div className="relative bg-zinc-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-center shadow-lg w-32 sm:w-36 -translate-x-6 sm:-translate-x-12 lg:-translate-x-16 translate-y-2 sm:translate-y-5">
                    <span className="text-[7px] text-zinc-500 block">Notification Node</span>
                    <span className="text-zinc-200 block mt-0.5 text-[8px] sm:text-xs">Firebase FCM</span>
                    <span className="text-emerald-400 block mt-0.5 text-[7px] sm:text-[9px]">STANDBY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Pillars (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Pillar 1 */}
          <div className="glass-card p-8 bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] hover:border-cyan-500/20 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-black text-white uppercase tracking-tight font-outfit">Dynamic Live Polling Protocol</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wider">
                Implements coordinate polling throttling based on battery levels and device activity states. This optimizes GPS battery consumption while ensuring precise precision during active alerts.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card p-8 bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] hover:border-blue-500/20 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <BellRing className="w-5 h-5 text-blue-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-black text-white uppercase tracking-tight font-outfit">Dual-Channel Failover Routing</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wider">
                Utilizes asynchronous, redundant pipelines: Firebase Cloud Messaging is automatically backed up with programmatic, high-priority SMS gateway protocols if a recipient is disconnected from mobile networks.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card p-8 bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] hover:border-magenta-500/20 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-magenta-500/10 border border-magenta-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-magenta-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-black text-white uppercase tracking-tight font-outfit">Secure Transmission Hardening</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wider">
                Encrypts active coordinate structures on transfer. Integrates robust Firebase rules preventing cross-tenant access, ensuring secure incident reporting logs in sensitive environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
