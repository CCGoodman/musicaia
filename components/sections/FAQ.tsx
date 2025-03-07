"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "@/components/ui/scroll-reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the Echo Music App?",
    answer: "The Echo Music App is an AI-powered tool that enables users to effortlessly create original songs, covers, and beats. It's designed for both seasoned musicians and beginners, allowing them to produce full tracks, snippets, or AI covers by simply describing the desired sound, selecting a genre, and customizing instruments to match their style."
  },
  {
    question: "How does the Echo Music App work?",
    answer: "Users input a text description of the sound they're aiming for, choose their preferred genre, and customize the instruments. The app's advanced AI technology then transforms these inputs into melodies, enabling the creation of studio-quality music in seconds."
  },
  {
    question: "Can I share the music I create with the Echo Music App?",
    answer: "Yes, once you've created your music, you can easily share your AI-generated songs, covers, and beats on social media platforms or with friends and family. The app allows you to sing, create tunes, and use your voice to generate tracks, making your music journey portable and accessible anytime, anywhere."
  },
  {
    question: "Is the Echo Music App suitable for beginners?",
    answer: "Absolutely. The app is designed to be user-friendly, catering to both complete beginners and seasoned musicians. Its intuitive interface and AI-driven features make music creation accessible to everyone."
  },
  {
    question: "On which devices is the Echo Music App available?",
    answer: "The Echo Music App is available for iOS devices and can be downloaded from the Apple App Store."
  },
  {
    question: "Does the Echo Music App offer any tutorials or guides for new users?",
    answer: "While the app is designed to be intuitive, new users can find guidance and support through the app's official channels or help sections within the app."
  },
  {
    question: "Are there any costs associated with using the Echo Music App?",
    answer: "The Echo Music App is free to download and offers in-app purchases for additional features or content."
  },
  {
    question: "How does the Echo Music App compare to other AI music generators?",
    answer: "The Echo Music App stands out due to its user-friendly interface, versatility in music creation, and the ability to produce high-quality tracks quickly. Its AI-driven features provide a unique experience compared to other AI music generators."
  },
  {
    question: "Can I use the Echo Music App without any musical background?",
    answer: "Yes, the app is designed to be accessible to users without any musical background, allowing anyone to create music effortlessly."
  },
  {
    question: "Does the Echo Music App require an internet connection to function?",
    answer: "Yes, internet connection is required to use app and it's features."
  }
];

export function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3 text-white">
            <FontAwesomeIcon icon={faQuestionCircle} className="w-8 h-8" />
            <span>Frequently Asked Questions</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-400 border-t border-gray-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}