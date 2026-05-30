import React from "react";

export const RadialGlowBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-[#050505] relative overflow-hidden">
      {/* Dark Radial Glow Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 150px, rgba(62, 62, 62, 0.4), transparent)`,
        }}
      />
      
      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
