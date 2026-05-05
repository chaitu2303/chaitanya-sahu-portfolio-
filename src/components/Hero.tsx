"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

export const Hero = ({ onAction, onContact }: { onAction: () => void, onContact: () => void }) => {
  return (
    <section className="container px-4 mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8"
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
          {/* Subtle shadow instead of absolute inset blur */}
          <div className="w-full h-full rounded-full p-[3px] shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            style={{ background: "conic-gradient(from 180deg, #8b5cf6, #3b82f6, #7c3aed, #6366f1, #8b5cf6)" }}>
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 p-1">
              <Image
                src="/profile.JPG"
                width={160} height={160}
                alt="Chaitanya Kumar Sahu"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium mb-6 text-zinc-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Open to Opportunities
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
          Chaitanya Kumar Sahu
        </h1>
        <p className="text-lg sm:text-xl text-violet-400 font-medium mb-6">
          Full-Stack Developer
        </p>
        <p className="text-sm sm:text-base text-zinc-500 mb-8 leading-relaxed">
          Building modern web apps with React & MongoDB — focused on clean code, performance, and real-world usability.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button onClick={onAction} className="btn-primary w-full sm:w-auto px-8 flex items-center justify-center">
            View Projects <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button onClick={onContact} className="btn-secondary w-full sm:w-auto px-8 flex items-center justify-center">
            Contact Me
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4">
          {[
            { href: "https://github.com/chaitu2303", Icon: FaGithub },
            { href: "https://www.linkedin.com/in/chaitanya-kumar-sahu", Icon: FaLinkedin },
            { href: "mailto:chaitanyakumarsahu00@gmail.com", Icon: Mail },
          ].map(({ href, Icon }, i) => (
            <a key={i} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
