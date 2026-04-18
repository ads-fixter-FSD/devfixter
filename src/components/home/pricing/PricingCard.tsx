/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '../../button/PrimaryButton';

interface PricingCardProps {
  plan: any;
  isAnnual: boolean;
  index: number; 
}

const PricingCard = ({ plan, isAnnual, index }: PricingCardProps) => {
  const buttonWidth = index === 0 ? "md:w-[328px] w-[270px]" : "w-[246px]";

  return (
    <div className="pricing-card relative flex flex-col w-full h-full bg-transparent">
      
      {/* Icon & Title */}
      <div className="flex items-center gap-3 mb-6 min-h-[40px]">
        <div 
          className="flex items-center justify-center shrink-0"
          style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#B53BE2", boxShadow: "inset 0px -4px 9px 0px #EAB1FF" }}
        >
          <div className="relative w-5 h-5">
            <Image src="/home/pricing/union.png" fill alt="Icon" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <h3 className="font-medium text-[16px] leading-none text-white whitespace-nowrap">
            {plan.name}
          </h3>
          {plan.badge && (
            <span className="text-[#9B9EA8] font-normal text-[14px] leading-none">
              {plan.badge}
            </span>
          )}
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-4 flex items-baseline gap-1">
        <span className="font-medium text-[32px] leading-[1.3] text-white tracking-tight">
          ${isAnnual ? plan.annual_price : plan.monthly_price}
        </span>
        <span className="font-normal text-[16px] text-[#9B9EA8]">/ {isAnnual ? 'Annually' : 'Monthly'}</span>
      </div>

      {/* Description */}
      <p className="font-normal text-[16px] leading-[1.4] text-[#9B9EA8] mb-8 min-h-[44px]">
        {plan.description}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-4 mb-10 flex-grow">
        {plan.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1 relative rounded-full flex items-center justify-center shrink-0" style={{ width: "16px", height: "16px", background: "#191E36" }}>
              <div className="rounded-full" style={{ width: "8px", height: "8px", background: "#B53BE2" }} />
            </div>
            <span className="text-white/80 text-[14px] leading-[1.5]">{feature}</span>
          </div>
        ))}
      </div>

      {/* Button Section - Dynamic width applied here */}
      <div className="mt-auto">
        <PrimaryButton
          className={`${buttonWidth} !shadow !rounded-xl !h-[48px] mx-auto sm:mx-0 ${
            plan.button_variant === 'white' 
            ? 'bg-white !text-black hover:bg-white/90' 
            : plan.button_variant === 'secondary' 
            ? 'bg-transparent border border-[#191C28] !text-white hover:bg-white/10' 
            : ''
          }`}
        >
          {plan.button_text}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PricingCard;