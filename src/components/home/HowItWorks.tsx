"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animation";
import { ChevronRight } from "lucide-react";
import PrimaryButton from "../button/PrimaryButton";
import { IoMdArrowForward } from "react-icons/io";
import { div } from "framer-motion/client";
import Badge from "../shared/Badge";

const steps = [
  {
    step: "Step 01",
    title: "Share Your Idea",
    desc: "Tell us about your project, goals, and requirements.",
  },
  {
    step: "Step 02",
    title: "Planning & Strategy",
    desc: "We analyze, plan, and design the best development approach.",
  },
  {
    step: "Step 03",
    title: "Build & Launch",
    desc: "We develop, test, and deliver your product ready to go live.",
  },
];

const HowItWorks = () => {
  return (
    <div className="mx-auto relative">

          {/* --- Background Blur Circle  */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "380px",
          height: "361.43px",
          top: "50%",
          left: "50%",
          background: "#B53BE2",
          transform: "translate(-50%, -50%)",
         
          filter: "blur(400px)",
          opacity: 1,
          zIndex: 0,
        }}
      />


        <section className=" custom-container   w-full py-20 bg-black overflow-hidden">
    

      <div className="relative z-10 flex flex-col items-center gap-[60px]">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="flex flex-col items-center text-center gap-6"
        >
        
          <Badge>
             How It Works
          </Badge>
          <h2 className="title-lg text-white">Simple Steps to Get Started</h2>
          <p className="ftext-color">
            Start your development journey with a clear and streamlined process.
          </p>
        </motion.div>

        {/* --- Grid Cards Section (Width: 342px each) --- */}
        <div className="w-full max-w-[1064px] grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index * 0.1 + 0.2}
              style={{
                width: "100%", 
                maxWidth: "342px",
                height: "216px",
                background: "#000311",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.07)", 
                boxShadow: "inset 0px 34px 154px 0px rgba(255, 255, 255, 0.07)", 
              }}
              className="mx-auto p-[30px_25px_30px_24px] flex flex-col gap-[10px]"
            >
              <span className="text-white title-s font-medium">
                {item.step}
              </span>
              <h3 className="text-white title-s font-semibold mt-2">
                {item.title}
              </h3>
              <p className="ftext-color text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.5}
        >
          <PrimaryButton href="/contact" icon={IoMdArrowForward}>
            Contact now
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
    </div>
  
  );
};

export default HowItWorks;
