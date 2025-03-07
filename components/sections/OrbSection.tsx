"use client";

import Orb from "@/components/ui/orb";

export function OrbSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience Echo</h2>
          <p className="text-xl text-gray-300">Interact with our AI-powered music visualization</p>
        </div>
        <div className="w-full h-[600px] relative">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={240}
            forceHoverState={false}
          />
        </div>
      </div>
    </section>
  );
}