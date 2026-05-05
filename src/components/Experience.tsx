import { motion } from "framer-motion";
import { Briefcase, ShieldAlert, ShieldCheck, TerminalSquare, Sparkles } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Symbiosys Technologies",
      role: "Cybersecurity Intern",
      period: "2025",
      icon: ShieldCheck,
      color: "cyan",
      highlights: [
        "Conducted thorough Vulnerability Assessment and Penetration Testing (VAPT) on web applications.",
        "Identified and documented critical security flaws, including complex SQL Injection vulnerabilities.",
        "Collaborated with the development team to patch vulnerabilities and improve overall security posture.",
      ],
      tools: ["VAPT", "SQL Injection", "Burp Suite", "Nmap"],
    },
    {
      company: "Adiroha Solutions",
      role: "Cybersecurity Intern",
      period: "2024",
      icon: ShieldAlert,
      color: "blue",
      highlights: [
        "Executed simulated cyberattacks using Metasploit to test infrastructure resilience.",
        "Analyzed network traffic and system logs to identify potential security breaches.",
        "Drafted comprehensive vulnerability reports with actionable remediation steps for clients.",
      ],
      tools: ["Metasploit", "Vulnerability Analysis", "Network Security", "Reporting"],
    },
  ];

  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl">
      <div className="mb-16 md:mb-24 text-center lg:text-left">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <Briefcase className="w-4 h-4" /> 
          Career Journey
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          Professional <br className="hidden md:block" />
          <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div className="relative">
        {/* Cinematic Timeline Line */}
        <div className="absolute left-6 md:left-12 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-32"
            >
              {/* Timeline Indicator */}
              <div className={`absolute left-0 md:left-4 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-950 border-2 border-white/10 flex items-center justify-center z-10 shadow-2xl`}>
                <div className={`absolute inset-0 rounded-full blur-xl opacity-20 bg-${exp.color}-500`} />
                <exp.icon className={`w-5 h-5 md:w-8 md:h-8 text-${exp.color}-400`} />
              </div>

              {/* Enhanced Experience Card */}
              <div className="glass-card p-8 md:p-12 hover:bg-white/[0.01] border-white/5 hover:border-blue-500/30 transition-all group rounded-[2.5rem]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-xl md:text-3xl font-black text-white group-hover:text-blue-400 transition-colors font-outfit uppercase tracking-tighter">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg font-black text-zinc-500 mt-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-black text-white bg-white/5 border border-white/10 px-6 py-2 rounded-xl uppercase tracking-[0.2em] inline-block shadow-xl">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-4 text-zinc-400 text-sm md:text-base leading-relaxed font-medium font-sora">
                      <TerminalSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 pt-8 border-t border-white/5">
                  {exp.tools.map(tool => (
                    <span key={tool} className="text-[9px] font-black text-zinc-300 px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg uppercase tracking-widest font-sora">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
