import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2, Cpu, Globe, Rocket, Zap, ShieldCheck, Download, FileText, Smartphone, MapPin, Bell, Camera, Layout, Shield } from "lucide-react";

export const ProjectSpotlight = () => {
  const challenges = [
    "Critical delays in spreading emergency information to nearby citizens.",
    "Lack of a unified system for missing person alerts and SOS reporting.",
    "Total internet dependency in life-threatening critical situations.",
    "Absence of real-time location-based awareness for authorities.",
    "Limited and slow communication channels between citizens and responders."
  ];

  const solutions = [
    "Engineered a high-performance real-time alert engine using Firebase.",
    "Integrated a localized SOS panic feature with millisecond-precision GPS.",
    "Implemented a hybrid notification system (Real-time Push + Global SMS).",
    "Enabled instant incident reporting with live photo and location data.",
    "Developed a centralized admin command center for real-time monitoring."
  ];

  const features = [
    { title: "SOS Button", icon: Zap, desc: "Instant panic alert activation." },
    { title: "Live Tracking", icon: MapPin, desc: "Real-time coordinate synchronization." },
    { title: "Dual-Channel", icon: Bell, desc: "Simultaneous Push & SMS delivery." },
    { title: "Incident Hub", icon: Camera, desc: "Location-tagged photo reporting." },
    { title: "Admin Portal", icon: Layout, desc: "Master dashboard for responders." },
    { title: "Smart Tags", icon: Shield, desc: "Categorized alerts (Crime, Disaster)." },
  ];

  const techStack = [
    { name: "React.js", type: "Frontend" },
    { name: "Node.js", type: "Backend" },
    { name: "Firebase", type: "Cloud Services" },
    { name: "Fast2SMS", type: "Messaging API" },
    { name: "Google Maps", type: "Geospatial API" },
  ];

  return (
    <section id="raksha-spotlight" className="section-padding container px-4 mx-auto max-w-7xl relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-magenta-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* ── LEFT: Project Info ── */}
        <div className="lg:w-1/2 space-y-10">
           <div>
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                <Smartphone className="w-4 h-4" /> 
                Case Study: Raksha
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
                Raksha – Alert: <br />
                <span className="text-gradient">Smart Safety System</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base mt-8 font-black uppercase tracking-[0.3em] flex items-center gap-4">
                 “Enhancing community safety through real-time SOS alerts and GPS tracking.”
              </p>
           </div>

           {/* Challenges vs Solutions */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 bg-zinc-950/80 border-red-500/20 rounded-[2.5rem]">
                 <div className="flex items-center gap-3 mb-6 text-red-400 font-black uppercase tracking-widest text-xs">
                    <ShieldAlert className="w-4 h-4" /> The Challenge
                 </div>
                 <ul className="space-y-4">
                    {challenges.map((c, i) => (
                       <li key={i} className="flex items-start gap-3 text-[11px] text-zinc-400 font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-1.5 flex-shrink-0" />
                          {c}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="glass-card p-8 bg-zinc-950/80 border-emerald-500/20 rounded-[2.5rem]">
                 <div className="flex items-center gap-3 mb-6 text-emerald-400 font-black uppercase tracking-widest text-xs">
                    <CheckCircle2 className="w-4 h-4" /> The Solution
                 </div>
                 <ul className="space-y-4">
                    {solutions.map((s, i) => (
                       <li key={i} className="flex items-start gap-3 text-[11px] text-zinc-300 font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-1.5 flex-shrink-0" />
                          {s}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Tech Stack Badges */}
           <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                 <div key={tech.name} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-start hover:bg-white/10 transition-all cursor-default">
                    <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">{tech.type}</span>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{tech.name}</span>
                 </div>
              ))}
           </div>
        </div>

        {/* ── RIGHT: Features & Deployment ── */}
        <div className="lg:w-1/2 flex flex-col justify-between">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((f, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -5 }}
                   className="glass-card p-8 bg-zinc-950/60 border-white/5 rounded-[2.5rem] group hover:border-cyan-500/30 transition-all"
                 >
                    <f.icon className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2">{f.title}</h4>
                    <p className="text-[10px] font-medium text-zinc-500 leading-relaxed uppercase tracking-widest">{f.desc}</p>
                 </motion.div>
              ))}
           </div>

           {/* Deployment Hub */}
           <div className="glass-card p-10 bg-gradient-to-tr from-cyan-600/10 to-blue-600/10 border-cyan-500/30 rounded-[3rem] relative overflow-hidden">
              <div className="absolute right-[-5%] top-[-10%] opacity-5">
                 <ShieldCheck className="w-40 h-40" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-white font-outfit uppercase mb-2">Live Experience</h3>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Deployments and technical documentation</p>
                 </div>
                 <div className="flex flex-wrap justify-center gap-5">
                    <a href="/certificates/chaitu.pdf" target="_blank" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                       <FileText className="w-4 h-4" />
                       Report
                    </a>
                    <a href="/certificates/Raksha%20Nox.apk" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-black border border-white/20 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all shadow-xl">
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
