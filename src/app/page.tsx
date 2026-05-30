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
import { RadialGlowBackground } from "@/components/ui/radial-glow-background";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck, Menu, X, Search } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Capabilities", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Certificates", id: "certifications" },
    { name: "Roadmap", id: "roadmap" },
    { name: "My Ecosystem", id: "myworld" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      gsap.to(window, { 
        duration: 0.4, 
        scrollTo: { y: id === "home" ? 0 : `#${id}`, autoKill: false }, 
        ease: "power2.inOut" 
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <RadialGlowBackground>
      <main className="min-h-screen text-zinc-100 overflow-x-hidden font-sans">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* ── Navigation (Adaptive Floating Header) ── */}
        <nav className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
          <div className="relative bg-zinc-950/80 backdrop-blur-md border border-white/10 px-4 md:px-6 py-3 rounded-2xl flex items-center justify-between shadow-2xl w-full max-w-5xl gap-4">
            {/* Scroll Progress Bar */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 h-[2px] bg-zinc-700 origin-left z-50 rounded-full"
              style={{ scaleX: scrollYProgress }}
            />
              
            {/* Left Section: Logo & Socials */}
            <div className="flex items-center gap-4 flex-1">
               <button onClick={() => scrollTo("home")} className="text-sm md:text-base font-bold tracking-wider text-white">
                 CKS<span className="text-blue-500">.</span>
               </button>
               <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10">
                  <a href="https://github.com/chaitu2303" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="https://linkedin.com/in/chaitanya-kumar-sahu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
               </div>
            </div>
              
            {/* Center Section: Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-none">
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

            {/* Right Section: Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 flex-1">
              <button 
                onClick={() => scrollTo("certifications")}
                className="hidden md:flex p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white transition-all"
              >
                <Search className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => scrollTo("contact")}
                className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs font-semibold transition-all items-center gap-2 group whitespace-nowrap"
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
          <FlowArt aria-label="Portfolio Sections">
            <FlowSection id="home" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 1 }}>
              <Hero />
            </FlowSection>
            
            <FlowSection id="projects" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 2 }}>
              <Projects />
              <div className="mt-20 md:mt-24">
                <ProjectSpotlight />
              </div>
              <div className="mt-20 md:mt-24">
                <EngineeringDepth />
              </div>
            </FlowSection>

            <FlowSection id="skills" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 3 }}>
              <TechStack />
            </FlowSection>

            <FlowSection id="experience" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 4 }}>
              <Experience />
            </FlowSection>

            <FlowSection id="certifications" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 5 }}>
              <Certificates />
            </FlowSection>

            <FlowSection id="roadmap" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 6 }}>
              <Roadmap />
            </FlowSection>

            <FlowSection id="myworld" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 7 }}>
              <MyWorld />
            </FlowSection>

            <FlowSection id="contact" className="bg-[#020617]/40 backdrop-blur-3xl border-t border-white/5" style={{ zIndex: 8 }}>
              <Contact />
            </FlowSection>
          </FlowArt>

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
      </main>
    </RadialGlowBackground>
  );
}
