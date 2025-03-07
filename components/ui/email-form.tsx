"use client";

import React, { useState } from 'react';

export const EmailForm = ({ onSubmit }: { onSubmit: (email: string) => void }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
      <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
        <span className="font-extrabold text-2xl text-violet-600">Get Echo AI</span>
        <p className="text-neutral-700">
          Sign up to download the iOS app and be the first to know about new features
        </p>
      </div>
      <div className="flex gap-1">
        <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" 
            placeholder="Enter your email..." 
            required
          />
        </div>
        <button type="submit" className="bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-400">
          Download
        </button>
      </div>
    </form>
  );
}