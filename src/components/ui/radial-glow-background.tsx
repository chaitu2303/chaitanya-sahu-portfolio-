import React from "react";

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
      
      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
