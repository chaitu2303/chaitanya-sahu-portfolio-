"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Splash } from "@/components/Splash";
import { CursorGlow } from "@/components/CursorGlow";
import { Mail, Home as HomeIcon, LayoutGrid, Code2, User } from "lucide-react";
import { useState } from "react";

/* ═══════════════════ NAVBAR ═══════════════════ */
const Navbar = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) => {
  const tabs = [
    { id: "home",     label: "Home",     Icon: HomeIcon },
    { id: "projects", label: "Projects", Icon: LayoutGrid },
    { id: "skills",   label: "Skills",   Icon: Code2 },
    { id: "about",    label: "About",    Icon: User },
    { id: "contact",  label: "Contact",  Icon: Mail },
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:max-w-lg rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500">
      <div className="flex items-center justify-between px-2 py-2">
        <LayoutGroup>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-xl text-[10px] sm:text-xs font-medium tracking-wide transition-colors ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill-bottom"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <tab.Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-violet-400' : 'text-inherit'}`} />
                </span>
                <span className="relative z-10 hidden sm:block">{tab.label}</span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>
    </nav>
  );
};

/* ═══════════════════ MAIN PAGE ═══════════════════ */
export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit:    { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  };
  const pageTrans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      <Splash />
      <CursorGlow />
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      {/* Main Content Area */}
      <div className="pb-24 pt-8 md:pt-12 relative z-10 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          
          {activeTab === "home" && (
            <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTrans} className="flex-1 flex flex-col">
              <Hero onAction={() => setActiveTab("projects")} onContact={() => setActiveTab("contact")} />
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTrans} className="flex-1">
              <Projects />
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div key="skills" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTrans} className="flex-1">
              <Skills />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTrans} className="flex-1">
              <About />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTrans} className="flex-1">
              <Contact />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}
