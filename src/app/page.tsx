"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Roadmap } from "@/components/Roadmap";
import { Dashboard } from "@/components/Dashboard";
import { MyWorld } from "@/components/MyWorld";
import { Certificates } from "@/components/Certificates";
import { CodingBackground } from "@/components/CodingBackground";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck, Menu, X, Search } from "lucide-react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Certs", id: "certifications" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Analytics", id: "dashboard" },
    { name: "My World", id: "myworld" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#020205] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Cinematic Coding Background */}
          <CodingBackground />

          {/* ── Navigation (Adaptive Floating Header) ── */}
          <nav className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4">
            <div className="relative glass-card bg-zinc-950/80 backdrop-blur-2xl border-white/10 px-8 py-4 rounded-[2rem] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-fit">
              {/* Scroll Progress Bar */}
              <motion.div 
                className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 origin-left z-50 rounded-full"
                style={{ scaleX: scrollYProgress }}
              />
              
              {/* Left Icons */}
              <div className="flex items-center gap-3 md:gap-5 border-r border-white/10 pr-4 md:pr-10">
                 <a href="https://github.com/chaitu2303" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-4 h-4 md:w-5 md:h-5" /></a>
                 <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4 md:w-5 md:h-5" /></a>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-all whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => scrollTo("certifications")}
                  className="p-2.5 rounded-xl bg-white/5 text-zinc-500 hover:text-cyan-400 transition-all"
                >
                  <Search className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={() => scrollTo("contact")}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 md:px-7 py-2 md:py-3 rounded-[1.2rem] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all flex items-center gap-2 group whitespace-nowrap"
                >
                  Hire <span className="hidden sm:inline">Me</span>
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 group-hover:scale-125 transition-transform" />
                </button>

                {/* Mobile Toggle */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2.5 rounded-xl bg-white/5 text-zinc-400"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="absolute top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl z-40"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="py-4 px-6 rounded-2xl bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all text-left"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* ── Page Sections ── */}
          <div className="relative z-10 space-y-32 md:space-y-64 pb-32">
            <section id="home">
              <Hero />
            </section>
            
            <section id="projects" className="scroll-mt-24 md:scroll-mt-32">
              <Projects />
              <div className="mt-32">
                <ProjectSpotlight />
              </div>
            </section>

            <section id="skills" className="scroll-mt-24 md:scroll-mt-32">
              <Skills />
            </section>

            <section id="experience" className="scroll-mt-24 md:scroll-mt-32">
              <Experience />
            </section>

            <section id="certifications" className="scroll-mt-24 md:scroll-mt-32">
              <Certificates />
            </section>

            <section id="roadmap" className="scroll-mt-24 md:scroll-mt-32">
              <Roadmap />
            </section>

            <section id="dashboard" className="scroll-mt-24 md:scroll-mt-32">
              <Dashboard />
            </section>

            <section id="myworld" className="scroll-mt-24 md:scroll-mt-32">
              <MyWorld />
            </section>

            <section id="contact" className="scroll-mt-24 md:scroll-mt-32">
              <Contact />
            </section>
          </div>

          {/* ── Footer ── */}
          <footer className="relative z-10 py-20 border-t border-white/5 bg-zinc-950/50">
             <div className="container px-4 mx-auto text-center">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-4">Final Protocol Initiated</p>
                <h3 className="text-2xl font-black text-white font-outfit uppercase tracking-tighter mb-8">Chaitanya Kumar Sahu</h3>
                <div className="flex justify-center gap-8 mb-12">
                   <a href="https://github.com/chaitu2303" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Github className="w-6 h-6" /></a>
                   <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                   <a href="mailto:chaitanya.sahu@example.com" className="text-zinc-500 hover:text-magenta-400 transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
                <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">© 2026 CYBER_PORTFOLIO // ALL RIGHTS RESERVED</p>
             </div>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
