"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2, Cpu, Download, FileText, Smartphone, Zap, ShieldCheck, HelpCircle, Activity, Scale, Compass } from "lucide-react";
import { STATS_EVENTS, trackEvent } from "@/lib/stats";

export const ProjectSpotlight = () => {
  const challenges = [
    { title: "Network Inconsistency", desc: "Standard REST endpoints fail when networks are congested during major municipal crises." },
    { title: "Notification Delays", desc: "Generic push notifications lack high-priority delivery flags, leading to vital minutes of delay." },
    { title: "Power & GPS Constraints", desc: "Continuous GPS coordinate polling quickly drains battery reserves during prolonged critical situations." },
  ];

  const implementations = [
    { title: "Firebase Local Cache Integration", desc: "Configured localized local replication states. Active incident updates cache locally, executing instant callback queues the millisecond signal re-establishes." },
    { title: "Programmatic SMS Gateway", desc: "Integrated high-speed RESTful API pipelines via Fast2SMS to fire automated carrier-level text alerts when users go completely offline." },
    { title: "Precision Coordinate Throttling", desc: "Developed a custom GPS client routing module that automatically drops polling frequency if the client device is stationary, instantly preserving vital cell battery." },
  ];

  return (
    <section id="raksha-spotlight" className="section-padding container px-4 mx-auto max-w-7xl relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Case Study Header */}
      <div className="mb-16 md:mb-24 text-center lg:text-left">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
          <Smartphone className="w-4 h-4" /> 
          Deep Case Study
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          Raksha – Alert <br />
          <span className="text-gradient">Smart Safety Infrastructure</span>
        </h2>
        <p className="text-zinc-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mt-6 leading-relaxed max-w-xl">
          “System analysis, architectural trade-offs, and custom synchronization protocols.”
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Systems Analysis (7 Columns) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Section 1: The Problem & Limitation */}
          <div className="glass-card p-8 md:p-12 bg-zinc-950/60 border border-white/5 rounded-[3rem] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 text-red-400 font-black uppercase tracking-widest text-xs">
              <ShieldAlert className="w-4 h-4 animate-pulse" />
              01 // The System Bottleneck
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
              Existing public safety emergency structures remain sluggish due to complete reliance on slow synchronous Web requests and flat API loops. During local crises, mobile carrier channels experience rapid congestion, dropping critical HTTP packages. Furthermore, active background GPS mapping drains cell battery in hours, leaving users isolated in critical zones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((c, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">{c.title}</h4>
                  <p className="text-[11px] text-zinc-500 leading-normal uppercase tracking-wider">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Real Technical Implementation */}
          <div className="glass-card p-8 md:p-12 bg-zinc-950/60 border border-white/5 rounded-[3rem] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 text-cyan-400 font-black uppercase tracking-widest text-xs">
              <Activity className="w-4 h-4" />
              02 // Concrete Engineering Implementations
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
              To build a fail-proof platform, we integrated low-overhead persistent socket connections with asynchronous local databases. This ensures high-priority payloads are executed instantly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {implementations.map((imp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">{imp.title}</h4>
                  <p className="text-[11px] text-zinc-400 leading-normal uppercase tracking-wider">{imp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Decisions, Trade-offs & Actions (5 Columns) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Trade-offs & Decisions Card */}
          <div className="glass-card p-8 md:p-10 bg-zinc-950/60 border border-white/5 rounded-[3rem] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 text-amber-400 font-black uppercase tracking-widest text-xs">
              <Scale className="w-4 h-4" />
              03 // Engineering Trade-offs
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black text-zinc-200 uppercase tracking-wider mb-2">
                  Firebase RTDB vs Custom WebSockets
                </h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider">
                  **Decision:** Chose Firebase Realtime Database over hosting custom Node/Socket.io instances.
                  <br />
                  **Trade-off:** Firebase introduces slight proprietary vendor-lockin, but provides superior automatic offline data synchronization, high-availability replication, and seamless network handshakes during local internet outages.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h4 className="text-xs font-black text-zinc-200 uppercase tracking-wider mb-2">
                  GPS Frequency Throttling vs Accuracy
                </h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider">
                  **Decision:** Dropped precise continuous polling in favor of a hybrid motion-threshold loop.
                  <br />
                  **Trade-off:** Coordinate precision fluctuates up to 5 meters when static, but increases mobile cell battery lifespan from 4 hours of continuous operations to over 16 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Future Scaling scope */}
          <div className="glass-card p-8 md:p-10 bg-zinc-950/60 border border-white/5 rounded-[3rem] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 text-violet-400 font-black uppercase tracking-widest text-xs">
              <Compass className="w-4 h-4" />
              04 // Future Scaling
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed uppercase tracking-wider">
              Future releases are designed to incorporate decentralized Bluetooth mesh network arrays to broadcast alerts between devices locally when standard cell tower networks fail. Machine learning models will also run locally on devices to classify reports and optimize dispatch queues.
            </p>
          </div>

          {/* Deployment and Deliverables Hub */}
          <div className="glass-card p-8 md:p-10 bg-gradient-to-tr from-cyan-600/10 to-blue-600/10 border-cyan-500/30 rounded-[3rem] relative overflow-hidden">
            <div className="absolute right-[-10%] top-[-10%] opacity-[0.03]">
              <ShieldCheck className="w-40 h-40" />
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-xl font-black text-white font-outfit uppercase mb-1">Interactive Assets</h3>
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em]">Deployments and technical documentation</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/certificates/chaitu.pdf" 
                  target="_blank" 
                  onClick={() => { trackEvent(STATS_EVENTS.RESUME_READ); trackEvent(STATS_EVENTS.INTERACTION); }} 
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-black text-[9px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  <FileText className="w-4 h-4" />
                  Report
                </a>
                <a 
                  href="/certificates/Raksha%20Nox.apk" 
                  onClick={() => trackEvent(STATS_EVENTS.INTERACTION)} 
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black border border-white/20 text-white font-black text-[9px] uppercase tracking-widest hover:bg-white/5 transition-all shadow-xl"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
