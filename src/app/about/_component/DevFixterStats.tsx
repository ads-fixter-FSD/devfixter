"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const icon1 = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_139_642)">
      <path
        d="M12 0H8V6.0316C7.98315 7.1217 7.09425 8 6.00025 8H0V12H4.34314C5.404 12 6.42145 11.5786 7.17155 10.8285L10.8285 7.17155C11.5786 6.42145 12 5.404 12 4.34314V0Z"
        fill="white"
      />
      <path
        d="M8 20H12V13.9684C12.0168 12.8783 12.9058 12 13.9998 12H20V8H15.6568C14.596 8 13.5786 8.42145 12.8285 9.17155L9.17155 12.8285C8.42145 13.5786 8 14.596 8 15.6568V20Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_139_642">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const icon2 = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_139_632)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7779 5.84265C11.9556 5.29325 10.9889 5 10 5V0C11.9778 0 13.9112 0.58649 15.5557 1.6853C17.2002 2.78411 18.4819 4.34591 19.2388 6.17315C19.9956 8.0004 20.1937 10.0111 19.8078 11.9509C19.422 13.8907 18.4696 15.6726 17.0711 17.0711C15.6726 18.4696 13.8907 19.422 11.9509 19.8078C10.0111 20.1937 8.0004 19.9956 6.17315 19.2388C4.34591 18.4819 2.78411 17.2002 1.6853 15.5557C0.58649 13.9112 0 11.9778 0 10H5C5 10.9889 5.29325 11.9556 5.84265 12.7779C6.39205 13.6001 7.17295 14.2409 8.0866 14.6194C9.0002 14.9979 10.0055 15.0969 10.9754 14.9039C11.9453 14.711 12.8363 14.2348 13.5356 13.5356C14.2348 12.8363 14.711 11.9453 14.9039 10.9754C15.0969 10.0055 14.9979 9.0002 14.6194 8.0866C14.2409 7.17295 13.6001 6.39205 12.7779 5.84265Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 2.16563e-06C5 0.656612 4.87067 1.30679 4.6194 1.91342C4.36812 2.52005 3.99983 3.07124 3.53553 3.53554C3.07124 3.99983 2.52005 4.36813 1.91342 4.6194C1.30679 4.87067 0.656608 5 2.18555e-07 5L0 10C1.31322 10 2.61358 9.74135 3.82684 9.2388C5.0401 8.73625 6.1425 7.99965 7.07105 7.07105C7.99965 6.1425 8.73625 5.0401 9.2388 3.82684C9.74135 2.61358 10 1.31322 10 0L5 2.16563e-06Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_139_632">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const DevFixterStats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the right side cards
      gsap.from(".stats-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Subtle pulse for the center logo
      gsap.to(".center-logo", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 overflow-hidden">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* Left Side: Visual Node Network */}
        <div className="relative h-[400px] md:h-[550px] w-full flex items-center justify-center overflow-hidden border border-amber-300">
          {/* Central Logo Node - Responsive Size */}
          <div className="center-logo relative z-20 w-16 h-16 md:w-24 md:h-24 bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(169,48,239,0.4)]">
            <span className="text-2xl md:text-4xl font-bold italic text-white">
              d
            </span>
          </div>

          {/* --- LEFT SIDE: API Integration Node --- */}
          <div className="absolute top-[50%] left-[10%] md:top-[53%] md:left-[15%] flex flex-col items-center origin-left scale-75 md:scale-100 z-10">
            <div className="relative">
              {/* 2. API Integration Card  */}
              <div className="absolute top-25 -left-8 bg-card  px-[10px] py-1.5 rounded-[6px]  z-20  flex items-center gap-2 whitespace-nowrap">
                {/* Icon Section (Exact Style: 38x38 with Inset Shadow) */}
                <div
                  className="w-[38px] h-[38px] rounded-[6px] flex items-center justify-center text-white text-lg font-bold"
                  style={{
                    background: "#B53BE2",
                    boxShadow: "0px -4px 20px 0px #EAB1FF inset",
                  }}
                >
                  {/* Tumi ekhane API ba Connectivity icon use korte paro */}
                  <span>{icon2}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] md:text-[11px] text-white font-semibold">
                    API Integration
                  </span>
                  <span className="text-[8px] text-muted-foreground leading-none">
                    Seamless connectivity
                  </span>
                </div>
              </div>

              {/* 3. SVG Animation Section (Tomar deya 168x105 path) */}
              <div className="relative z-10">
                <svg width="168" height="105" viewBox="0 0 168 105" fill="none">
                  {/* Static Background Path */}
                  <path
                    d="M0.5 105V79.5C0.5 75.0817 4.08172 71.5 8.5 71.5H22C26.4183 71.5 30 67.9183 30 63.5V6.5C30 3.18629 32.6863 0.5 36 0.5H168"
                    stroke="#374151"
                    strokeWidth="1.5"
                    className="opacity-30"
                  />

                  {/* Animated Drawing Path */}
                  <motion.path
                    d="M0.5 105V79.5C0.5 75.0817 4.08172 71.5 8.5 71.5H22C26.4183 71.5 30 67.9183 30 63.5V6.5C30 3.18629 32.6863 0.5 36 0.5H168"
                    stroke="url(#paint_api_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1],
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="paint_api_linear"
                      x1="38.5"
                      y1="-33"
                      x2="144.738"
                      y2="58.7496"
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

          {/* --- TOP LEFT: Custom Development Node --- */}
          <div className="absolute top-[29%] left-[11%] md:top-[27%] md:left-[22%] flex flex-col items-center origin-top scale-75 md:scale-100 z-10">
            <div className="relative flex flex-col items-center">
              {/* 2. Custom Development Card */}
              <div className="absolute -top-10 -left-14 md:-left-20 bg-card px-[10px] py-1.5 rounded-[6px] z-20 shadow-2xl flex items-center gap-2 whitespace-nowrap">
                {/* Icon Container with Updated Style */}
                <div
                  className="w-[38px] h-[38px] rounded-[6px] flex items-center justify-center text-white text-lg font-bold transition-all duration-500"
                  style={{
                    background: "#B53BE2",
                    boxShadow: "0px -4px 20px 0px #EAB1FF inset",
                    opacity: 1,
                  }}
                >
                  {/* Angle 0 deg mane normal straight icon */}
                  <span>{icon1}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px]  text-white font-medium">
                    Custom Development
                  </span>
                  <span className="text-[8px] ftext-color leading-none">
                    Scalable web solutions
                  </span>
                </div>
              </div>

              {/* 3. SVG Animation Section */}
              <div className="relative z-10">
                <svg width="139" height="80" viewBox="0 0 139 72" fill="none">
                  <path
                    d="M0.5 0V20.5C0.5 27.1274 5.87258 32.5 12.5 32.5H126C132.627 32.5 138 37.8726 138 44.5V71.5"
                    stroke="#374151"
                    strokeWidth="1.5"
                    className="opacity-30"
                  />

                  <motion.path
                    d="M0.5 0V20.5C0.5 27.1274 5.87258 32.5 12.5 32.5H126C132.627 32.5 138 37.8726 138 44.5V71.5"
                    stroke="url(#paint0_linear_139_619)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1],
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear_139_619"
                      x1="20"
                      y1="-39"
                      x2="101.934"
                      y2="30.8882"
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

          {/* --- TOP CENTER: Access Your Workspace Node --- */}
          <div className="absolute top-[3%] left-[35%] md:top-[13%] md:left-[41%] flex flex-col items-center origin-bottom scale-75 md:scale-100 z-10">
            <div className="relative flex flex-col items-center">
              {/* 1. Access Your Workspace Card */}

              <div className=" bg-card flex items-center  px-[10px] py-1.5 rounded-[6px]  z-20 ">
                <span className="text-[10px]  ftext-color  whitespace-nowrap">
                  Access your workspace
                </span>
              </div>

              {/* 2. SVG Animation Section */}
              <div className="relative z-10">
                <svg width="31" height="129" viewBox="0 0 31 129" fill="none">
                  {/* Background Gray Path (Static) */}
                  <path
                    d="M0.5 129V51C0.5 47.6863 3.18629 45 6.5 45H24C27.3137 45 30 42.3137 30 39V0"
                    stroke="#374151"
                    strokeWidth="1.5"
                    className="opacity-30"
                  />

                  {/* Infinite Animated Line (Drawing towards the card) */}
                  <motion.path
                    d="M0.5 129V51C0.5 47.6863 3.18629 45 6.5 45H24C27.3137 45 30 42.3137 30 39V0"
                    stroke="url(#paint_workspace_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1],
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="paint_workspace_linear"
                      x1="7.19254"
                      y1="-41.3541"
                      x2="39.3698"
                      y2="-37.3894"
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

          {/* --- TOP RIGHT: Web Applications Node --- */}
          <div className="absolute top-[20%] right-[25%] md:top-30 md:right-[30%] flex flex-col items-start origin-top-right scale-75 md:scale-100 z-10">
            <div className="relative">
              {/* 1. User Profile Pic */}
              <div className="absolute -top-4 left-[66px] z-30">
                <div className="w-8 h-8 rounded-full border-2 border-primary/50 overflow-hidden bg-gray-800 shadow-lg">
                  <img
                    src="https://i.pravatar.cc/30?img=5"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 2. Web Apps Card */}
              <div className="absolute  top-8 left-5 bg-card w-[150px] h-[52px] rounded-[6px] my-box z-20 shadow-2xl flex flex-col justify-center px-[10px]">
                <h4 className="text-sm">Web Applications</h4>
                <p className="text-[10px] ftext-color leading-tight">
                  high-performance
                </p>
              </div>

              {/* 3. SVG Animation Section */}
              <div className="relative z-10">
                <svg width="83" height="142" viewBox="0 0 83 142" fill="none">
                  {/* Background Gray Line: Jate path-ti bojha jay kothay color jabe */}
                  <path
                    d="M0 141H70.5C77.1274 141 82.5 135.627 82.5 129V0"
                    stroke="#374151" // Gray color (Tailwind gray-700 moto)
                    strokeWidth="1.5"
                    className="opacity-30"
                  />

                  {/* Animated Color Line: Eta gray line-er upore infinite vabe cholbe */}
                  <motion.path
                    d="M0 141H70.5C77.1274 141 82.5 135.627 82.5 129V0"
                    stroke="url(#paint0_linear_139_623)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1], // PathLength 0 theke 1 e jabe
                      opacity: [0, 1, 1, 0], // Fade in and Fade out effect
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1], // Animation timing for smooth fade
                    }}
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
                      <stop stopColor="#187099" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#EAB1FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* --- BOTTOM RIGHT: Returning User --- */}
          <div className="absolute bottom-[24%] right-[16%] md:bottom-33 md:right-34 flex flex-col items-center origin-bottom-right scale-75 md:scale-100 z-10">
            <div className="relative">
              {/* 1. User Profile Pic (Vertical Line-er shesh mathay) */}

              <div className="absolute top-[110px] left-[101px] z-30">
                <div className="w-8 h-8 rounded-full border-2 border-primary/50 overflow-hidden bg-gray-800 shadow-lg">
                  <img
                    src="https://i.pravatar.cc/30?img=12"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 2. Returning User Card (Avatar-er thik upore line-er sathe attached) */}
              <div className="absolute flex items-center top-[55px] left-[55px] bg-card  px-[10px] py-1.5 rounded-[6px]  z-20 shadow-2xl  text-center">
                <span className="text-[10px] ftext-color whitespace-nowrap">
                  Returning user
                </span>
              </div>

              {/* 3. SVG Animation Section */}
              <div className="relative z-10">
                <svg width="118" height="122" viewBox="0 0 118 122" fill="none">
                  {/* Background Gray Path (Static) */}
                  <path
                    d="M0 0.5H105C111.627 0.5 117 5.87258 117 12.5V121.5"
                    stroke="#374151"
                    strokeWidth="1.5"
                    className="opacity-30"
                  />

                  {/* Infinite Animated Line (Drawing towards the avatar) */}
                  <motion.path
                    d="M0 0.5H105C111.627 0.5 117 5.87258 117 12.5V121.5"
                    stroke="url(#paint0_linear_139_621)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1],
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear_139_621"
                      x1="26.5433"
                      y1="-38.2895"
                      x2="128.441"
                      y2="14.7979"
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
        </div>

        {/* ========================= Right Side: Stats Grid ============== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="stats-card bg-card p-8 rounded-3xl my-box hover:bg-[#1f2335] transition-colors">
            <h2 className="title-lg mb-2">50+</h2>
            <p className="text-base font-medium mb-4">Projects Completed</p>
            <p className="text-sm text-muted">
              We've successfully delivered websites, web apps, and custom
              solutions for startups and businesses.
            </p>
          </div>

          {/* Card 2 */}
          <div className="stats-card bg-card p-8 rounded-3xl my-box hover:bg-[#1f2335] transition-colors">
            <h2 className="title-lg mb-2">100+</h2>
            <p className="text-base font-medium mb-4">Clients Served</p>
            <p className="text-sm text-muted">
              Helping businesses worldwide build, launch, and scale their
              digital products.
            </p>
          </div>

          {/* Card 3 */}
          <div className="stats-card bg-card p-8 rounded-3xl my-box hover:bg-[#1f2335] transition-colors">
            <h2 className="title-lg mb-2">5+</h2>
            <p className="text-base font-medium mb-4">Years of Experience</p>
            <p className="text-sm text-muted">
              Our team brings hands-on experience in modern development
              technologies and scalable systems.
            </p>
          </div>

          {/* Card 4 */}
          <div className="stats-card bg-card p-8 rounded-3xl my-box hover:bg-[#1f2335] transition-colors">
            <h2 className="title-lg mb-2">99%</h2>
            <p className="text-base font-medium mb-4">Client Satisfaction</p>
            <p className="text-sm text-muted">
              We focus on quality, performance, and long-term client
              relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevFixterStats;
