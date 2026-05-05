import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_SNIPPETS = [
  "def security_scan(target):",
  "  vulns = detect_threats(target)",
  "  if vulns: patch_system(vulns)",
  "import cv2 as cv",
  "face_cascade = cv.CascadeClassifier()",
  "while True: _, frame = cap.read()",
  "class CyberAuth(Security):",
  "  def verify(self, token):",
  "    return hash.check(token)",
  "<div class='security-mesh'>",
  "  <nav-link shadow='glow' />",
  "  <auth-provider type='JWT' />",
  "</div>",
  "const auth = await supabase.auth()",
  "for i in range(len(network)):",
  "  node.connect(api_stream)",
  "print('System Online...')",
  "async def main():",
  "  await start_vapt_scan()"
];

export const CodingBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020205]">
      
      {/* ── Atmospheric Glows ── */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-magenta-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s', backgroundColor: 'rgba(217, 70, 239, 0.05)' }} />
      </div>

      {/* ── Python & HTML Coding Operations ── */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh`,
              opacity: 0 
            }}
            animate={{ 
              y: [null, `${Math.random() * 100}vh`],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute font-mono text-[11px] text-cyan-400/40 whitespace-nowrap"
          >
            {CODE_SNIPPETS[i % CODE_SNIPPETS.length]}
          </motion.div>
        ))}
      </div>

      {/* ── Vertical Data Streams (Clean) ── */}
      <div className="absolute inset-0 flex justify-between px-10 opacity-[0.05]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            initial={{ y: "-100%" }}
            animate={{ y: "150%" }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            className="h-[40vh] w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
          />
        ))}
      </div>

      {/* ── Glowing Digital Grid Floor ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] perspective-1000">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(75deg)_translateZ(0)] origin-bottom animate-[grid-scroll_25s_linear_infinite]"
          style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)' }}
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }
      `}} />
    </div>
  );
};
