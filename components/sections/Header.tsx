"use client";

import { Button } from "@/components/ui/button";
import Aurora from "@/components/ui/aurora";

interface HeaderProps {
  onGetStarted: () => void;
}

export function Header({ onGetStarted }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold font-['Roboto_Mono']">echo.</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost"
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </Button>
          <Button 
            variant="ghost"
            onClick={() => scrollToSection('features')}
          >
            Features
          </Button>
          <Button 
            variant="default" 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={onGetStarted}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
