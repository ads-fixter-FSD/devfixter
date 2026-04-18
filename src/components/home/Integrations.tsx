"use client";
import React from "react";
import Image from "next/image";
import Badge from "../shared/Badge";
import PrimaryButton from "../button/PrimaryButton";

const Integrations = () => {
  return (
    <section
      className="mx-auto relative flex flex-col items-center overflow-hidden"
      style={{
        width: "1280px",
        height: "797px",
        borderRadius: "30px",
        background: "linear-gradient(180deg, #000000 21.71%, #0F121F 81.78%)",
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mt-[80px] z-20">
        <Badge className="mb-6">Integrations</Badge>
        <h2 className="text-white text-[56px] font-medium leading-[1.1] mb-6">
          Works Seamlessly With <br /> Modern Technologies
        </h2>
        <p className="text-[#9B9EA8] text-[16px] max-w-[540px] mb-10 leading-[1.5]">
          We build and integrate with the latest tools, frameworks, and platforms
          to ensure your product is fast, scalable, and future-ready.
        </p>
        <PrimaryButton className="!h-[52px] !px-10 !rounded-xl text-[16px]">
          Start Your Project →
        </PrimaryButton>
      </div>

      {/* --- Icons & SVG Container --- */}
      <div className="relative w-full max-w-[1100px] h-[350px] mt-[40px]">
        
        {/* --- Center Main Logo --- */}
        <div
          className="absolute z-30 flex items-center justify-center"
          style={{
            width: "100px",
            height: "100px",
            top: "125px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "20px",
            background: "rgba(181, 59, 226, 0.05)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid",
            borderImageSource: "linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 14.19%, rgba(181, 59, 226, 0) 50.59%, rgba(181, 59, 226, 0) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)",
          }}
        >
          <div className="relative w-12 h-12">
            <Image src="/logo-icon.png" fill alt="Main Logo" className="object-contain" />
          </div>
        </div>

        {/* --- LEFT SIDE ICONS & SVG LINES --- */}
        
        {/* Top Left (MongoDB) */}
        <div className="absolute top-[46px] left-[80px] z-20">
          <TechIcon src="/icons/mongodb.png" />
          <div className="absolute -z-5 top-[35px] left-[60px] w-[280px] h-[100px]">
            <Image src="/home/integration/vector3.png" fill alt="line" className="object-contain " />
          </div>
        </div>

        {/* Mid Left (Express) */}
        <div className="absolute top-[145px] left-[100px] z-20">
          <TechIcon src="/icons/express.png" />
          <div className="absolute top-[30px] left-[60px] w-[340px] h-[2px]">
             <div className="w-full h-full bg-gradient-to-r from-[#0930EF]/70 to-[#27BBFF]" />
          </div>
        </div>

        {/* Bottom Left (React) */}
        <div className="absolute bottom-[20px] left-[180px] z-20">
          <TechIcon src="/icons/react.png" />
          <div className="absolute -z-5 bottom-[50px] -left-[40px] w-[380px] h-[100px]">
            <Image src="/home/integration/vector4.png" fill alt="line" className="object-contain " />
          </div>
        </div>

        {/* --- RIGHT SIDE ICONS & SVG LINES --- */}

        {/* Top Right (Node.js) */}
        <div className="absolute top-[20px] right-[180px] z-20">
          <TechIcon src="/icons/nodejs.png" />
          <div className="absolute top-[35px] right-[60px] w-[220px] h-[80px]">
            <Image src="/vectors/Vector 3048.png" fill alt="line" className="object-contain opacity-50" />
          </div>
        </div>

        {/* Mid Right (Next.js) */}
        <div className="absolute top-[145px] right-[100px] z-20">
          <TechIcon src="/icons/nextjs.png" />
          <div className="absolute top-[30px] right-[60px] w-[340px] h-[2px]">
             <div className="w-full h-full bg-gradient-to-l from-[#0930EF]/70 to-[#27BBFF]" />
          </div>
        </div>

        {/* Bottom Right (Tailwind) */}
        <div className="absolute bottom-[20px] right-[180px] z-20">
          <TechIcon src="/icons/tailwind.png" />
          <div className="absolute bottom-[35px] right-[60px] w-[220px] h-[80px]">
            <Image src="/vectors/Vector 3044.png" fill alt="line" className="object-contain opacity-50" />
          </div>
        </div>

      </div>
    </section>
  );
};

// Reusable Tech Icon Component
const TechIcon = ({ src }: { src: string }) => (
  <div
    className="relative flex items-center justify-center"
    style={{
      width: "64px",
      height: "64px",
      borderRadius: "12px",
      background: "#B53BE2",
      boxShadow: "inset 0px -4px 19px 0px #EAB1FF, 0px 0px 20px rgba(181, 59, 226, 0.4)",
    }}
  >
    <div className="relative w-8 h-8">
      <Image src={src} fill alt="tech" className="object-contain" />
    </div>
  </div>
);

export default Integrations;