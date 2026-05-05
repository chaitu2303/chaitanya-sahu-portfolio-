import { motion } from "framer-motion";
import { Globe2, Cpu, Database, Activity, Sparkles, Terminal, Calendar as CalendarIcon, Clock, Heart, Home, Rocket, Bike, Car, Target, CheckCircle2, FileText, Shield, ExternalLink, Download, Smartphone, Box } from "lucide-react";
import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-black font-outfit text-white tabular-nums tracking-tighter">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
      </span>
      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mt-2">Central System Time</span>
    </div>
  );
};

const SimpleCalendar = () => {
  const date = new Date();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDay = date.getDate();
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-black text-white font-outfit uppercase tracking-tighter">{date.toLocaleString('default', { month: 'long' })}</span>
        <span className="text-xs font-black text-zinc-500">{date.getFullYear()}</span>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {days.map((d, i) => <span key={`${d}-${i}`} className="text-[9px] font-black text-zinc-600 uppercase">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(31)].map((_, i) => (
          <div 
            key={i} 
            className={`aspect-square flex items-center justify-center rounded-lg text-[10px] font-bold ${i+1 === currentDay ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'text-zinc-500 hover:bg-white/5 transition-colors'}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export const MyWorld = () => {
  const [text, setText] = useState("");
  const fullText = "> Loading Life_OS v2.8...\n> Strategic_Vision: Synchronized\n> Assets_Ready: chaitu.pdf, raksha.apk\n> Authorized Access: Chaitanya Kumar Sahu";

  useEffect(() => {
    let charIndex = 0;
    const charTimer = setInterval(() => {
      if (charIndex < fullText.length) {
        setText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(charTimer);
      }
    }, 40);
    return () => clearInterval(charTimer);
  }, []);

  const bday = new Date("2005-03-23");
  const age = new Date().getFullYear() - bday.getFullYear();

  const futureGoals = [
    { text: "Secure a high-paying position at a top-tier global tech corporation.", icon: Target, color: "cyan" },
    { text: "Establish and scale an innovative startup to solve real-world problems.", icon: Rocket, color: "magenta" },
    { text: "Acquire a dream home with state-of-the-art infrastructure.", icon: Home, color: "blue" },
  ];

  const collection = [
    { name: "Superbike Concept", type: "Bike", icon: Bike },
    { name: "Luxury Sedan", type: "Car", icon: Car },
    { name: "Off-Road Beast", type: "4x4", icon: Car },
  ];

  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl">
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <Globe2 className="w-4 h-4" /> 
          Private Life OS
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          My <span className="text-gradient">World</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ── LEFT: Calendar & Assets (4 Columns) ── */}
        <div className="lg:col-span-4 space-y-8">
          {/* Calendar Module */}
          <div className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[3rem]">
            <SimpleCalendar />
          </div>

          {/* Asset Downloads Hub */}
          <div className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[3rem] space-y-6">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                   <Box className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight">System Assets</h3>
             </div>
             <div className="grid grid-cols-1 gap-4">
                <a href="/certificates/chaitu.pdf" target="_blank" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                   <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Project Report</span>
                   </div>
                   <ExternalLink className="w-4 h-4 text-zinc-600" />
                </a>
                <a href="/certificates/Raksha%20Nox.apk" className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                   <div className="flex items-center gap-4">
                      <Smartphone className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Raksha APK</span>
                   </div>
                   <Download className="w-4 h-4 text-zinc-600" />
                </a>
             </div>
          </div>
        </div>

        {/* ── CENTER: Vision & Spotlight (4 Columns) ── */}
        <div className="lg:col-span-4 space-y-8">
           {/* RAKSHA Spotlight */}
           <div className="glass-card p-10 bg-gradient-to-br from-zinc-950 to-zinc-900 border-cyan-500/30 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full" />
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyan-400" />
                 </div>
                 <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight">Highlight</h3>
              </div>
              <h4 className="text-2xl font-black text-white font-outfit uppercase mb-4 group-hover:text-cyan-400 transition-colors">Raksha Alert</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-10">
                A mission-critical emergency system designed to bridge the gap between citizens and authorities in real-time.
              </p>
              <div className="flex gap-4">
                 <div className="px-4 py-2 rounded-xl bg-white/5 text-[9px] font-black text-zinc-500 uppercase">React</div>
                 <div className="px-4 py-2 rounded-xl bg-white/5 text-[9px] font-black text-zinc-500 uppercase">Firebase</div>
              </div>
           </div>

           {/* Future Vision Board */}
           <div className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[3rem] flex-1">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-magenta-500/10 border border-magenta-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-magenta-400" />
                 </div>
                 <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight">Future Goals</h3>
              </div>
              <div className="space-y-4">
                 {futureGoals.map((goal, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-4">
                       <goal.icon className={`w-5 h-5 text-${goal.color}-400 mt-0.5 flex-shrink-0`} />
                       <span className="text-[11px] font-medium text-zinc-300 leading-normal">{goal.text}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* ── RIGHT: Garage & Terminal (4 Columns) ── */}
        <div className="lg:col-span-4 space-y-8">
           {/* Identity & Clock */}
           <div className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[3rem] space-y-8">
              <DigitalClock />
              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                 <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Birth Date</p>
                    <span className="text-xl font-black text-white font-outfit">23-03-2005</span>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Status</p>
                    <span className="text-sm font-black text-emerald-400 uppercase tracking-widest">Active</span>
                 </div>
              </div>
           </div>

           {/* Garage Module */}
           <div className="glass-card p-10 bg-zinc-950/90 border-white/5 rounded-[3rem]">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tight">Collections</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                 {collection.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors">
                       <div className="flex items-center gap-4">
                          <item.icon className="w-5 h-5 text-zinc-500" />
                          <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{item.name}</span>
                       </div>
                       <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">{item.type}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* System Notes Terminal */}
           <div className="glass-card p-10 bg-black/80 backdrop-blur-3xl border border-white/5 rounded-[3rem] relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Life_OS_Status.sh
                 </div>
              </div>
              <div className="font-mono text-[11px] text-cyan-400/80 min-h-[100px] leading-relaxed">
                 {text}
                 <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2 h-4 bg-cyan-400 ml-1 inline-block align-middle" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
