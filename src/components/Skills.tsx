import { motion } from "framer-motion";
import { Code2, Globe, Shield, Wrench, Layers } from "lucide-react";

export const Skills = () => {
  const categories = [
    {
      title: "Programming",
      icon: Code2,
      color: "cyan",
      skills: ["Python", "Java", "SQL", "C"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "blue",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "magenta",
      skills: ["Nmap", "Metasploit", "Burp Suite", "OWASP ZAP", "VAPT"]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "amber",
      skills: ["Git", "Docker", "VS Code", "Supabase"]
    }
  ];

  return (
    <div className="section-padding container px-4 mx-auto max-w-7xl">
      <div className="text-center lg:text-left mb-16 md:mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
          <Layers className="w-4 h-4" /> 
          Technical Arsenal
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
          Core <br className="hidden md:block" />
          <span className="text-gradient">Competencies</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`glass-card p-8 md:p-12 hover:bg-white/[0.01] border-white/5 hover:border-cyan-500/30 transition-all group rounded-[2.5rem]`}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className={`p-4 rounded-2xl bg-zinc-950 border border-white/10 group-hover:scale-110 transition-transform shadow-2xl`}>
                <category.icon className={`w-7 h-7 ${category.color === 'magenta' ? 'text-magenta-400' : 'text-' + category.color + '-400'}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter font-outfit uppercase">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <div
                  key={skill}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-black text-zinc-400 hover:text-white uppercase tracking-widest transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
