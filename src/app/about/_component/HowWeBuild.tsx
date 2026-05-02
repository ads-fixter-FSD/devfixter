
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/button/PrimaryButton";
import Badge from "@/components/shared/Badge";
import { fadeUp } from "../../../../utils/animation";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Business-Driven Development",
    description:
      "We focus on understanding your business goals first. Every solution we build is designed to deliver real value and measurable growth.",
    align: "right",
  },
  {
    number: "02",
    title: "Clean & Scalable Code",
    description:
      "Our development approach ensures your product is easy to maintain, upgrade, and scale as your business grows.",
    align: "left",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "We keep everything transparent — from timelines to progress — so you're always in control of your project.",
    align: "right",
  },
  {
    number: "04",
    title: "Fast & Reliable Delivery",
    description:
      "We deliver high-quality solutions quickly, without compromising stability, security, or performance.",
    align: "left",
  },
];

export default function HowWeBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line animation
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      // ICON ANIMATION
      circleRefs.current.forEach((circle, index) => {
        if (!circle) return;

        if (index === 0) {
          activate(circle);
          return;
        }

        ScrollTrigger.create({
          trigger: stepRefs.current[index],
          start: "top 60%",
          end: "bottom 60%",
          onEnter: () => activate(circle),
          onEnterBack: () => activate(circle),
          onLeaveBack: () => deactivate(circle),
        });
      });

      function activate(circle: HTMLElement) {
        gsap.to(circle, {
          backgroundColor: "#B53BE2",
          borderColor: "rgba(255, 255, 255, 0.4)",
          boxShadow:
            "0px 0px 30px 0px rgba(181, 59, 226, 0.50), inset 0px -4px 20px 0px #EAB1FF",
          duration: 0.3,
        });
      }

      function deactivate(circle: HTMLElement) {
        gsap.to(circle, {
          backgroundColor: "#000000",
          borderColor: "#121522",
          boxShadow: "none",
          duration: 0.3,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white px-6 overflow-hidden mt-20"
    >
      {/* Header */}
      <div className="max-w-[440px] mx-auto text-center mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.2}
          className="flex flex-col items-center gap-6"
        >
          <Badge>Our Value</Badge>
          <h2 className="title-lg">
            How We Build Better <br /> Digital Products
          </h2>
          <p className="text-base text-gray-400">
            At DevFixter, we follow a clear approach to development focusing on
            performance.
          </p>
        </motion.div>
        <PrimaryButton className="mt-[50px]">
          Start Your Project
        </PrimaryButton>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/*  FIXED LINE */}
        <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 top-[32px] bottom-[72px] w-[1px] bg-white/10">
          <div
            ref={lineRef}
            className="w-full h-full origin-top"
            style={{
              transform: "scaleY(0)",
              background:
                "linear-gradient(180deg, #B53BE2 0%, #EAB1FF 100%)",
            }}
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className={`relative flex items-start w-full md:justify-center ${
                step.align === "right"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-row`}
            >
              <div className="flex-1 hidden md:block"></div>

              {/* Icon */}
              <div className="relative z-10 shrink-0">
                <div
                  ref={(el) => {
                    circleRefs.current[idx] = el;
                  }}
                  className={`step-circle w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-500
                  ${
                    idx === 0
                      ? "bg-[#B53BE2] border border-white/40 shadow-[0px_0px_30px_0px_rgba(181,59,226,0.50),_inset_0px_-4px_20px_0px_#EAB1FF]"
                      : "bg-black border border-[#121522]"
                  }`}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.2}
                className={`flex-1 flex ${
                  step.align === "left"
                    ? "md:justify-end justify-start"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[440px] pt-2 
                  ml-[20px] text-left 
                  md:ml-0 
                  ${
                    step.align === "left"
                      ? "md:mr-[30px] md:text-right"
                      : "md:ml-[30px] md:text-left"
                  }`}
                >
                  <h3 className="title-sm mb-4">{step.title}</h3>
                  <p className="text-base text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}