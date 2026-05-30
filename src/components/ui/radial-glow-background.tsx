"use client"
import React, { useEffect, useRef } from "react";

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const characters = "const let var function => return () {} [] ; : import export interface type class extends implements new public private protected static readonly string number boolean any void null undefined await async try catch throw if else for while switch case break continue default true false console.log".split(" ")

    const fontSize = 12
    const columns = width / fontSize
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)" // fading effect
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = "rgba(34, 211, 238, 0.2)" // cyan text, slightly faint
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      const newColumns = width / fontSize
      for (let x = drops.length; x < newColumns; x++) {
        drops[x] = 1
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
    />
  )
}

export const RadialGlowBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative overflow-hidden">
      {/* Dark Radial Glow Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      {/* Code Rain Animation */}
      <CodeRain />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
