// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import Badge from "@/components/shared/Badge";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     number: "01",
//     title: "Business-Driven Development",
//     description:
//       "We focus on understanding your business goals first. Every solution we build is designed to deliver real value and measurable growth.",
//     align: "right", // এটি এখন আইকনের ডানপাশে বসবে
//   },
//   {
//     number: "02",
//     title: "Clean & Scalable Code",
//     description:
//       "Our development approach ensures your product is easy to maintain, upgrade, and scale as your business grows.",
//     align: "left", // এটি আইকনের বামপাশে বসবে
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

//   useEffect(() => {
//     gsap.fromTo(
//       lineRef.current,
//       { scaleY: 0 },
//       {
//         scaleY: 1,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 25%",
//           end: "bottom 50%",

//           scrub: true,
//         },
//       },
//     );

//     stepRefs.current.forEach((el, index) => {
//       if (!el || index === 0) return;
//       gsap.to(el.querySelector(".step-circle"), {
//         backgroundColor: "#B53BE2",
//         borderColor: "rgba(255, 255, 255, 0.4)",
//         boxShadow: "0px 0px 30px rgba(181, 59, 226, 0.5)",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="bg-black text-white py-24 px-6 overflow-hidden"
//     >
//       <div className="max-w-4xl mx-auto text-center mb-32 flex flex-col items-center gap-6">
//         <Badge>Our Value</Badge>
//         <h2 className="title-lg">
//           How We Build Better <br /> Digital Products
//         </h2>
//         <p className="text-base text-gray-400">
//           At DevFixter, we follow a clear approach to development — <br />
//           focusing on performance, scalability, and real business impact.
//         </p>
//         <PrimaryButton>Start Your Project</PrimaryButton>
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* Central Line */}
//         <div className="absolute left-1/2 -translate-x-1/2 top-[10px] bottom-[32px] w-[2px] bg-white/10 hidden md:block">
//           {/* <div className="absolute left-1/2 -translate-x-1/2 top-[32px] h-[120px] w-[2px] bg-white/10 hidden md:block"> */}
//           <div
//             ref={lineRef}
//             className="w-full h-full origin-top"
//             style={{
//               background:
//                 "linear-gradient(96.18deg, #B53BE2 9.78%, #EAB1FF 96.67%)",
//             }}
//           />
//         </div>

//         <div className="flex flex-col gap-24">
//           {steps.map((step, idx) => (
//             <div
//               key={idx}
//               ref={(el) => {
//                 stepRefs.current[idx] = el;
//               }}
//               className={`relative flex items-start w-full md:justify-center ${
//                 step.align === "right"
//                   ? "md:flex-row text-left"
//                   : "md:flex-row-reverse text-left"
//               }`}
//             >
//               {/* Spacer: Left side blank when card is Right, and vice versa */}
//               <div className="flex-1 hidden md:block"></div>

//               {/* Central Icon */}
//               <div className="relative z-10 shrink-0">
//                 <div
//                   className={`step-circle w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold transition-all duration-700
//                   ${idx === 0 ? "bg-[#B53BE2] shadow-[0px_0px_30px_rgba(181,59,226,0.5)] border-white/40" : "bg-[#0A0A0A]"}`}
//                 >
//                   {step.number}
//                 </div>
//               </div>

//               {/* Content Card: এটি সবসময় আইকনের অপরপাশে থাকবে */}
//               <div className="flex-1 flex justify-start">
//                 <div className={`max-w-[440px] pt-2 md:ml-10 text-left`}>
//                   <h3 className="text-2xl md:text-3xl font-bold mb-3">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/button/PrimaryButton";
import Badge from "@/components/shared/Badge";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 25%",
            end: "bottom 50%",
            scrub: true,

            // 🔥 LINE + ICON SYNC
            onUpdate: (self) => {
              const progress = self.progress;

              stepRefs.current.forEach((el, index) => {
                if (!el) return;

                const triggerPoint = index / (steps.length - 1);
                const circle = el.querySelector(".step-circle") as HTMLElement;

                if (!circle) return;

                if (progress >= triggerPoint) {
                  gsap.to(circle, {
                    backgroundColor: "#B53BE2",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    boxShadow: "0px 0px 30px rgba(181, 59, 226, 0.5)",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                } else {
                  gsap.to(circle, {
                    backgroundColor: "#0A0A0A",
                    borderColor: "rgba(255,255,255,0.1)",
                    boxShadow: "none",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              });
            },
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-32 flex flex-col items-center gap-6">
        <Badge>Our Value</Badge>
        <h2 className="title-lg">
          How We Build Better <br /> Digital Products
        </h2>
        <p className="text-base text-gray-400">
          At DevFixter, we follow a clear approach to development — <br />
          focusing on performance, scalability, and real business impact.
        </p>
        <PrimaryButton>Start Your Project</PrimaryButton>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[10px] bottom-[32px] w-[2px] bg-white/10 hidden md:block">
          <div
            ref={lineRef}
            className="w-full h-full origin-top"
            style={{
              background:
                "linear-gradient(96.18deg, #B53BE2 9.78%, #EAB1FF 96.67%)",
            }}
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-24">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className={`relative flex items-start w-full md:justify-center ${
                step.align === "right"
                  ? "md:flex-row text-left"
                  : "md:flex-row-reverse text-left"
              }`}
            >
              <div className="flex-1 hidden md:block"></div>

              {/* Icon */}
              <div className="relative z-10 shrink-0">
                <div
                  className={`step-circle w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold transition-all duration-500 
                  ${
                    idx === 0
                      ? "bg-[#B53BE2] shadow-[0px_0px_30px_rgba(181,59,226,0.5)] border-white/40"
                      : "bg-[#0A0A0A]"
                  }`}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              {/* <div className="flex-1 flex justify-start">
                <div className="max-w-[440px] pt-2 md:ml-10 text-left"> */}
              <div
                className={`flex-1 flex ${step.align === "left" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[440px] pt-2 
    ${step.align === "left" ? "md:mr-10 text-right" : "md:ml-10 text-left"}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
