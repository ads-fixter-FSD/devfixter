"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../../button/PrimaryButton';

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (val: boolean) => void;
}

const PricingToggle = ({ isAnnual, setIsAnnual }: PricingToggleProps) => {
  return (
    <div 
      className="relative flex items-center p-1 mx-auto cursor-pointer select-none z-10"
      style={{
        width: "255px",
        height: "52px",
        borderRadius: "10px",
        background: "#000311",
        border: "1px solid #191C28"
      }}
    >
      {/* Moving Background Slider */}
      <motion.div
        initial={false}
        animate={{
          x: isAnnual ? 123 : 0,
          boxShadow: "0px 0px 20px rgba(181, 59, 226, 0.4)" 
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
        className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-[#B53BE2] rounded-[10px]"
      />

      {/* Monthly Button */}
      <PrimaryButton
        onClick={() => setIsAnnual(false)}
        className={`relative z-10 w-1/2 bg-transparent !border-none !h-full !min-w-0 text-[16px] font-medium leading-[1.4] transition-all duration-300  ${
          !isAnnual 
          ? 'text-white ' 
          : 'text-[#B5BDE2]/40 shadow-none'
        }`}
      >
        Monthly
      </PrimaryButton>

      {/* Annually Button */}
      <PrimaryButton
        onClick={() => setIsAnnual(true)}
        className={`relative z-10 w-1/2 bg-transparent !border-none !h-full !min-w-0 text-[16px] font-medium leading-[1.4] transition-all duration-300  ${
          isAnnual 
          ? 'text-white' 
          : 'text-[#B5BDE2]/40 shadow-none'
        }`}
      >
        Annually
      </PrimaryButton>
    </div>
  );
};

export default PricingToggle;