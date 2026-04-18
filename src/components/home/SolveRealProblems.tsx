"use client";

import React from "react";
import { motion } from "framer-motion";
import SolveRealProblemCard from "./SolveRealProblemCard";

const SolveRealProblems = () => {
  return (
    <section className="pt-10 md:pt-[120px] ">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center "
          >
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <foreignObject x="-15.9999" y="-16" width="52" height="52">
                  <div
                    className=""
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      backdropFilter: "blur(8px)",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </foreignObject>
                <g filter="url(#filter0_i_17_105)">
                  <rect
                    x="0.00012207"
                    width="20"
                    height="20"
                    rx="6"
                    fill="#FF5841"
                    fillOpacity="0.05"
                  />
                </g>
                <path
                  d="M8.00024 6L12.0002 10L8.00024 14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_i_17_105"
                    x="-15.9999"
                    y="-16"
                    width="52"
                    height="52"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-4" />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.153752 0 0 0 0 0.732022 0 0 0 0 1 0 0 0 0.32 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_17_105"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <span className="ml-[10px] bg-gradient-to-r from-[#B5BDE2] to-[rgba(181,189,226,0.55)] bg-clip-text text-transparent text-base ">
              Solve Real Problems
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 title-xl font-[500] text-white"
          >
            Everything You Need to <br />
            <span>Build & Scale</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#9B9EA8] mt-4 text-base"
          >
            From idea to deployment — we provide complete{" "}
            <br className="hidden md:block" />
            development solutions.
          </motion.p>
        </div>
        <SolveRealProblemCard></SolveRealProblemCard>
      </div>
    </section>
  );
};

export default SolveRealProblems;
