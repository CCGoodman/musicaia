"use client";

import { useState, useEffect } from "react";
import { Wand2, Sparkles, Download, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useMouse } from "@/components/hooks/usemouse";

const features = [
  {
    icon: Wand2,
    title: "Sleek & Dark UI + AI Artwork",
    content: "The Echo Music app blends a modern dark UI with stunning AI-generated artwork, creating an immersive experience for music lovers.",
    image: "https://od.lk/s/MF8zNjA5NTgzNjNf/0.webp"
  },
  {
    icon: Sparkles,
    title: "AI-Generated Music",
    content: "Create unique AI-generated songs It features realistic AI vocals, and easy export options for sharing. making music creation seamless and intuitive.",
    image: "https://od.lk/s/MF8zNjA5NjA4NjRf/4.webp"
  },
  {
    icon: Palette,
    title: "Customizable",
    content: "AI-generated songs by describing themes, selecting moods, and choosing genres. It offers an intuitive interface with a text input for song ideas.",
    image: "https://od.lk/s/MF8zNjA5NjAwODFf/2.webp"
  }
];

function FeatureCard({ feature, isActive, onClick, loadingProgress }: { 
  feature: typeof features[0];
  isActive: boolean;
  onClick: () => void;
  loadingProgress: number;
}) {
  const [mouse, ref] = useMouse();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative transform-gpu overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer",
        isActive ? "bg-white/10" : "bg-white/5 opacity-70"
      )}
    >
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[2]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: "radial-gradient(200px circle at center, white, transparent)",
          width: "400px",
          height: "400px",
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background: "linear-gradient(135deg, #3A29FF, #FF94B4, #FF3232, #3A29FF)",
        }}
      />
      <div className="absolute inset-px rounded-2xl bg-black/80" />
      
      <div className="relative p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
        </div>
        <p className="text-gray-300 text-lg mb-4">{feature.content}</p>
        {isActive && (
          <div className="w-full">
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="absolute left-0 top-0 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    if (!isTransitioning) {
      setLoadingProgress(0);
      
      progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            setIsTransitioning(true);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [activeFeature, isTransitioning]);

  useEffect(() => {
    let transitionTimeout: NodeJS.Timeout;

    if (isTransitioning) {
      transitionTimeout = setTimeout(() => {
        setActiveFeature((current) => (current + 1) % features.length);
        setIsTransitioning(false);
      }, 200);
    }

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [isTransitioning]);

  const handleFeatureClick = (index: number) => {
    if (index !== activeFeature) {
      setActiveFeature(index);
      setIsTransitioning(false);
      setLoadingProgress(0);
    }
  };

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal
          containerClassName="text-center mb-16"
          textClassName="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Transform Your Musical Ideas Into Reality
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                isActive={activeFeature === index}
                onClick={() => handleFeatureClick(index)}
                loadingProgress={activeFeature === index ? loadingProgress : 0}
              />
            ))}
          </div>

          <div className="relative h-[600px] overflow-hidden rounded-2xl lg:block bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  activeFeature === index
                    ? "opacity-100 translate-x-0"
                    : index < activeFeature
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}