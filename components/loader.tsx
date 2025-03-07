"use client";

import React, { useEffect, useState } from 'react';
import { Music } from 'lucide-react';

export const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="loader">
        <div style={{"--i": 1, "--inset": "44%"} as any} className="box">
          <div className="logo">
            <Music className="w-12 h-12" />
          </div>
        </div>
        <div style={{"--i": 2, "--inset": "40%"} as any} className="box" />
        <div style={{"--i": 3, "--inset": "36%"} as any} className="box" />
        <div style={{"--i": 4, "--inset": "32%"} as any} className="box" />
        <div style={{"--i": 5, "--inset": "28%"} as any} className="box" />
        <div style={{"--i": 6, "--inset": "24%"} as any} className="box" />
        <div style={{"--i": 7, "--inset": "20%"} as any} className="box" />
        <div style={{"--i": 8, "--inset": "16%"} as any} className="box" />
      </div>
    </div>
  );
}