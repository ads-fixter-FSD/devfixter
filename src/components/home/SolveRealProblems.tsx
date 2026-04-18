"use client";

import React from "react";
import { motion } from "framer-motion";

const SolveRealProblems = () => {
  return (
      <div className="bg-[#000000]">
              
      <section className="relative  flex flex-col items-center justify-center ">
        {/* Background Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 cursor-pointer hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-15.9999" y="-16" width="52" height="52">
                  <div 
                    xmlns="http://www.w3.org/1999/xhtml" 
                    style={{
                      backdropFilter: 'blur(8px)',
                      height: '100%',
                      width: '100%'
                    }}
                  />
                </foreignObject>
                <g filter="url(#filter0_i_17_105)">
                  <rect x="0.00012207" width="20" height="20" rx="6" fill="#FF5841" fillOpacity="0.05"/>
                </g>
                <path 
                  d="M8.00024 6L12.0002 10L8.00024 14" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <defs>
                  <filter id="filter0_i_17_105" x="-15.9999" y="-16" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-4"/>
                    <feGaussianBlur stdDeviation="4.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.153752 0 0 0 0 0.732022 0 0 0 0 1 0 0 0 0.32 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_17_105"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-400 tracking-wide">
              Solve Real Problems
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8"
          >
            Everything You Need to <br />
            <span className="text-white font-bold">Build & Scale</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            From idea to deployment — we provide complete <br className="hidden md:block" />
            development solutions.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default SolveRealProblems;