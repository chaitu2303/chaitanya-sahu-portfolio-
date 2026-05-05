import { motion } from "framer-motion";
import { Code2, Zap, Layout } from "lucide-react";

export const About = () => {
  return (
    <div className="container px-4 mx-auto min-h-[60vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
          About <span className="text-violet-400">Me</span>
        </h2>
        
        <div className="glass-card p-8 text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 text-center border border-white/[0.05] bg-zinc-900/40">
          <p>
            I'm a Full-Stack Developer specializing in React and MongoDB. 
            I build responsive, high-performance web applications focused on clean code and exceptional user experiences. 
            My goal is to deliver scalable solutions that solve real-world problems while maintaining robust security and modern design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Layout, title: "Frontend", desc: "React, Next.js, Tailwind" },
            { icon: Code2, title: "Backend", desc: "Node.js, Express, Python" },
            { icon: Zap, title: "Database", desc: "MongoDB, SQL, Firebase" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center flex flex-col items-center"
            >
              <item.icon className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="text-white font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
