"use client";
import { useState, useEffect } from 'react';
import Badge from '../../shared/Badge';
import PricingCard from './PricingCard';
import PricingToggle from './PricingToggle';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthly_price: number;
  annual_price: number;
  features: string[];
  button_text: string;
  button_variant: string;
}

export default function PricingSection() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    fetch('/data/pricing.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.pricing_plans) {
          setPlans(data.pricing_plans);
        }
      })
      .catch(err => console.error("Error loading pricing data:", err));
  }, []);



  return (
    <section className="bg-black py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <Badge className="mb-6 mx-auto">Pricing Plans</Badge>
          <h2 className="text-white text-4xl md:text-5xl font-medium mb-6">
            Flexible Development Plans <br /> for Every Project
          </h2>
          <p className="text-[#9B9EA8] text-base mb-10 max-w-3xl mx-auto text-center" style={{ lineHeight: "1.5" }}>
            Choose the right plan based on your needs — from simple websites to advanced web applications and scalable systems.
          </p>
          
          <div className="flex justify-center">
            <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          </div>
        </div>

        {/* --- Main Container (Width: 1104px, Height: 524px) --- */}
        <div
          className="w-full relative z-10 flex flex-col md:flex-row max-w-[1104px] mx-auto items-stretch"
          style={{
            minHeight: "524px",
            padding: "20px",
            borderRadius: "30px",
            background: "#000311",
            border: "1px solid #191C28",
            boxShadow: "inset 0px 34px 200px 0px rgba(255, 255, 255, 0.07)",
          }}
        >
          {/* Card 1: Starter Plan (Width: 328px) */}
          {plans.length > 0 && (
            <div className="w-full md:w-[368px] shrink-0 p-4 md:p-8 px-0 md:px-4 flex flex-col">
              <PricingCard plan={plans[0]} isAnnual={isAnnual} index={0} />
            </div>
          )}

          {/* Inner Group Container (Width: 706px, Height: 484px) */}
          {plans.length > 1 && (
            <div
              className="flex-1 flex flex-col md:flex-row rounded-[26px] items-stretch"
              style={{
                background: "#121522",
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
                paddingRight: "30px",
                gap: "113px" 
              }}
            >
              {/* Card 2 (Content Width: 246px) */}
              <div className="w-full md:w-[246px] shrink-0 flex flex-col">
                <PricingCard plan={plans[1]} isAnnual={isAnnual} index={1} />
              </div>
              
              {/* Card 3 (Content Width: 246px) */}
              {plans.length > 2 && (
                <div className="w-full md:w-[246px] shrink-0 flex flex-col">
                  <PricingCard plan={plans[2]} isAnnual={isAnnual} index={2} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}