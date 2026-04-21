    {/* --- TOP RIGHT: Web Applications Node --- */}
          <div className="absolute top-[20%] right-[25%] md:top-30 md:right-[30%] flex flex-col items-start origin-top-right scale-75 md:scale-100 z-10">
            <div className="relative">
              {/* 1. User Profile Pic (Exactly at the top end of the line) */}
              {/* Line-er mathay exact position korar jonno coordinate adjust kora hoyeche */}
              <div className="absolute -top-4 left-[66px] z-30">
                <div className="w-8 h-8 rounded-full border-2 border-primary/50 overflow-hidden bg-gray-800 shadow-lg">
                  <img
                    src="https://i.pravatar.cc/30?img=5"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 2. Web Apps Card (Custom Styled per your requirements) */}
            
              <div className="absolute top-8 -left-1 bg-card w-[150px] h-[52px] rounded-[6px] my-box z-20 shadow-2xl flex flex-col justify-center px-3">
                <h4 className="text-[13px] font-semibold leading-tight text-white">
                  Web Applications
                </h4>
                <p className="text-[10px] text-muted leading-tight">
                  high-performance
                </p>
              </div>

              {/* 3. SVG Line */}
              <div className="relative z-10">
                <svg
                  width="83"
                  height="142"
                  viewBox="0 0 83 142"
                  fill="none"
                  className="opacity-80"
                >
                  <path
                    d="M0 141H70.5C77.1274 141 82.5 135.627 82.5 129V0"
                    stroke="url(#paint0_linear_139_623)"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_139_623"
                      x1="58"
                      y1="41"
                      x2="111.895"
                      y2="69.4089"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#187099" stopOpacity="0" />
                      <stop offset="1" stopColor="#EAB1FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>





// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import Badge from "@/components/shared/Badge";
// import { fadeUp } from "../../../../utils/animation";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     number: "01",
//     title: "Business-Driven Development",
//     description:
//       "We focus on understanding your business goals first. Every solution we build is designed to deliver real value and measurable growth.",
//     align: "right",
//   },
//   {
//     number: "02",
//     title: "Clean & Scalable Code",
//     description:
//       "Our development approach ensures your product is easy to maintain, upgrade, and scale as your business grows.",
//     align: "left",
//   },
//   {
//     number: "03",
//     title: "Clear Communication",
//     description:
//       "We keep everything transparent — from timelines to progress — so you're always in control of your project.",
//     align: "right",
//   },
//   {
//     number: "04",
//     title: "Fast & Reliable Delivery",
//     description:
//       "We deliver high-quality solutions quickly, without compromising stability, security, or performance.",
//     align: "left",
//   },
// ];

// export default function HowWeBuild() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Line animation
//       gsap.to(lineRef.current, {
//         scaleY: 1,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 30%",
//           end: "bottom 70%",
//           scrub: true,
//         },
//       });

//       // EACH ICON ANIMATION SYSTEM
//       circleRefs.current.forEach((circle, index) => {
//         if (!circle) return;

//         // 1st icon always active → no scroll trigger needed
//         if (index === 0) {
//           activate(circle);
//           return;
//         }

//         ScrollTrigger.create({
//           trigger: stepRefs.current[index],
//           start: "top 60%",
//           end: "bottom 60%",
//           onEnter: () => activate(circle),
//           onEnterBack: () => activate(circle),
//           onLeaveBack: () => deactivate(circle),
//         });
//       });
//       // ACTIVE STATE FUNCTION
//       function activate(circle: HTMLElement) {
//         gsap.to(circle, {
//           backgroundColor: "#B53BE2",
//           borderColor: "rgba(255, 255, 255, 0.4)",
//           boxShadow:
//             "0px 0px 30px 0px rgba(181, 59, 226, 0.50), inset 0px -4px 20px 0px #EAB1FF",
//           duration: 0.3,
//         });
//       }
//       // INACTIVE STATE FUNCTION
//       function deactivate(circle: HTMLElement) {
//         gsap.to(circle, {
//           backgroundColor: "#000000",
//           borderColor: "#121522",
//           boxShadow: "none",
//           duration: 0.3,
//         });
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="bg-black text-white  px-6 overflow-hidden mt-20"
//     >
//       {/* Header */}
//       <div className="max-w-[440px] mx-auto text-center mb-20 ">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={0.2}
//           className="flex flex-col items-center gap-6"
//         >
//           <Badge>Our Value</Badge>
//           <h2 className="title-lg">
//             How We Build Better <br /> Digital Products
//           </h2>
//           <p className="text-base text-gray-400">
//             At DevFixter, we follow a clear approach to development focusing on
//             performance.
//           </p>
//         </motion.div>
//         <PrimaryButton className="mt-[68px]">Start Your Project</PrimaryButton>
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* Line */}
//         <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 top-[32px] bottom-[32px] w-[1px] bg-white/10">
//           <div
//             ref={lineRef}
//             className="w-full h-full origin-top"
//             style={{
//               transform: "scaleY(0)",
//               background: "linear-gradient(180deg, #B53BE2 0%, #EAB1FF 100%)",
//             }}
//           />
//         </div>

//         {/* Steps */}
//         <div className="flex flex-col gap-20">
//           {steps.map((step, idx) => (
//             <div
//               key={idx}
//               ref={(el) => {
//                 stepRefs.current[idx] = el;
//               }}
//               className={`relative flex items-start w-full md:justify-center ${
//                 step.align === "right" ? "md:flex-row" : "md:flex-row-reverse"
//               } flex-row`}
//             >
//               <div className="flex-1 hidden md:block"></div>

//               {/* Icon */}
//               <div className="relative z-10 shrink-0">
//                 <div
//                   ref={(el) => {
//                     circleRefs.current[idx] = el;
//                   }}
//                   className={`step-circle w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-500
//                   ${
//                     idx === 0
//                       ? "bg-[#B53BE2] border border-white/40 shadow-[0px_0px_30px_0px_rgba(181,59,226,0.50),_inset_0px_-4px_20px_0px_#EAB1FF]"
//                       : "bg-black border border-[#121522]"
//                   }`}
//                 >
//                   {step.number}
//                 </div>
//               </div>

//               {/* Content */}
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 custom={0.2}
//                 className={`flex-1 flex ${
//                   step.align === "left"
//                     ? "md:justify-end justify-start"
//                     : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[440px] pt-2 
//       /* Mobile: Default left alignment and margin */
//       ml-[20px] text-left 
      
//       /* Desktop (md): Reset mobile margins and apply logic-based spacing */
//       md:ml-0 
//       ${
//         step.align === "left"
//           ? "md:mr-[30px] md:text-right"
//           : "md:ml-[30px] md:text-left"
//       }`}
//                 >
//                   <h3 className="title-sm mb-4">{step.title}</h3>
//                   <p className="text-base text-gray-400">{step.description}</p>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

