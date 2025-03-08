"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { EmailForm } from "@/components/ui/email-form";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { OrbSection } from "@/components/sections/OrbSection";
import { Features } from "@/components/sections/Features";
import { AppPreview } from "@/components/sections/AppPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  const handleEmailSubmit = async (email: string) => {
    // Redirect to App Store immediately
    window.location.href = "https://apps.apple.com/us/app/echo-ai-music-generator/id6618152724";
    setShowEmailDialog(false);
  };

  const handleGetStarted = () => {
    setShowEmailDialog(true);
  };

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black">
      <Header onGetStarted={handleGetStarted} />
      <Hero onGetStarted={handleGetStarted} />
      <OrbSection />
      <Features />
      <AppPreview />
      <FAQ />
      <Footer onGetStarted={handleGetStarted} />

      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Download Echo AI</DialogTitle>
            <DialogDescription>
              Enter your email to download the iOS app and join our newsletter for updates.
            </DialogDescription>
          </DialogHeader>
          <EmailForm onSubmit={handleEmailSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
