/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Badge from "../shared/Badge";
import PrimaryButton from "../button/PrimaryButton";
import {
  DiMongodb,
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiDocker,
} from "react-icons/di";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animation";

const Integrations = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section
      className="w-full max-w-[1280px] h-auto mb-28 md:h-[797px] mx-auto relative flex flex-col items-center overflow-hidden"
      style={{
        borderRadius: "30px",
        background: "linear-gradient(180deg, #000000 21.71%, #0F121F 81.78%)",
      }}
    >
      {/* Header Section */}
      <motion.div
      // 
        variants={fadeUp}
        initial="hidden"
        whileInView={"visible"}
        custom={0.3}
        viewport={{ once: false }}
        className="flex flex-col items-center text-center mt-[80px] z-20"
      >
        <Badge className="mb-6">Integrations</Badge>
        <h2 className="text-white title-lg leading-[1.1] mb-6">
          Works Seamlessly With <br /> Modern Technologies
        </h2>
        <p className="text-[#b5bde2] text-base max-w-[490px] mb-10 leading-[1.5]">
          We build and integrate with the latest tools, frameworks, and
          platforms to ensure your product is fast, scalable, and future-ready.
        </p>
        <PrimaryButton icon={<FiArrowRight />} className="text-[16px]">
          Start Your Project
        </PrimaryButton>
      </motion.div>

      {/* --- Icons Container --- */}
      <div className="relative w-full max-w-[1100px] h-[350px] mt-[40px]">
        
        {/* Center Logo - ৫ সেকেন্ড ডিউরেশন দিয়ে স্লো করা হয়েছে */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[140px] md:top-[125px] left-1/2 -translate-x-1/2 w-[60px] md:w-[100px] h-[60px] md:h-[100px] z-30 flex items-center justify-center bg-[#b53be2b3] backdrop-blur-xl rounded-[12px] md:rounded-[20px] shadow-[inset_0_0_20px_rgba(248,248,248,0.4)]"
        >
          <Image
            src={"/logo.png"}
            width={31}
            height={31}
            alt="logo"
            priority
            className="w-[20px] md:w-[31px] h-[20px] md:h-[31px]"
          />
        </motion.div>

        {/* --- আইকনগুলোর পজিশনিং ঠিক রেখে ডিলে যোগ করা হয়েছে --- */}
        <div className="absolute top-[82px] left-[4px] md:top-[60px] md:left-[100px] z-20">
          <TechIcon icon={<DiMongodb />} delay={0} />
          <div className="absolute -z-10 top-[5px] md:top-[24px] left-[4px] md:left-[60px] w-[160px] h-[100px] md:w-[260px] md:h-[100px] pointer-events-none">
            <Image
              src="/home/integration/vector3.png"
              fill
              alt="line"
              className="object-contain"
            />
          </div>
        </div>

{/* left-2 */}
        <div className="absolute top-[120px] left-[80px] md:top-[100px] md:left-[260px] z-20">
          <TechIcon icon={<DiMysql/>} delay={1} />
        </div>
{/* left-3 */}
        <div className="absolute top-[150px] md:top-[145px] left-[10px] md:left-[100px] z-20">
          <TechIcon icon={<SiExpress />} delay={0.5} />
          <div className="absolute top-[20px] md:top-[30px] left-[30px] md:left-[60px] w-[180px] md:w-[340px] h-[2px] -z-20 pointer-events-none bg-gradient-to-r from-[#0930EF]/70 to-[#27BBFF]" />
        </div>
        {/* left-4 */}

        <div className="absolute bottom-[85px] md:bottom-[20px] left-[8px] md:left-[180px] z-20">
          <TechIcon icon={<DiReact />} delay={1.5} />
          <div className="absolute -z-10 left-[40px] bottom-[8px] md:bottom-[55px] md:-left-[40px] w-[120px] h-[80px] md:w-[380px] md:h-[100px] pointer-events-none">
            <Image src="/home/integration/vector4.png" fill alt="line" className="object-contain" />
          </div>
        </div>

        {/* --- RIGHT SIDE --- */}
        {/* tight-1 */}
        <div className="absolute top-[80px] right-[4px] md:top-[44px] md:right-[108px] z-20">
          <TechIcon icon={<DiNodejsSmall />} delay={0.3} />
          <div className="absolute right-[2px] -top-[0px] md:top-[30px]  md:right-[60px] -z-10 w-[160px] md:w-[250px] h-[100px] md:h-[120px] pointer-events-none">
            <Image
              src="/home/integration/vector1.png"
              fill
              alt="line"
              className="object-contain"
            />
          </div>
        </div>

{/* right-2 */}
        <div className="absolute right-[80px] top-[110px] md:top-[100px] md:right-[260px] z-20">
          <TechIcon icon={<DiDocker />} delay={0.8} />
        </div>

{/* right-3 */}
        <div className="absolute top-[150px] md:top-[145px] right-[10px] md:right-[100px] z-20">
          <TechIcon icon={<SiNextdotjs />} delay={1.2} />
          <div className="absolute top-[20px] md:top-[30px] right-[20px] md:right-[60px] w-[140px] md:w-[340px] h-[2px] -z-20 pointer-events-none bg-gradient-to-l from-[#0930EF]/70 to-[#27BBFF]" />
        </div>

        <div className="absolute right-[8px] bottom-[83px] md:bottom-[10px] md:right-[170px] z-20">
          <TechIcon icon={<SiTailwindcss />} delay={1.7} />
          <div className="absolute right-[38px] bottom-[8px] md:bottom-[55px] md:-right-[40px] w-[120px] h-[80px] md:w-[380px] -z-10 md:h-[110px] pointer-events-none">
            <Image src="/home/integration/vector2.png" fill alt="line" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};
// 
const TechIcon = ({
  icon,
  delay = 0,
}: {
  icon: React.ReactNode;
  delay?: number;
  // 
}) => (
  <motion.div
    // animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    whileHover={{ scale: 1.1 }}
    className="relative flex items-center justify-center text-white w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[10px] bg-[#B53BE2] shadow-[inset_0px_-4px_19px_0px_#EAB1FF,0px_0px_20px_rgba(181,59,226,0.4)] cursor-pointer"
  >
    <div className="flex items-center justify-center w-[20px] h-[20px] md:w-[25px] md:h-[24px] text-2xl">
      {icon}
    </div>
  </motion.div>
);

export default Integrations;
