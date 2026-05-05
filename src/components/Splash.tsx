"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

/* ── Typing code lines ── */
const CODE_LINES = [
  { indent: 0, text: 'const developer = {', color: '#c084fc' },
  { indent: 1, text: 'name: "Chaitanya Kumar Sahu",', color: '#86efac' },
  { indent: 1, text: 'role: "Full-Stack Developer",', color: '#86efac' },
  { indent: 1, text: 'skills: ["React", "Python", "MongoDB"],', color: '#93c5fd' },
  { indent: 1, text: 'status: "Open to Opportunities",', color: '#fbbf24' },
  { indent: 0, text: '};', color: '#c084fc' },
  { indent: 0, text: '', color: '#71717a' },
  { indent: 0, text: 'developer.init();', color: '#f472b6' },
  { indent: 0, text: '// ✅ Portfolio loaded successfully', color: '#4ade80' },
];

/* ── Animated Robot (pure CSS/SVG) ── */
const Robot = () => (
  <div className="flex flex-col items-center mx-auto">
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex flex-col items-center"
    >
      {/* Antenna */}
      <motion.div
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="origin-bottom mb-[-2px] z-10"
      >
        <div className="w-1.5 h-5 bg-zinc-600 mx-auto rounded-full" />
        <div className="w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.7)] mx-auto -mt-1" />
      </motion.div>

      {/* Head */}
      <div className="w-16 h-14 md:w-20 md:h-16 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-xl border-2 border-zinc-600 relative flex items-center justify-center z-10">
        {/* Eyes */}
        <div className="flex gap-3">
          <motion.div
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          <motion.div
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
        </div>
      </div>

      {/* Body with attached spring arms */}
      <div className="relative mt-0.5 z-10">
        {/* Left Spring Arm (Still/Subtle) */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute -left-12 top-2 flex flex-col items-center origin-right"
        >
          {/* Claw */}
          <div className="w-6 h-5 rounded-t-full border-4 border-zinc-400 border-b-transparent rotate-180 -mb-1 shadow-[0_0_8px_rgba(161,161,170,0.4)]" />
          {/* Spring */}
          <svg width="24" height="28" viewBox="0 0 24 28" className="text-zinc-500">
            <path d="M12 0 Q24 7 12 14 Q0 21 12 28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {/* Joint connection to body */}
          <div className="absolute top-1/2 -right-4 w-4 h-2 bg-zinc-600 rounded-full" />
        </motion.div>

        {/* Main Body block */}
        <div className="w-12 h-10 md:w-14 md:h-12 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg border border-zinc-700 flex items-center justify-center relative z-20">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
          />
        </div>

        {/* Right Spring Arm (Waving) */}
        <motion.div
          animate={{ rotate: [0, 35, -15, 35, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
          style={{ transformOrigin: "bottom left" }}
          className="absolute -right-12 top-0 flex flex-col items-center"
        >
          {/* Claw */}
          <div className="w-6 h-5 rounded-t-full border-4 border-zinc-400 border-b-transparent rotate-180 -mb-1 shadow-[0_0_8px_rgba(161,161,170,0.4)]" />
          {/* Spring */}
          <svg width="24" height="28" viewBox="0 0 24 28" className="text-zinc-500">
            <path d="M12 0 Q24 7 12 14 Q0 21 12 28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {/* Joint connection to body */}
          <div className="absolute top-1/2 -left-4 w-4 h-2 bg-zinc-600 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export const Splash = () => {
  const [phase, setPhase] = useState<"robot" | "coding" | "photo" | "exit">("robot");
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("coding"), 1800);
    const t2 = setTimeout(() => setPhase("photo"),  4200);
    const t3 = setTimeout(() => setPhase("exit"),   5600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (phase !== "coding") return;
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= CODE_LINES.length) { clearInterval(interval); return prev; }
        return prev + 1;
      });
    }, 220);
    return () => clearInterval(interval);
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02, filter: "blur(16px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#050505" }}
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div animate={{ x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
            <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 w-full max-w-xl px-6">
            <AnimatePresence mode="wait">

              {/* Phase 1: Robot says Hi */}
              {phase === "robot" && (
                <motion.div
                  key="robot"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <Robot />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                  >
                    <p className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Hi there!
                    </p>
                    <p className="text-sm text-zinc-600 mt-2 tracking-widest uppercase">Initializing portfolio...</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Phase 2: Code typing */}
              {phase === "coding" && (
                <motion.div
                  key="coding"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="rounded-xl border border-white/[0.08] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-[11px] text-zinc-600 ml-2 font-mono">portfolio.ts</span>
                    </div>
                    <div className="bg-[#0a0a0a] p-5 min-h-[240px] font-mono text-sm leading-relaxed">
                      {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15 }} className="flex">
                          <span className="text-zinc-700 w-6 text-right mr-4 select-none text-xs">{i + 1}</span>
                          <span style={{ color: line.color, paddingLeft: `${line.indent * 20}px` }}>{line.text}</span>
                        </motion.div>
                      ))}
                      {visibleLines < CODE_LINES.length && (
                        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="inline-block w-2 h-4 bg-violet-400 ml-10 mt-1" />
                      )}
                      {visibleLines >= CODE_LINES.length && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 pt-3 border-t border-white/5">
                          <span className="text-emerald-400 text-xs">▸ Compiled successfully. Loading portfolio...</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Phase 3: Photo reveal — NO OVERLAP */}
              {phase === "photo" && (
                <motion.div
                  key="photo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center text-center gap-6"
                >
                  {/* Photo — fixed size, not overlapping */}
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] flex-shrink-0"
                    style={{ background: "conic-gradient(from 0deg, #8b5cf6, #3b82f6, #ec4899, #8b5cf6)" }}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 p-0.5">
                      <Image src="/profile.JPG" width={144} height={144} alt="Chaitanya" className="rounded-full w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Name — clearly below photo with gap */}
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-4xl font-extrabold text-white"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Chaitanya Kumar Sahu
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-zinc-500 mt-2 tracking-widest uppercase"
                    >
                      Portfolio ready
                    </motion.p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-900">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5.6, ease: "linear" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
