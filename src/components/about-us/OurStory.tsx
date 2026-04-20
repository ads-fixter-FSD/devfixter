"use client"; 
import React from "react";
import Badge from "../shared/Badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20 px-3 md:px-0">
      <div className="custom-container min-h-auto lg:h-[464px] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
        
        {/* Left Side: Image Section (Fade from Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[738px] h-[300px] lg:h-full relative rounded-[30px] overflow-hidden"
        >
          <Image
            src="/aboutUs/ourStory.svg"
            alt="Our Team"
            fill
            sizes="(max-width: 1024px) 100vw, 738px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Side: Content Card (Fade from Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[522px] h-auto lg:h-full rounded-[30px] border border-[#191C28] p-6 lg:p-[30px] flex flex-col justify-between"
          style={{ 
            backgroundColor: "#000311",
            boxShadow: "0px 34px 154px 0px #FFFFFF12 inset" 
          }}
        >
          {/* Internal Elements: Fade Up with Stagger */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-[370px] flex flex-col items-start gap-6"
          >
            <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
              <Badge>Our Story</Badge>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ delay: 0.3 }} className="title-md font-medium text-white">
              Building Digital Products That Drive Real Growth
            </motion.div>

            <motion.div variants={fadeUp} transition={{ delay: 0.4 }}>
              <Link href="/contact" className="flex items-center gap-1 group">
                <button className="text-base text-white group-hover:underline">Work With Us</button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M4.16659 9.99998L15.8333 9.99998M15.8333 9.99998L9.99992 4.16665M15.8333 9.99998L9.99992 15.8333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section: Fade Up */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full lg:w-[400px] flex justify-between items-center mt-8 lg:mt-0 pt-6 lg:pt-0 border-t border-[#191C28] lg:border-none"
          >
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="title-lg text-white">99%</div>
              <div className="text-[#9B9EA8] text-sm lg:text-base">
                Customer Satisfaction
              </div>
            </div>

            {/* Vertical Line */}
            <div className="h-12 lg:h-16 w-[1px] bg-[#191C28]"></div>

            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="title-lg text-white">15+</div>
              <div className="text-[#9B9EA8] text-sm lg:text-base">
                Years of Experience
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}