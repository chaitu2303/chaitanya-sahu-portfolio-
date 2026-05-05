"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const inputCls = "w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.05] transition-all";

  return (
    <div className="container px-4 mx-auto min-h-[60vh] flex flex-col justify-center py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
          Let's <span className="text-violet-400">Connect</span>
        </h2>
        <p className="text-zinc-500 text-sm">Open to roles, internships, and collaborations.</p>
      </div>

      <div className="max-w-md mx-auto w-full">
        {sent ? (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center glass-card p-12 bg-zinc-900/40 border border-white/[0.05]">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-zinc-500 text-sm">I'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4 bg-zinc-900/40 border border-white/[0.05]">
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">Name</label>
              <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">Email</label>
              <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@company.com" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">Message</label>
              <textarea required rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about the opportunity..." className={`${inputCls} resize-none`} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 mt-2 flex items-center justify-center">
              {loading ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
            </button>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { href: "mailto:chaitanyakumarsahu00@gmail.com", Icon: Mail, label: "Email" },
            { href: "https://www.linkedin.com/in/chaitanya-kumar-sahu", Icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://github.com/chaitu2303", Icon: FaGithub, label: "GitHub" },
          ].map(({ href, Icon }, i) => (
            <a key={i} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
