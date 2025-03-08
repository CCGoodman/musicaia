"use client";

import { Download } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  onGetStarted: () => void;
}

export function Footer({ onGetStarted }: FooterProps) {
  return (
    <footer className="bg-black/40 backdrop-blur-lg py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="font-bold font-['Roboto_Mono']">echo.</span>
            </div>
            <p className="text-gray-400">Transform your musical ideas into reality with AI</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Download</h4>
            <button 
              onClick={onGetStarted}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>iOS App Store</span>
            </button>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <a href="mailto:carechomusic@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              carechomusic@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Echo AI. By Abraham Abushmais.</p>
          <p className="mt-2">
            Built by{" "}
            <a 
              href="http://coodman.xyz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Coodman
            </a>{" "}
            🗿
          </p>
        </div>
      </div>
    </footer>
  );
}