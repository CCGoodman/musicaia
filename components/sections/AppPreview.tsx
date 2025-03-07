"use client";

import GradientText from "@/components/ui/gradient-text";

export function AppPreview() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <GradientText
          colors={["#3A29FF", "#FF94B4", "#FF3232", "#3A29FF"]}
          animationSpeed={3}
          showBorder={true}
          className="text-6xl font-bold mb-8 p-6"
        >
          Create your dream music.
        </GradientText>
        
        <GradientText
          colors={["#FF94B4", "#3A29FF", "#FF3232"]}
          animationSpeed={4}
          showBorder={false}
          className="text-2xl font-medium"
        >
          Let your words transform into studio quality music and melodies
        </GradientText>
      </div>
    </section>
  );
}