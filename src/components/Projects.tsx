import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Code2, AlertCircle, CheckCircle2, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { getGithubRepos, type Repository } from "@/lib/github";

export const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"featured" | "all">("featured");

  useEffect(() => {
    getGithubRepos("chaitu2303").then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  const featuredProjects = [
    {
      title: "AI Face Authentication",
      description: "Biometric security using Haar Cascades for real-time verification and automated campus attendance logging.",
      techStack: ["Python", "OpenCV", "SQLite", "NumPy"],
      challenge: "High latency and lighting inconsistency in live campus environments.",
      solution: "Optimized frame buffers and implemented CLAHE enhancement for 98% accuracy.",
      github: "https://github.com/chaitu2303/Facial-Recognition-Attendance-System",
      demo: "#"
    },
    {
      title: "Real-Estate Engine",
      description: "Full-stack valuation engine with dynamic algorithms and multi-factor location analysis.",
      techStack: ["PHP", "MySQL", "JavaScript", "REST APIs"],
      challenge: "Processing complex relational queries without compromising page load speeds.",
      solution: "Architected optimized schema with indexing and result caching, reducing wait times by 70%.",
      github: "https://github.com/chaitu2303",
      demo: "#"
    }
  ];

  return (
    <div className="section-padding container px-4 mx-auto max-w-6xl relative z-10">
      
      {/* ── Refined Responsive Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-20 gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <FolderGit2 className="w-3.5 h-3.5" /> Development Lab
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-none font-outfit">
            Latest <span className="text-gradient">Innovations</span>
          </h2>
        </div>

        {/* Filter Toggle - Mobile Safe */}
        <div className="flex bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 w-fit backdrop-blur-3xl">
          <button
            onClick={() => setFilter("featured")}
            className={`px-6 md:px-8 py-3 rounded-xl text-[10px] md:text-xs font-black transition-all ${filter === "featured" ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            Featured
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`px-6 md:px-8 py-3 rounded-xl text-[10px] md:text-xs font-black transition-all ${filter === "all" ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            GitHub Repos
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {filter === "featured" ? (
          <motion.div 
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col h-full overflow-hidden group hover:border-cyan-500/30 rounded-[3rem]"
              >
                {/* Header Area */}
                <div className="p-8 md:p-12 border-b border-white/5 bg-white/[0.01]">
                  <div className="flex justify-between items-start mb-8 md:mb-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all hover:bg-white/10">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all hover:bg-white/10">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight font-outfit">{project.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium font-sora">
                    {project.description}
                  </p>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 flex-1 flex flex-col gap-8 md:gap-10">
                  <div className="space-y-4">
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-5 md:p-6">
                      <div className="flex gap-4">
                        <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sora">{project.challenge}</p>
                      </div>
                    </div>
                    <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-5 md:p-6">
                      <div className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sora">{project.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[9px] md:text-[10px] font-black text-zinc-400 px-4 py-2 bg-white/5 border border-white/10 rounded-xl uppercase tracking-widest font-sora">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-8 hover:border-cyan-500/40 transition-all group flex flex-col h-60 rounded-[2.5rem]"
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-black text-white group-hover:text-cyan-400 transition-colors line-clamp-1 text-xl font-outfit">{repo.name}</h4>
                  <Github className="w-6 h-6 text-zinc-600 group-hover:text-cyan-400" />
                </div>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-8 flex-1 font-medium leading-relaxed font-sora">
                  {repo.description || "A professional technical development project."}
                </p>
                <div className="flex items-center gap-6 text-[10px] font-black text-zinc-500 mt-auto pt-6 border-t border-white/5 uppercase tracking-widest font-sora">
                  {repo.language && (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-amber-500" /> {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
