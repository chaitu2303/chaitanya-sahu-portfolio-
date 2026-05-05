import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal = ({ isOpen, onClose }: Props) => {
  const [copied, setCopied] = useState(false);
  const email = "chaitanyakumarsahu00@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/chaitanya-kumar-sahu";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="w-16 h-16 bg-violet-500/10 border border-violet-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">👋</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Let's work together</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                I'm currently open to new opportunities. Choose your preferred way to connect and let's discuss how I can bring value to your team.
              </p>

              <div className="space-y-4">
                {/* Call Option */}
                <a 
                  href="tel:+918309869017"
                  className="flex items-center gap-4 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-violet-400 transition-colors">Call Me</h4>
                    <p className="text-xs text-zinc-400">+91 83098 69017</p>
                  </div>
                </a>

                {/* LinkedIn Option */}
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">Connect on LinkedIn</h4>
                    <p className="text-xs text-zinc-400">Professional network</p>
                  </div>
                </a>

                {/* Email Option */}
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">Send an Email</h4>
                      <p className="text-xs text-zinc-400 truncate w-40 sm:w-auto">{email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/5">
                    <a 
                      href={`mailto:${email}`}
                      className="flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold transition-colors"
                    >
                      Open Mail App
                    </a>
                    <button 
                      onClick={handleCopyEmail}
                      className="flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-bold transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copied!" : "Copy Address"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
