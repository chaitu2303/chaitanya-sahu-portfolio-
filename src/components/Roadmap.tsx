import { motion } from "framer-motion";
import { Bike, Zap, Car, Sparkles, Globe, Terminal, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Beginner",
    label: "The Foundation",
    content: "Mastered C Language, Python Basics, and MS Office. Built the core logic of problem solving.",
    icon: Bike,
    vehicle: "🚲",
    color: "cyan",
    xRange: [-40, 40],
  },
  {
    title: "Intermediate",
    label: "The Expansion",
    content: "Mastered Web Development (HTML, CSS, JS) and React. Earned key industry certifications and attended technical workshops.",
    icon: Zap,
    vehicle: "🏍️",
    color: "emerald",
    xRange: [-60, 60],
  },
  {
    title: "Advanced",
    label: "Professional Excellence",
    content: "Developing Full-Stack Projects and completing Internships. Successfully launched the Raksha Alert system.",
    icon: Car,
    vehicle: "🚗",
    color: "magenta",
    xRange: [-80, 80],
  },
];

export const Roadmap = () => {
  return (
    <div id="roadmap" className="section-padding container px-4 mx-auto max-w-7xl relative overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <Globe className="w-4 h-4" /> 
          Journey Progression
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          Evolutionary <br />
          <span className="text-gradient">Roadmap</span>
        </h2>
      </div>

      {/* ── DESKTOP & TABLET HORIZONTAL TIMELINE (Lg Screens Only) ── */}
      <div className="hidden lg:block relative mx-auto mt-12 pb-24 overflow-x-auto custom-scrollbar">
        <div className="min-w-[900px] w-full px-8 relative pt-20 h-[520px]">
          
          {/* Visual Cinematic Cyber-Road */}
          <div className="absolute top-[155px] left-0 right-0 h-16 z-0 flex items-center">
             <div className="w-full h-10 bg-zinc-900/90 border-y border-white/10 relative overflow-hidden rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 flex items-center">
                   <div className="w-full h-[2px] border-t-2 border-dashed border-white/30 animate-[road-flow_10s_linear_infinite]" />
                </div>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0" />
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-magenta-500/0 via-magenta-500/60 to-magenta-500/0" />
             </div>
          </div>

          {/* Journey Stages */}
          <div className="grid grid-cols-3 gap-12 mt-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                {/* Vehicle Evolution Display */}
                <div className="mb-12 relative z-10">
                   <motion.div 
                     animate={{ 
                        x: step.xRange,
                        y: [0, -4, 0] 
                     }}
                     transition={{ 
                        x: { duration: 4 + idx, repeat: Infinity, ease: "linear" },
                        y: { duration: 0.2, repeat: Infinity, ease: "easeInOut" }
                     }}
                     className="text-6xl md:text-8xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.9)] filter brightness-125 select-none"
                   >
                      {step.vehicle}
                   </motion.div>
                   <motion.div 
                     animate={{ x: step.xRange }}
                     transition={{ duration: 4 + idx, repeat: Infinity, ease: "linear" }}
                     className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/60 blur-md rounded-full -z-10"
                   />
                </div>

                {/* Milestone Info Card */}
                <div className="w-full glass-card p-10 bg-[#050508] border border-white/5 rounded-[3.5rem] text-center shadow-[0_40px_80px_rgba(0,0,0,0.7)] group hover:border-cyan-500/30 transition-all relative z-20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-black uppercase tracking-widest mb-6`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {step.title}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 font-outfit">{step.label}</h3>
                  
                  <p className="text-[11px] md:text-xs text-zinc-500 font-bold uppercase leading-relaxed tracking-wider mb-8">
                    {step.content}
                  </p>

                  <div className="flex justify-center gap-3">
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                     <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE VERTICAL TIMELINE ROADMAP (Lg Hidden) ── */}
      <div className="lg:hidden mt-12 space-y-10 relative px-2">
         {/* Vertical Connecting rail */}
         <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-magenta-500 z-0 opacity-30" />

         {steps.map((step, idx) => (
           <motion.div
             key={step.title}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: idx * 0.1 }}
             viewport={{ once: true }}
             className="relative flex gap-5 z-10 text-left"
           >
             {/* Indicator bubble */}
             <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center text-xl flex-shrink-0 relative">
                <span className="absolute inset-0 rounded-2xl bg-cyan-500/5 animate-ping pointer-events-none" />
                {step.vehicle}
             </div>

             {/* Content Card */}
             <div className="glass-card p-6 md:p-8 bg-zinc-950/80 border border-white/5 rounded-[2.5rem] flex-1 relative overflow-hidden">
               <div className="flex items-center gap-2 mb-3">
                  <step.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-[9px] font-black uppercase text-cyan-400 tracking-widest">{step.title} Stage</span>
               </div>
               <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight mb-2">{step.label}</h3>
               <p className="text-[11.5px] text-zinc-400 font-bold uppercase leading-relaxed tracking-wider mb-4">
                  {step.content}
               </p>
               <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
               </div>
             </div>
           </motion.div>
         ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes road-flow {
          from { background-position: 0 0; }
          to { background-position: -80px 0; }
        }
      `}} />
    </div>
  );
};
