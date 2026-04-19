"use client";

import SecondaryButton from "@/components/button/SecondaryButton";
import React from "react";
import Badge from "../Badge";
import PrimaryButton from "@/components/button/PrimaryButton";

import { IoMdArrowForward } from "react-icons/io";

const ContactCTA = () => {
  return (
    <section className="relative w-full overflow-hidden  p-10 md:py-[100px] md:px-[300px] lg:py-32">
      {/* Background Blur Circle (Custom Positioning) */}
     
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none
             /* Mobile (Default) */
             -top-[100px] w-[250px] h-[250px] bg-[#B53BE2] blur-[80px] opacity-60
             /* Tablet/Desktop (md and up) */
             md:-top-[300px] md:w-[444px] md:h-[700px] md:bg-[#B53BE2]/70 md:blur-[150px] md:opacity-50
             rounded-full"
      />

      <div className="custom-container relative z-10 px-4 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-3">
          <Badge>Contact</Badge>
        </div>

        {/* Title */}
        <h2 className="title-xl mb-6 max-w-[850px] text-foreground">
          Let’s Build Your Project Together
        </h2>

        {/* Description */}
        <p className="text-base text-muted mb-[60px] max-w-[600px] leading-relaxed">
          Tell us about your project, and we’ll provide the best solution <br />
          tailored to your needs — fast, reliable, and scalable.
        </p>

        {/* Primary Button */}
        <PrimaryButton href="/contact" icon={IoMdArrowForward}>
          Contact Us
        </PrimaryButton>
      </div>
    </section>
  );
};

export default ContactCTA;
