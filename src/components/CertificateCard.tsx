"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { Certificate } from "@/lib/certificates";

interface Props {
  certificate: Certificate;
  tier: number;
}

export const CertificateCard = ({ certificate, tier }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card overflow-hidden group border-l-4 transition-all duration-500 ${
        tier === 1 ? "border-primary shadow-[0_0_30px_rgba(99,102,241,0.1)]" : 
        tier === 2 ? "border-secondary" : 
        "border-white/10"
      }`}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors ${tier === 1 ? "bg-primary/5" : ""}`}>
              <Award className={`w-6 h-6 ${tier === 1 ? "text-primary" : "text-white/40"}`} />
            </div>
            <div>
              <h3 className={`text-lg font-bold text-white group-hover:text-primary transition-colors ${tier === 1 ? "text-xl" : ""}`}>
                {certificate.title}
              </h3>
              <p className="text-sm text-white/40">{certificate.issuer} • {certificate.duration || certificate.issue_date}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
             <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn-secondary !py-2 !px-6 text-xs flex items-center gap-2"
              >
                {isExpanded ? "Hide Preview" : "View PDF"}
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
          </div>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 pt-6 border-t border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {certificate.description || "In-depth learning and practical application of industry-standard tools and methodologies."}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills_gained.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-primary/80 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-white/20 font-mono italic">
                  ID: {certificate.id}
                </div>
              </div>
              
              {/* PDF VIEWER PREVIEW */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">
                 <iframe 
                   src={`/certificates/${certificate.id}.pdf#toolbar=0`}
                   className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity"
                   title={certificate.title}
                 />
                 <div className="absolute inset-0 pointer-events-none border-2 border-primary/10 rounded-xl" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
