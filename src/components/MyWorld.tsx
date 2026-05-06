import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Cpu, Sparkles, Target, FileText, Shield, ExternalLink, Download, Smartphone, Box, X, Layers, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { STATS_EVENTS, trackEvent } from "@/lib/stats";

const calculateAge = () => {
  const birthDate = new Date("2005-03-23");
  const difference = Date.now() - birthDate.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

interface VisionDetail {
  name: string;
  type: string;
  description: string;
  timeline: string;
  technologies: string[];
  roadmap: string[];
}

const visionDetails: Record<string, VisionDetail> = {
  "Smart AI Projects": {
    name: "Smart AI Projects",
    type: "INNOVATION",
    description: "Building simple conversational interfaces, exploring NLP/LLM API integrations, and training basic computer vision models for hobby projects.",
    timeline: "Ongoing Exploration & Study",
    technologies: ["React.js", "Python", "FastAPI", "TensorFlow", "LangChain", "OpenAI APIs"],
    roadmap: [
      "Experiment with large language model APIs and prompt engineering",
      "Deploy small models on local development machines",
      "Learn basic neural network classification workflows"
    ]
  },
  "Cybersecurity Exploration": {
    name: "Cybersecurity Exploration",
    type: "SECURITY",
    description: "Studying defensive security principles, practicing web application vulnerability testing on local labs, and learning fundamental system hardening techniques.",
    timeline: "Active Practice & Lab Work",
    technologies: ["Metasploit", "Nmap", "Wireshark", "Burp Suite", "OWASP Top 10", "Linux Hardening"],
    roadmap: [
      "Study OWASP Top 10 vulnerabilities in test environments",
      "Practice using tools like Nmap and Wireshark to understand network traffic",
      "Build a foundational security compliance checklist for full-stack apps"
    ]
  },
  "Developer Setup": {
    name: "Developer Setup",
    type: "WORKSPACE",
    description: "Assembling a highly productive, clean coding workstation equipped with a robust development machine, dual displays for multitasking, and a home-lab Raspberry Pi cluster.",
    timeline: "Continuous Optimization",
    technologies: ["Workstation Machine", "Linux OS Setup", "Raspberry Pi Lab", "Docker Testing Pools"],
    roadmap: [
      "Set up a custom Linux environment optimized for full-stack development",
      "Integrate local Docker containers for database testing",
      "Implement automated local backups for all codebase folders"
    ]
  },
  "Interactive UI": {
    name: "Interactive UI",
    type: "DESIGN",
    description: "Developing beautiful, responsive interfaces using Framer Motion, subtle animations, and highly interactive React hooks.",
    timeline: "Portfolio Iterations",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Lucide Icons", "Google Fonts"],
    roadmap: [
      "Master simple spring-physics micro-interactions on hover",
      "Create accessible custom UI components for dashboard kits",
      "Implement page transitions that feel quick, sleek, and natural"
    ]
  },
  "Future Product Ideas": {
    name: "Future Product Ideas",
    type: "VISION",
    description: "Designing open-source utilities and tools that solve practical, everyday problems in local task tracking and development workflows.",
    timeline: "Conceptual Phase",
    technologies: ["Next.js", "Firebase", "Node.js", "Tailwind CSS"],
    roadmap: [
      "Sketch clean layout mockups using web vector design kits",
      "Build quick MVP versions of tool ideas using lightweight stacks",
      "Launch project utilities on GitHub to get feedback from other builders"
    ]
  }
};

export const MyWorld = () => {
  const [selectedVision, setSelectedVision] = useState<VisionDetail | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

  useEffect(() => {
    if (selectedVision) {
      document.documentElement.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
    };
  }, [selectedVision]);

  const futureGoals = [
    { text: "Become a strong full-stack developer", icon: Target, color: "cyan" },
    { text: "Build impactful real-world products", icon: Sparkles, color: "magenta" },
    { text: "Grow in AI and cybersecurity", icon: Brain, color: "blue" },
    { text: "Contribute to meaningful tech projects", icon: Layers, color: "cyan" },
  ];

  const visionBoard = [
    { name: "Smart AI Projects", type: "INNOVATION", icon: Brain },
    { name: "Cybersecurity Exploration", type: "SECURITY", icon: Shield },
    { name: "Developer Setup", type: "WORKSPACE", icon: Cpu },
    { name: "Interactive UI", type: "DESIGN", icon: Sparkles },
    { name: "Future Product Ideas", type: "VISION", icon: Target },
  ];

  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
          <Globe2 className="w-4 h-4" /> 
          Engineering Workspace
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          My <span className="text-gradient">Ecosystem</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ── LEFT: Commands & Deliverables (4 Columns) ── */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Deliverables Hub */}
          <div className="glass-card p-8 bg-zinc-950/80 border border-white/5 rounded-[2.5rem] flex flex-col justify-between flex-1">
             <div>
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                     <Box className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-black text-white font-outfit uppercase tracking-tight">Deliverables</h3>
               </div>
               <div className="grid grid-cols-1 gap-4">
                  <a href="/certificates/chaitu.pdf" target="_blank" onClick={() => { trackEvent(STATS_EVENTS.RESUME_READ); trackEvent(STATS_EVENTS.INTERACTION); }} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                     <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Project Report</span>
                     </div>
                     <ExternalLink className="w-4 h-4 text-zinc-600" />
                  </a>
                  <a href="/certificates/Raksha%20Nox.apk" onClick={() => trackEvent(STATS_EVENTS.INTERACTION)} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                     <div className="flex items-center gap-3">
                        <Smartphone className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Raksha APK</span>
                     </div>
                     <Download className="w-4 h-4 text-zinc-600" />
                  </a>
               </div>
             </div>
          </div>

          {/* System Terminal Card - Replaced with PREMIUM SYSTEM STATUS console */}
          <div className="glass-card p-8 bg-black/85 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col justify-center text-left relative overflow-hidden font-mono text-[11px] min-h-[250px]">
             {/* Glowing cyan dot */}
             <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-[9px] font-black uppercase text-emerald-400 tracking-wider">Online</span>
             </div>

             <div className="space-y-4">
                <div>
                   <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1">SYSTEM STATUS</span>
                   <span className="text-sm font-black text-white tracking-widest">{timeString} IST</span>
                </div>

                <div className="border-t border-white/5 pt-3">
                   <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1">AGE</span>
                   <span className="text-xs font-black text-cyan-400 tracking-widest">{calculateAge()} Years</span>
                </div>

                <div className="border-t border-white/5 pt-3">
                   <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1.5">FOCUS</span>
                   <div className="space-y-1 text-[10px] font-black uppercase text-zinc-300 tracking-wider">
                      <p>● Fullstack Systems</p>
                      <p>● AI Learning</p>
                      <p>● Modern UI</p>
                   </div>
                </div>

                <div className="border-t border-white/5 pt-3">
                   <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1">STATUS</span>
                   <span className="text-[10px] font-black text-white uppercase tracking-wider flex items-center">
                      Building • Learning • Shipping
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1.5 h-3.5 bg-cyan-400 ml-1.5 inline-block" />
                   </span>
                </div>
             </div>
          </div>
        </div>

        {/* ── CENTER: Goals & RAKSHA (4 Columns) ── */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           {/* RAKSHA Spotlight Card */}
           <div className="glass-card p-8 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-cyan-500/20 rounded-[2.5rem] relative overflow-hidden group flex-1 flex flex-col justify-center text-left">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full" />
              <div className="flex items-center gap-4 mb-5">
                 <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cyan-400" />
                 </div>
                 <h3 className="text-lg font-black text-white font-outfit uppercase tracking-tight">Active Core</h3>
              </div>
              <h4 className="text-xl font-black text-white font-outfit uppercase mb-3 group-hover:text-cyan-400 transition-colors">Raksha Alert</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-bold uppercase tracking-wider mb-6">
                An emergency communication system built with React and Firebase to send localized coordinates and distress updates.
              </p>
              <div className="flex gap-3">
                 <div className="px-3 py-1.5 rounded-lg bg-white/5 text-[8px] font-black text-zinc-500 uppercase tracking-wider">React</div>
                 <div className="px-3 py-1.5 rounded-lg bg-white/5 text-[8px] font-black text-zinc-500 uppercase tracking-wider">Firebase</div>
              </div>
           </div>

           {/* Future Vision Board */}
           <div className="glass-card p-8 bg-zinc-950/80 border border-white/5 rounded-[2.5rem] flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-magenta-500/10 border border-magenta-500/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-magenta-400" />
                   </div>
                   <h3 className="text-lg font-black text-white font-outfit uppercase tracking-tight">Core Objectives</h3>
                </div>
                <div className="space-y-3">
                   {futureGoals.map((goal, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                         <goal.icon className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                         <span className="text-[10px] font-bold text-zinc-300 leading-snug uppercase tracking-wider">{goal.text}</span>
                      </div>
                   ))}
                </div>
              </div>
           </div>
        </div>

        {/* ── RIGHT: Vision Board (4 Columns, Full Height Alignment) ── */}
        <div className="lg:col-span-4 flex flex-col">
           {/* Vision Board Card */}
           <div className="glass-card p-8 bg-zinc-950/80 border border-white/5 rounded-[2.5rem] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                   </div>
                   <h3 className="text-lg font-black text-white font-outfit uppercase tracking-tight">Vision Board</h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                   {visionBoard.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer transform hover:translate-x-1" onClick={() => { trackEvent(STATS_EVENTS.INTERACTION); setSelectedVision(visionDetails[item.name]); }}>
                         <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-all duration-300" />
                            <span className="text-[9px] font-black text-zinc-300 group-hover:text-white uppercase tracking-widest transition-colors duration-300">{item.name}</span>
                         </div>
                         <span className="text-[8px] font-black text-cyan-400/60 group-hover:text-cyan-400 uppercase tracking-widest transition-colors duration-300">{item.type}</span>
                      </div>
                   ))}
                </div>
              </div>
           </div>
        </div>

      </div>

      {/* ── Futuristic Vision Modal ── */}
      <AnimatePresence>
        {selectedVision && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVision(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden z-10 text-left"
            >
              {/* Top Cyber Accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVision(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Section */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[8px] font-black uppercase tracking-[0.2em] mb-2.5">
                  {selectedVision.type} Protocol
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white font-outfit uppercase tracking-tight">
                  {selectedVision.name}
                </h3>
              </div>

              {/* Content sections */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Objective & Learning Details</h4>
                  <p className="text-zinc-300 text-xs leading-relaxed font-bold uppercase tracking-wider bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    {selectedVision.description}
                  </p>
                </div>

                {/* Timeline and Tech Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                     <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">System Timeline</h4>
                     <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/5 border border-cyan-500/10 p-3 rounded-lg">
                        {selectedVision.timeline}
                     </p>
                  </div>
                  <div>
                     <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Tech Infrastructure</h4>
                     <div className="flex flex-wrap gap-1.5">
                        {selectedVision.technologies.map((tech: string) => (
                          <span key={tech} className="px-2 py-1 bg-white/5 border border-white/5 rounded-lg text-[8px] font-black text-zinc-300 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>

                {/* Road Map Concept */}
                <div>
                  <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-3">Milestones Roadmap</h4>
                  <div className="space-y-2">
                    {selectedVision.roadmap.map((step: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-4.5 h-4.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[8px] font-black text-cyan-400 flex-shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
