"use client";

import { motion } from "framer-motion";
import { ExternalLink, RefreshCcw } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiPython,
  SiHtml5, SiCss,
} from "react-icons/si";
import { useState, useEffect } from "react";

interface Repo {
  id: number; name: string; description: string;
  html_url: string; homepage: string; topics: string[];
  fork: boolean; stargazers_count: number; language: string;
}

/* Map GitHub language → icon + color */
const langIcon: Record<string, { Icon: any; color: string }> = {
  TypeScript:  { Icon: SiTypescript,  color: "#3178C6" },
  JavaScript:  { Icon: SiJavascript,  color: "#F7DF1E" },
  Python:      { Icon: SiPython,      color: "#3776AB" },
  HTML:        { Icon: SiHtml5,       color: "#E34F26" },
  CSS:         { Icon: SiCss,         color: "#1572B6" },

};

export const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://api.github.com/users/chaitu2303/repos?sort=updated&per_page=100")
      .then(res => res.json())
      .then((data: Repo[]) => { setRepos(data.filter(r => !r.fork)); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", "Web", "Security", "Python", "Other"];
  const getCategory = (r: Repo) => {
    const n = r.name.toLowerCase(); const t = r.topics || [];
    if (t.includes("security") || n.includes("security") || n.includes("vapt")) return "Security";
    if (t.includes("python") || r.language === "Python") return "Python";
    if (r.language === "TypeScript" || r.language === "JavaScript" || t.includes("react")) return "Web";
    return "Other";
  };
  const filtered = filter === "All" ? repos : repos.filter(r => getCategory(r) === filter);

  return (
    <div className="section-padding container px-4 mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <p className="section-subtitle">GitHub Auto-Sync</p>
          <h2 className="section-title">Live <span className="text-gradient">Projects</span></h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-600">
          {loading && <RefreshCcw className="w-4 h-4 text-violet-400 animate-spin" />}
          <span>{repos.length} repos synced</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
              filter === cat
                ? "bg-violet-500/15 text-violet-400 border border-violet-500/20"
                : "text-zinc-600 hover:text-zinc-400 bg-white/[0.02] border border-white/[0.06]"
            }`}
          >{cat}</button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, i) => <div key={i} className="glass-card h-52 animate-pulse" />)}
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((repo, idx) => {
            const lang = langIcon[repo.language];
            return (
              <motion.div
                layout key={repo.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="glass-card group flex flex-col h-full hover:-translate-y-1 transition-transform"
              >
                <div className="p-6 flex-1">
                  {/* Header: language icon + stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      {lang ? (
                        <div className="p-2 rounded-lg" style={{ background: `${lang.color}12`, border: `1px solid ${lang.color}25` }}>
                          <lang.Icon className="w-5 h-5" style={{ color: lang.color }} />
                        </div>
                      ) : (
                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <FaGithub className="w-5 h-5 text-zinc-500" />
                        </div>
                      )}
                      {repo.language && (
                        <span className="text-[10px] font-medium uppercase tracking-widest" style={{ color: lang?.color || "#71717a" }}>
                          {repo.language}
                        </span>
                      )}
                    </div>
                    {repo.stargazers_count > 0 && (
                      <span className="text-xs font-medium text-amber-400">⭐ {repo.stargazers_count}</span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-400 transition-colors capitalize leading-tight">
                    {repo.name.replace(/[-_]/g, " ")}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed line-clamp-2">
                    {repo.description || "A project by Chaitanya Kumar Sahu."}
                  </p>
                </div>

                <div className="px-6 pb-5 flex gap-2">
                  <a href={repo.html_url} target="_blank"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-white hover:border-violet-500/30 transition-all">
                    <FaGithub className="w-3 h-3" /> Code
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" className="btn-primary !py-2 !px-4 !text-xs !rounded-lg">
                      <ExternalLink className="w-3 h-3" /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 glass-card"><p className="text-zinc-600">No projects in this category.</p></div>
      )}
    </div>
  );
};
