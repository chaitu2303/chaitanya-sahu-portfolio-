"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, MessageSquare, Globe, ShieldCheck, Terminal, Smartphone, Zap } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa6";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mvgbylpj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } finally { setLoading(false); }
  };

  const socialLinks = [
    { href: "mailto:chaitanyakumarsahu00@gmail.com", icon: Mail, label: "Direct Email", color: "text-rose-400", bg: "bg-rose-500/10" },
    { href: "https://www.linkedin.com/in/chaitanya-kumar-sahu", icon: FaLinkedin, label: "LinkedIn Pro", color: "text-blue-400", bg: "bg-blue-500/10" },
    { href: "https://github.com/chaitu2303", icon: FaGithub, label: "Source Code", color: "text-zinc-400", bg: "bg-white/10" },
    { href: "#", icon: FaDiscord, label: "Community", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-magenta-500/10 blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ── Left Column: Protocol Info ── */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_25px_rgba(139,92,246,0.2)]"
            >
              <Terminal className="w-4 h-4" />
              Communication Protocol
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] font-outfit uppercase mb-8"
            >
              Let's Build <br />
              <span className="text-gradient">The Future</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed"
            >
              Ready to collaborate on high-impact projects or discuss the next digital evolution? Secure a connection today.
            </motion.p>

            {/* Social Hub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center gap-5 p-5 rounded-[2rem] bg-zinc-950/40 border border-white/5 hover:border-violet-500/30 transition-all"
                >
                  <div className={`p-4 rounded-2xl ${link.bg} ${link.color} group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{link.label}</p>
                    <p className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">Connect Now</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">System Status: Online</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">End-to-End Secure</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: The Form ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative group">
              {/* Glass Card Container */}
              <div className="relative glass-card p-8 sm:p-12 bg-zinc-950/60 backdrop-blur-3xl border-white/10 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Form Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-violet-400" />
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter font-outfit">Secure Message</h3>
                  </div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">I respond to all inquiries within 24 hours.</p>
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                        <CheckCircle className="w-12 h-12 text-emerald-400" />
                      </div>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 font-outfit">Transmission Successful</h3>
                      <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest leading-loose">
                        Your message has been received by the core. <br />
                        Response protocol initiated.
                      </p>
                      <button 
                        onClick={() => setSent(false)}
                        className="mt-10 text-[10px] font-black text-violet-400 hover:text-violet-300 uppercase tracking-[0.3em] transition-colors underline underline-offset-8"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] ml-2">Identificator</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            placeholder="YOUR NAME / IDENTITY"
                            className="w-full px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-700 text-xs font-bold tracking-widest focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all uppercase"
                          />
                          <div className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-opacity duration-500 ${focused === 'name' ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] ml-2">Communication Link</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            placeholder="EMAIL@PROTOCOL.COM"
                            className="w-full px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-700 text-xs font-bold tracking-widest focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all uppercase"
                          />
                          <div className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-opacity duration-500 ${focused === 'email' ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] ml-2">Information Packet</label>
                        <div className="relative">
                          <textarea
                            required
                            rows={4}
                            value={form.message}
                            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                            onFocus={() => setFocused("message")}
                            onBlur={() => setFocused(null)}
                            placeholder="WHAT ARE WE BUILDING?"
                            className="w-full px-8 py-6 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-white placeholder-zinc-700 text-xs font-bold tracking-widest focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all resize-none uppercase"
                          />
                          <div className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-opacity duration-500 ${focused === 'message' ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-6 mt-4 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_40px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 animate-spin" />
                            Transmitting...
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Initiate Transmission
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>

                {/* Cyber Decorative Lines */}
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20">
                  <div className="absolute top-8 right-8 w-px h-16 bg-white" />
                  <div className="absolute top-8 right-8 w-16 h-px bg-white" />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none opacity-20 rotate-180">
                  <div className="absolute top-8 right-8 w-px h-16 bg-white" />
                  <div className="absolute top-8 right-8 w-16 h-px bg-white" />
                </div>
              </div>

              {/* Floating Decoration */}
              <div className="absolute -top-6 -right-6 p-4 bg-zinc-950 border border-violet-500/30 rounded-2xl shadow-2xl z-20">
                <Smartphone className="w-6 h-6 text-violet-400" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

