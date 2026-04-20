"use client";
import React from "react";
import Badge from "../shared/Badge";
import { TEAM_MEMBERS } from "@/constants/team";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function OurTeam() {
  // Common Fade Up Variant
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  return (
    <div className="py-20 lg:py-30 px-3 md:px-0">
      <div className="custom-container min-h-auto lg:h-[640px] flex flex-col items-center justify-between gap-12 lg:gap-0">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-6 w-full lg:w-[734px]"
        >
          <div className="flex flex-col items-center gap-3">
            <Badge>Our Team</Badge>
            <div className="text-center title-lg">
              Meet the Experts Behind <br className="hidden lg:block" /> DevFixter
            </div>
          </div>
          <div className="text-center text-base text-[#9B9EA8]">
            Our team is made up of skilled developers, designers, and
            problem-solvers dedicated to building fast, scalable, and reliable
            digital solutions. We work together to turn ideas into powerful
            products.
          </div>
        </motion.div>

        {/* Grid Section with Staggered Fade Up */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="h-[350px] lg:h-[350px] relative rounded-[10px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />

              {/* Hover Overlay  */}
              <div
                className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6"
                style={{
                  background:
                    "linear-gradient(204.23deg, rgba(0, 0, 0, 0) 55.7%, rgba(0, 0, 0, 0.6) 93.38%)",
                }}
              >
                <div className="text-white text-base font-medium translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  {member.name}
                </div>
                <div className="text-[#9B9EA8] text-sm mt-1 translate-y-4 transition-transform duration-500 delay-75 group-hover:translate-y-0">
                  {member.designation}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}