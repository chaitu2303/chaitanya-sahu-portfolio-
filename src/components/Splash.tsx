"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Cute 3D White Robot (Based on Reference Image) ── */
export const Robot = () => (
  <div className="flex flex-col items-center mx-auto scale-110">
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex flex-col items-center"
    >
      {/* Side Antennas */}
      <div className="absolute top-4 -left-4 w-12 h-0.5 bg-black rotate-[-30deg] z-0" />
      <div className="absolute top-4 -right-4 w-12 h-0.5 bg-black rotate-[30deg] z-0" />
      
      {/* Left Ear/Antenna Base */}
      <div className="absolute top-6 -left-6 w-4 h-10 bg-white rounded-full border-2 border-black z-10 flex items-center justify-center">
        <div className="w-1.5 h-6 bg-zinc-300 rounded-full" />
      </div>
      {/* Right Ear/Antenna Base */}
      <div className="absolute top-6 -right-6 w-4 h-10 bg-white rounded-full border-2 border-black z-10 flex items-center justify-center">
        <div className="w-1.5 h-6 bg-zinc-300 rounded-full" />
      </div>

      {/* Head (White exterior, black face screen) */}
      <div className="w-24 h-16 md:w-28 md:h-20 bg-white rounded-[2rem] border-[3px] border-black relative flex items-center justify-center z-20 shadow-[0_10px_20px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Face Screen (Black) */}
        <div className="w-[80%] h-[60%] bg-zinc-900 rounded-2xl relative flex items-center justify-center border-b-2 border-zinc-700">
          
          {/* Light Reflection Sweep on Face */}
          <motion.div
            animate={{ x: ["-150%", "250%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
          />

          {/* Blue Eyes */}
          <div className="flex gap-4 z-10 -mt-1">
            <motion.div
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5 }}
              className="w-4 h-4 rounded-full bg-blue-500 border border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] relative"
            >
              <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 right-0.5" />
            </motion.div>
            <motion.div
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5 }}
              className="w-4 h-4 rounded-full bg-blue-500 border border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] relative"
            >
              <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 right-0.5" />
            </motion.div>
          </div>
          
          {/* Cute Smile */}
          <div className="absolute bottom-1 w-5 h-2 border-b-2 border-white rounded-b-full opacity-90" />
        </div>
      </div>

      {/* Neck */}
      <div className="w-6 h-3 bg-zinc-800 border-x-[3px] border-black z-10 -mt-1" />

      {/* Body Area */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Left Arm (Resting) */}
        <div className="absolute -left-7 top-0 flex flex-col items-center origin-top rotate-[20deg] z-0">
          <div className="w-5 h-6 bg-zinc-800 rounded-full border-2 border-black" />
          <div className="w-3 h-8 bg-white border-x-2 border-black -mt-1" />
          <div className="w-5 h-5 bg-zinc-800 rounded-full border-2 border-black -mt-1" />
          {/* Fingers */}
          <div className="flex gap-0.5 -mt-1">
            <div className="w-1.5 h-3 bg-white border border-black rounded-full" />
            <div className="w-1.5 h-3 bg-white border border-black rounded-full" />
            <div className="w-1.5 h-3 bg-white border border-black rounded-full" />
          </div>
        </div>

        {/* Right Arm (Waving - RAISED HIGH) */}
        <motion.div
          animate={{ rotate: [-25, 25, -25] }}
          transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
          style={{ transformOrigin: "top center" }}
          className="absolute -right-10 top-0 flex flex-col items-center z-0 origin-top rotate-[-130deg]"
        >
          {/* Shoulder */}
          <div className="w-5 h-6 bg-zinc-800 rounded-full border-2 border-black" />
          {/* Upper Arm */}
          <div className="w-3 h-8 bg-white border-x-2 border-black -mt-1" />
          {/* Elbow/Hand Base */}
          <div className="w-5 h-5 bg-zinc-800 rounded-full border-2 border-black -mt-1" />
          {/* Fingers pointing up */}
          <div className="flex gap-0.5 -mt-1">
            <motion.div 
              animate={{ height: [12, 16, 12] }}
              transition={{ duration: 0.4, repeat: Infinity }}
              className="w-1.5 h-4 bg-white border border-black rounded-full" 
            />
            <motion.div 
              animate={{ height: [16, 20, 16] }}
              transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
              className="w-1.5 h-5 bg-white border border-black rounded-full mb-1" 
            />
            <motion.div 
              animate={{ height: [12, 16, 12] }}
              transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-4 bg-white border border-black rounded-full" 
            />
          </div>
        </motion.div>

        {/* Main Torso (White Trapezoid) */}
        <div className="w-16 h-20 md:w-20 md:h-24 bg-white rounded-b-3xl rounded-t-xl border-[3px] border-black flex flex-col items-center relative z-20 shadow-[inset_-3px_-3px_10px_rgba(0,0,0,0.1)] overflow-hidden">
          
          {/* Black belly panel */}
          <div className="w-12 h-6 bg-zinc-800 rounded-lg mt-8 border-2 border-black relative overflow-hidden flex items-center justify-between px-1">
             <div className="w-1 h-1 bg-white rounded-full" />
             <div className="w-1 h-1 bg-white rounded-full" />
          </div>
          
          {/* Little dots */}
          <div className="flex gap-4 mt-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* Legs */}
      <div className="flex gap-4 z-0 -mt-2">
        <div className="flex flex-col items-center">
          <div className="w-3 h-6 bg-zinc-800 border-x-2 border-black" />
          <div className="w-3 h-2 bg-white border-x-2 border-black" />
          <div className="w-3 h-6 bg-zinc-800 border-x-2 border-black" />
          {/* Foot */}
          <div className="w-8 h-3 bg-zinc-800 rounded-t-lg border-2 border-black border-b-0" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-3 h-6 bg-zinc-800 border-x-2 border-black" />
          <div className="w-3 h-2 bg-white border-x-2 border-black" />
          <div className="w-3 h-6 bg-zinc-800 border-x-2 border-black" />
          {/* Foot */}
          <div className="w-8 h-3 bg-zinc-800 rounded-t-lg border-2 border-black border-b-0" />
        </div>
      </div>
      
    </motion.div>
  </div>
);

export const Splash = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 4500);
    return () => clearTimeout(t);
  }, [onComplete]);

  const text = "Hai Namaste and Welcome to my Portfolio!".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 3, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Cinematic Deep Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]" />

          <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center perspective-1200 mt-20">
            
            {/* The "Hole" container with shockwave */}
            <div className="relative flex justify-center items-end mb-16">
              
              {/* Shockwave Rings */}
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute w-64 h-16 border-2 border-blue-500 rounded-[100%] shadow-[0_0_30px_rgba(59,130,246,0.8)]"
              />
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="absolute w-64 h-16 border-2 border-cyan-500 rounded-[100%] shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              />

              {/* The Hole Base */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1.2 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="absolute w-64 h-16 bg-black rounded-[100%] shadow-[inset_0_-10px_30px_rgba(59,130,246,0.1),0_0_40px_rgba(0,0,0,1)] border-b border-blue-500/50"
              />
              
              {/* Robot rising from the hole */}
              <div className="relative w-80 h-96 overflow-visible flex items-end justify-center">
                <motion.div
                  initial={{ y: 350, scale: 0.7 }}
                  animate={{ y: 0, scale: 1.1 }}
                  transition={{ duration: 1.5, type: "spring", stiffness: 50, damping: 15, delay: 0.3 }}
                >
                  <Robot />
                </motion.div>
              </div>

              {/* Dust Particles Burst */}
              <div className="absolute bottom-6 w-full h-10 flex justify-center pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                    animate={{ 
                      y: -40 - Math.random() * 50, 
                      x: (Math.random() - 0.5) * 120, 
                      opacity: 0, 
                      scale: 0 
                    }}
                    transition={{ duration: 1.2 + Math.random(), delay: 0.3, ease: "easeOut" }}
                    className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  />
                ))}
              </div>
            </div>

            {/* Glowing Graphical 3D Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ delay: 1.8, duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative perspective-1200"
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-950 border-2 border-white/20 px-10 py-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] relative preserve-3d overflow-hidden group">
                {/* 3D Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                
                {/* Speech bubble pointer */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 border-l-2 border-t-2 border-white/20 rotate-45 shadow-[-5px_-5px_10px_rgba(0,0,0,0.5)]" />
                
                <h1 className="text-2xl md:text-4xl font-black tracking-tight relative z-10 flex flex-wrap justify-center gap-1 text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {text.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20, rotateY: 90 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{ delay: 2.2 + index * 0.05, type: "spring", stiffness: 100 }}
                      className={`inline-block ${char === " " ? "w-3" : "bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
                
                {/* Decorative dots for 'graphical' feel */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-30">
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-4 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
