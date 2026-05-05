"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      setPoints((prev) => {
        const id = Date.now() + Math.random();
        const newPoints = [...prev, { id, x: e.clientX, y: e.clientY }];
        if (newPoints.length > 20) return newPoints.slice(-20);
        return newPoints;
      });

      // Handle inactivity timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setPoints([]); // Clear trail on stop
      }, 500); // 0.5 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Create SVG path string from points
  const createPath = () => {
    if (points.length < 2) return "";
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const xc = (points[i].x + points[i - 1].x) / 2;
      const yc = (points[i].y + points[i - 1].y) / 2;
      path += ` Q ${points[i - 1].x} ${points[i - 1].y}, ${xc} ${yc}`;
    }
    return path;
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000]">
      <AnimatePresence>
        {isVisible && points.length > 1 && (
          <svg className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="gold-trail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            <motion.path
              d={createPath()}
              fill="none"
              stroke="url(#gold-trail)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Glowing Tip */}
            <motion.circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="4"
              fill="#fbbf24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{ filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 1))" }}
            />
          </svg>
        )}
      </AnimatePresence>
    </div>
  );
};
