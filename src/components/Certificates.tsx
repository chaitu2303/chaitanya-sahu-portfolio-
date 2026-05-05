"use client";

import { motion } from "framer-motion";

const certificates = [
  { id: "adiroha_cybersecurity_internship_2024", title: "Cybersecurity Internship", issuer: "Adiroha Solutions", date: "2024", type: "security" },
  { id: "symbiosis_internship_2025", title: "Symbiosis Internship", issuer: "Symbiosis Technologies", date: "2025", type: "experience" },
  { id: "sih_hackathon_2025", title: "Smart India Hackathon", issuer: "SIH", date: "2025", type: "achievement" },
  { id: "aog_python_training_2023", title: "Python Training", issuer: "AOG IT Solutions", date: "2023", type: "core" },
  { id: "nptel_python_2025", title: "NPTEL Python", issuer: "IIT Madras", date: "2025", type: "core" },
  { id: "infosys_ai_2025", title: "Infosys AI", issuer: "Infosys", date: "2025", type: "core" },
  { id: "simplilearn_ai_2025", title: "Simplilearn AI", issuer: "Simplilearn", date: "2025", type: "core" },
  { id: "infosys_agile_2025", title: "Agile Scrum", issuer: "Infosys", date: "2025", type: "core" },
  { id: "infosys_nosql_2025", title: "NoSQL", issuer: "Infosys", date: "2025", type: "core" },
  { id: "quantum_seminar_2026", title: "Quantum Computing Seminar", issuer: "QIC", date: "2026", type: "achievement" },
];

const typeBadge: Record<string, string> = {
  security:    "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  experience:  "bg-violet-500/20 text-violet-400 border border-violet-500/30",
  achievement: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  core:        "bg-white/5 text-slate-500 border border-white/10",
};

export const Certificates = () => {
  return (
    <div className="section-padding container px-4 mx-auto">
      <div className="text-center mb-16">
        <p className="section-subtitle">Verified Proof</p>
        <h2 className="section-title">Certifications & <span className="text-gradient">Learning</span></h2>
        <p className="text-slate-400 mt-4 text-base max-w-xl mx-auto">
          Click <span className="text-indigo-400 font-bold">Open PDF</span> to view each certificate.
        </p>
      </div>

      {/* Grid — 1 col mobile, 2 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden hover:-translate-y-1 transition-transform"
          >
            {/* PDF Viewer */}
            <div className="relative bg-[#0d1117]" style={{ height: 380 }}>
              <iframe
                src={`/certificates/${cert.id}.pdf`}
                style={{ width: "100%", height: "100%", border: "none" }}
                title={cert.title}
                loading="lazy"
              />
              {/* Dark overlay at bottom to blend */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
            </div>

            {/* Info Row */}
            <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/5">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-white truncate">{cert.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{cert.issuer} · {cert.date}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${typeBadge[cert.type]}`}>
                  {cert.type}
                </span>
                <a
                  href={`/certificates/${cert.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-1.5 !px-4 !text-xs !rounded-xl"
                >
                  Open PDF
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
