"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export const AnimatedButton = () => {
  return (
    <button className="uiverse">
      <div className="wrapper">
        <span className="flex items-center gap-2">
          Download on iOS
          <FontAwesomeIcon icon={faApple} className="w-5 h-5 ml-1" />
        </span>
        <div className="circle circle-12" />
        <div className="circle circle-11" />
        <div className="circle circle-10" />
        <div className="circle circle-9" />
        <div className="circle circle-8" />
        <div className="circle circle-7" />
        <div className="circle circle-6" />
        <div className="circle circle-5" />
        <div className="circle circle-4" />
        <div className="circle circle-3" />
        <div className="circle circle-2" />
        <div className="circle circle-1" />
      </div>
    </button>
  );
}