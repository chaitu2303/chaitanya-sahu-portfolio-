import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, Code2, Brain, Eye, ChevronDown, Sparkles, Search, Briefcase, Trophy } from "lucide-react";
import { useState, useMemo } from "react";
import { CertificateModal } from "@/components/CertificateModal";

export const certs = [
  // 🛡️ ELITE CORE (Show publicly, 8–12 limit)
  {
    title: "Datavalley Big Data & Engineering Internship",
    issuer: "Datavalley Solutions",
    category: "Internship",
    date: "2025",
    icon: Briefcase,
    color: "blue",
    link: "/certificates/symbiosis_internship_2025.pdf", // Backed up link
    priority: 1,
  },
  {
    title: "Symbiosis Cybersecurity Internship",
    issuer: "Symbiosys Technologies",
    category: "Internship",
    date: "2025",
    icon: ShieldCheck,
    color: "cyan",
    link: "/certificates/symbiosis_internship_2025.pdf",
    priority: 1,
  },
  {
    title: "Adiroha Cybersecurity Internship",
    issuer: "Adiroha Solutions",
    category: "Internship",
    date: "2024",
    icon: ShieldCheck,
    color: "cyan",
    link: "/certificates/adiroha_cybersecurity_internship_2024.pdf",
    priority: 1,
  },
  {
    title: "Python – NPTEL Elite Silver Medal",
    issuer: "NPTEL (IIT Madras)",
    category: "Programming",
    date: "2025",
    icon: Code2,
    color: "blue",
    link: "/certificates/nptel_python_2025.pdf",
    priority: 1,
  },
  {
    title: "Google AI Essentials",
    issuer: "Google (Coursera Verified)",
    category: "AI & ML",
    date: "2024",
    icon: Brain,
    color: "magenta",
    link: "/certificates/simplilearn_ai_2025.pdf", // Backed up link
    priority: 1,
  },
  {
    title: "Infosys AI & Deep Learning Foundations",
    issuer: "Infosys Springboard Elite",
    category: "AI & ML",
    date: "2025",
    icon: Brain,
    color: "magenta",
    link: "/certificates/infosys_ai_2025.pdf",
    priority: 1,
  },
  {
    title: "Smart India Hackathon (SIH) National Finalist",
    issuer: "Ministry of Education, Govt. of India",
    category: "Events",
    date: "2025",
    icon: Trophy,
    color: "amber",
    link: "/certificates/sih_hackathon_2025.pdf",
    priority: 1,
  },
  {
    title: "Ratan Tata Innovation Hub Project Award",
    issuer: "Ratan Tata Innovation Hub (RITH)",
    category: "Events",
    date: "2024",
    icon: Award,
    color: "amber",
    link: "/certificates/RITH.pdf",
    priority: 1,
  },

  // 📁 ARCHIVED CATALOGUE (Hidden under "View Full Archive")
  {
    title: "National Coding & Tech Symposia Award",
    issuer: "ANITS Academic Body",
    category: "Events",
    date: "2025",
    icon: Trophy,
    color: "zinc",
    link: "/certificates/Anits Certificate.pdf",
    priority: 3,
  },
  {
    title: "Infosys Agile & Scrum Certification",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "2025",
    icon: Sparkles,
    color: "zinc",
    link: "/certificates/infosys_agile_2025.pdf",
    priority: 3,
  },
  {
    title: "Infosys NoSQL Database Systems",
    issuer: "Infosys Springboard",
    category: "Programming",
    date: "2025",
    icon: Code2,
    color: "zinc",
    link: "/certificates/infosys_nosql_2025.pdf",
    priority: 3,
  },
  {
    title: "Python Foundation Core - Aog",
    issuer: "AOG",
    category: "Programming",
    date: "2025",
    icon: Code2,
    color: "zinc",
    link: "/certificates/Python Aog.pdf",
    priority: 3,
  },
  {
    title: "C Language Core Engineering",
    issuer: "AOG",
    category: "Programming",
    date: "2024",
    icon: Code2,
    color: "zinc",
    link: "/certificates/C language AOG.pdf",
    priority: 3,
  }
];

const COLORS: Record<string, string> = {
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  magenta: "text-magenta-400 bg-magenta-500/10 border-magenta-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  zinc: "text-zinc-500 bg-white/5 border-white/5",
};

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; url: string } | null>(null);
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(certs.map((c) => c.category)))];
  
  const filteredCerts = useMemo(() => {
    return certs.filter((cert) => {
      const matchesSearch = 
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === "All" || cert.category === activeTab;
      const matchesPriority = showAll || cert.priority === 1;
      
      return matchesSearch && matchesTab && matchesPriority;
    });
  }, [activeTab, showAll, searchQuery]);

  const optionalCount = certs.filter(c => c.priority === 3).length;

  const renderCertCard = (cert: typeof certs[0]) => {
    const colorCls = COLORS[cert.color] ?? COLORS.zinc;
    const [textCls, bgCls, borderCls] = colorCls.split(" ");
    return (
      <motion.div
        key={cert.title}
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`glass-card p-6 flex items-start gap-5 group hover:${cert.priority === 1 ? 'border-cyan-500/30' : 'border-white/20'} cursor-pointer rounded-[2rem] transition-all bg-black/40 backdrop-blur-3xl`}
        onClick={() => setSelectedCert({ title: cert.title, url: cert.link })}
      >
        <div className={`w-14 h-14 rounded-2xl ${bgCls} border ${borderCls} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg`}>
          <cert.icon className={`w-7 h-7 ${textCls}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm md:text-base font-black text-white mb-1 group-hover:text-cyan-400 transition-colors leading-tight font-outfit uppercase tracking-tighter">
              {cert.title}
            </h3>
          </div>
          <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{cert.issuer}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-[9px] font-black text-zinc-500 bg-white/5 px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-white/5">
              {cert.date}
            </span>
            <div className="p-2 rounded-xl bg-white/5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-cyan-500/10 hover:text-cyan-400">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="section-padding container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-magenta-500/10 border border-magenta-500/20 text-magenta-400 text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_25px_rgba(217,70,239,0.2)]">
              <Award className="w-4 h-4" /> 
              Continuous Learning
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] font-outfit uppercase">
              Verified <br className="hidden md:block" />
              <span className="text-gradient">Credentials</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-fit">
             {/* ── Search Bar ── */}
             <div className="relative group w-full lg:min-w-[400px]">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
                <input 
                  type="text"
                  placeholder="Search credentials or issuers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-16 pr-8 text-sm font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all backdrop-blur-3xl"
                />
             </div>

             {/* Filter Tabs */}
             <div className="flex flex-wrap justify-center lg:justify-end gap-2.5 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 w-fit ml-auto mr-auto lg:mr-0 backdrop-blur-3xl">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`relative px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${
                      activeTab === cat ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {activeTab === cat && (
                      <motion.div
                        layoutId="cert-tab"
                        className="absolute inset-0 bg-cyan-600 border border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Main Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredCerts.length > 0 ? (
              filteredCerts.map(renderCertCard)
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-20 text-center">
                <p className="text-zinc-500 font-bold uppercase tracking-widest">No matching credentials found in catalog.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* View Full Inventory Action */}
        {optionalCount > 0 && searchQuery === "" && (
          <div className="flex flex-col items-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-[0.2em] group shadow-lg"
            >
              {showAll ? "Hide Basic Certificates" : "View Archived Credentials"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.div>
            </button>
          </div>
        )}
      </div>

      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ""}
        pdfUrl={selectedCert?.url || ""}
      />
    </>
  );
};
