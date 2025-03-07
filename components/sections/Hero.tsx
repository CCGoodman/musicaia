"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import BlurText from "@/components/ui/blur-text";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const words = [
    { text: "Create", className: "text-white" },
    { text: "Music", className: "text-pink-500" },
    { text: "with", className: "text-white" },
    { text: "AI", className: "text-pink-500" },
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="inline-flex justify-center">
            <BlurText
              text={words.map(w => w.text).join(" ")}
              className="text-6xl font-bold"
              delay={150}
              animateBy="words"
              direction="top"
              wordClassNames={words.map(w => w.className)}
            />
          </div>
        </motion.div>
        <p className="text-xl text-gray-300 mb-8">
          Transform your ideas into studio-quality music in seconds using artificial intelligence
        </p>
        <div className="flex justify-center">
          <div onClick={onGetStarted}>
            <AnimatedButton />
          </div>
        </div>
      </div>
    </section>
  );
}