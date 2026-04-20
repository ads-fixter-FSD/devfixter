
"use client";
import React from "react";
import Badge from "../shared/Badge";
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";
import { motion, Variants } from "framer-motion";

export default function WhatWeDo() {
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="pt-20 lg:pt-30 px-3 md:px-0">
      <div className="custom-container min-h-auto lg:h-[520px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 overflow-hidden">
        
        {/* Left Side: Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[560px] h-[300px] lg:h-full relative rounded-[30px] overflow-hidden"
        >
          <Image
            src="/aboutUs/whatWeDo.svg"
            alt="Our Team"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Side: Content Section  */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[630px] flex flex-col gap-6 items-start justify-center"
        >
          <div className="flex flex-col gap-[14px]">
            <motion.div variants={fadeInUp}>
              <Badge>What We Do</Badge>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              transition={{ delay: 0.2 }} 
              className="title-md"
            >
              We Design, Develop, and Scale <br className="hidden lg:block" /> 
              Powerful Digital Solutions for <br className="hidden lg:block" />
              Businesses
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-[30px] w-full lg:w-[597px]">
            <motion.div 
              variants={fadeInUp} 
              transition={{ delay: 0.3 }} 
              className="text-base text-[#9B9EA8]"
            >
              Whether you&apos;re a startup or an established business, we
              provide end-to-end development services to bring your ideas to
              life. From planning and UI integration to backend development and
              deployment, we ensure your product is fast, secure, and built for
              growth.
            </motion.div>
            
            <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
              <PrimaryButton>
                Start Your Project{" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16732 9.99992L15.834 9.99992M15.834 9.99992L10.0007 4.16659M15.834 9.99992L10.0007 15.8333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </PrimaryButton>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
