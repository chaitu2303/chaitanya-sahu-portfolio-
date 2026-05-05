"use client";

import { useEffect, useRef } from "react";

interface Props { color?: string; }

/* Code snippets that fall like rain */
const CODE_FRAGMENTS = [
  "const", "let", "function", "return", "import",
  "export", "async", "await", "class", "interface",
  "=>", "{ }", "( )", "[ ]", "===", "!==",
  "if", "else", "for", "while", "try", "catch",
  "React", "useState", "fetch", "console.log",
  "<div>", "</div>", "npm run", "git push",
  "http://", "onClick", ".map()", ".filter()",
  "true", "false", "null", "0x1F", "127.0.0.1",
  "SELECT *", "INSERT", "db.find()", "res.json()",
];

export const ParticleField = ({ color = "#8b5cf6" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    /* Create falling code particles */
    const particles: {
      x: number; y: number; speed: number; text: string;
      opacity: number; size: number; drift: number;
    }[] = [];

    const COUNT = Math.min(50, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.8,
        text: CODE_FRAGMENTS[Math.floor(Math.random() * CODE_FRAGMENTS.length)],
        opacity: 0.04 + Math.random() * 0.08,
        size: 10 + Math.random() * 4,
        drift: (Math.random() - 0.5) * 0.3,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.y += p.speed;
        p.x += p.drift;

        /* Reset when off screen */
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
          p.text = CODE_FRAGMENTS[Math.floor(Math.random() * CODE_FRAGMENTS.length)];
        }
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;

        ctx.font = `${p.size}px 'JetBrains Mono', 'Courier New', monospace`;
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.text, p.x, p.y);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};
