"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animation";

interface HeroProps {
  badge?: ReactNode;
  title: ReactNode;
  description: string;
  primaryBtn?: ReactNode;
  secondaryBtn?: ReactNode;
  className?: string;
}

const LineSheen = ({ delay = 0, height = 200 }: { delay?: number; height?: number }) => (
  <motion.div
    initial={{ top: "-20%" }}
    animate={{ top: "120%" }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
    className="absolute left-[-1px] w-[2px] z-10"
    style={{
      height: `${height}px`,
      background: "linear-gradient(180deg, #27BBFF 0%, rgba(24, 112, 153, 0) 100%)",
      boxShadow: "0px 0px 12px rgba(39, 187, 255, 0.5)",
    }}
  />
);

const Hero = ({
  badge,
  title,
  description,
  primaryBtn,
  secondaryBtn,
  className = "",
}: HeroProps) => {

  return (
    <section className={`relative w-full h-[727px] bg-black overflow-hidden flex justify-center items-center ${className}`}>
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, rgba(181, 59, 226, 0.3) 0%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 sm:px-6">
        {/* Vertical Lines */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
          <div className="absolute top-0 h-full w-[1px] bg-[#FFFFFF12] left-[60px]"><LineSheen delay={0} /></div>
          <div className="absolute top-0 h-full w-[1px] bg-[#FFFFFF12] left-[16%] lg:left-[257px]"><LineSheen delay={1.5} /></div>
          <div className="absolute top-0 h-full w-[1px] bg-[#FFFFFF12] left-[72%] lg:left-[calc(100%-257px)]"><LineSheen delay={0.8} /></div>
          <div className="absolute top-0 h-full w-[1px] bg-[#FFFFFF12] left-[88%] lg:left-[calc(100%-60px)]"><LineSheen delay={2.2} /></div>
          
          <div className="absolute top-0 h-full w-[1px] bg-[#FFFFFF12] left-[621px]"><LineSheen delay={3} height={70} /></div>
          <div className="absolute top-0 h-full w-[1px] bg-[#FFFFFF12] left-[819px]"><LineSheen delay={1.2} height={150} /></div>

          <div
            className="absolute left-1/2 z-[2] h-full w-[min(28vw,198px)] -translate-x-1/2 border-x border-[#FFFFFF12] lg:left-[621px] lg:w-[198px] lg:translate-x-0"
            style={{ background: "linear-gradient(360deg, rgba(255, 255, 255, 0.04) 33.01%, rgba(255, 255, 255, 0) 84.98%)" }}
          >
            <div className="hero-vline-sheen-middle absolute inset-0 overflow-hidden" />
          </div>
        </div>

        {/* Hero Content - FIXED ANIMATION */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            {/* Inner motion div for the floating effect */}
            <motion.div
              className="flex flex-col items-center"
            >
              {badge && <div className="mb-8">{badge}</div>}

              <h1 className="text-white title-xl font-medium leading-[1.2]  mb-6 tracking-[-2%">
                {title}
              </h1>

              <p className="text-[#B5BDE2] text-base  max-w-[868px] mb-[30px] leading-[1.4]">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {primaryBtn}
                {secondaryBtn}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;