"use client";

import React from 'react';

export const PatternBackground = () => {
  return (
    <div className="fixed inset-0 z-0" style={{ 
      backgroundColor: '#000',
      backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
        radial-gradient(circle at 50% 50%, #0000 1.5px, #000 0 7px, #0000 7px),
        radial-gradient(circle at 50% 50%, #0000 1.5px, #000 0 7px, #0000 7px),
        radial-gradient(circle at 50% 50%, #f00, #f000 60%),
        radial-gradient(circle at 50% 50%, #ff0, #ff00 60%),
        radial-gradient(circle at 50% 50%, #0f0, #0f00 60%),
        radial-gradient(ellipse at 50% 50%, #00f, #00f0 60%)
      `,
      backgroundSize: `
        100% 100%,
        12px 20.7846097px,
        12px 20.7846097px,
        200% 200%,
        200% 200%,
        200% 200%,
        200% 20.7846097px
      `,
      animation: 'wee 40s linear infinite, filt 6s linear infinite'
    }} />
  );
}