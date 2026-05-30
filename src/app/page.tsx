"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { TechStack } from "@/components/TechStack";
import { EngineeringDepth } from "@/components/EngineeringDepth";
import { Experience } from "@/components/Experience";
import { Roadmap } from "@/components/Roadmap";
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
    { name: "Capabilities", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Certs", id: "certifications" },
    { name: "Roadmap", id: "roadmap" },
    { name: "My Ecosystem", id: "myworld" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100 overflow-x-hidden font-sans">

      {!showSplash && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* ── Navigation (Adaptive Floating Header) ── */}
        <nav className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
          <div className="relative bg-zinc-950/80 backdrop-blur-md border border-white/10 px-4 md:px-8 py-3 md:py-4 rounded-2xl flex items-center justify-between shadow-2xl w-full max-w-4xl gap-4">
            {/* Scroll Progress Bar */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 h-[2px] bg-zinc-700 origin-left z-50 rounded-full"
              style={{ scaleX: scrollYProgress }}
            />
              
            {/* Left Logo / Initials (Mobile Friendly) */}
            <div className="flex items-center gap-3 pr-3 md:pr-6 border-r border-white/10">
               <button onClick={() => scrollTo("home")} className="text-sm md:text-base font-bold tracking-wider text-white">
                 CKS<span className="text-blue-500">.</span>
               </button>
            </div>

            {/* Social Links (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-6">
               <a href="https://github.com/chaitu2303" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
               <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
              
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 pl-4 border-r border-white/10 pr-6 xl:pr-8 mr-4 xl:mr-6">
              {menuItems.map((item) => (
                 <button
                   key={item.id}
                   onClick={() => scrollTo(item.id)}
                   className="text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-all whitespace-nowrap"
                 >
                   {item.name}
                 </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => scrollTo("certifications")}
                className="hidden md:flex p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white transition-all mr-1.5"
              >
                <Search className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => scrollTo("contact")}
                className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all items-center gap-2 group whitespace-nowrap"
              >
                Start Collaboration
                <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white transition-all flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  className="absolute top-16 left-4 right-4 bg-zinc-900 border border-white/10 rounded-2xl p-5 shadow-2xl z-40 max-h-[85vh] overflow-y-auto"
                >
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="py-3 px-4 rounded-xl bg-white/5 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-all text-left"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Actions Container */}
                  <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                     <button 
                       onClick={() => scrollTo("contact")}
                       className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                     >
                       Start Collaboration
                       <ShieldCheck className="w-4 h-4" />
                     </button>

                     <div className="flex justify-center gap-6 mt-1">
                        <a href="https://github.com/chaitu2303" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* ── Page Sections ── */}
          <div className="relative z-10 space-y-20 md:space-y-36 pb-20">
            <section id="home">
              <Hero />
            </section>
            
            <section id="projects" className="scroll-mt-20 md:scroll-mt-24">
              <Projects />
              <div className="mt-20 md:mt-24">
                <ProjectSpotlight />
              </div>
              <div className="mt-20 md:mt-24">
                <EngineeringDepth />
              </div>
            </section>

            <section id="skills" className="scroll-mt-20 md:scroll-mt-24">
              <TechStack />
            </section>

            <section id="experience" className="scroll-mt-20 md:scroll-mt-24">
              <Experience />
            </section>

            <section id="certifications" className="scroll-mt-20 md:scroll-mt-24">
              <Certificates />
            </section>

            <section id="roadmap" className="scroll-mt-20 md:scroll-mt-24">
              <Roadmap />
            </section>

            <section id="myworld" className="scroll-mt-20 md:scroll-mt-24">
              <MyWorld />
            </section>

            <section id="contact" className="scroll-mt-20 md:scroll-mt-24">
              <Contact />
            </section>
          </div>

          {/* ── Footer ── */}
          <footer className="relative z-10 py-16 border-t border-white/10 bg-zinc-950/50">
             <div className="container px-4 mx-auto text-center">
                <h3 className="text-xl font-bold text-white mb-6">Chaitanya Kumar Sahu</h3>
                <div className="flex justify-center gap-6 mb-8">
                   <a href="https://github.com/chaitu2303" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                   <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                   <a href="mailto:chaitanya.sahu@example.com" className="text-zinc-500 hover:text-blue-400 transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
                <p className="text-sm text-zinc-500">© 2026 Chaitanya Kumar Sahu. All Rights Reserved.</p>
             </div>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
