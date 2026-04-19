"use client";
import { motion } from "framer-motion";
import innerdiv from "../../../public/home/solveRealProblem/Innerbtn.png";

import React from "react";
import { AiIcon, AiInt, Quntam, SecureImage } from "../svg";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

const SolveRealProblem3rdrow = () => {
  return (
    <div className="h-[704px] max-w-[413px]">
      {/* 1st */}
      <div className="h-[317px] w-[413px]  bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
        <div className="flex gap-2.5 mt-10 items-center justify-center">
          <div
            className="flex items-center justify-center relative"
            style={{
              width: "119px",
              height: "40px",
              borderRadius: "500px",
              padding: "1.5px", // Simulates the border width
              background:
                "linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 14.19%, rgba(181, 59, 226, 0.000025) 50.59%, rgba(181, 59, 226, 0.000025) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)",
            }}
          >
            <button
              className="px-2py-3"
              style={{
                width: "113px",
                height: "34px",
                borderRadius: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                border: "1.5px solid transparent",
                // Combined Backgrounds
                background: `
              linear-gradient(0deg, rgba(181, 59, 226, 0.7), rgba(181, 59, 226, 0.7)),
              linear-gradient(0deg, rgba(181, 59, 226, 0.01), rgba(181, 59, 226, 0.01))
            `,
                // Box Shadows: Outer Glow + Inner Highlight
                boxShadow: `
              0px 32px 24px -16px rgba(9, 48, 239, 0.4),
              inset 0px 0px 8px 0px rgba(248, 248, 248, 0.4)
            `,
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "12px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <AiIcon></AiIcon>
              AI Cognito Pilot{" "}
            </button>
            <div className="absolute left-1/2 -bottom-1">
              <div className="w-[14px] flex items-center justify-center h-[14px] bg-[#B53BE2] rounded-[6px] shadow-[inset_0px_-4px_9px_0px_#EAB1FF] ">
                <span>
                  <AiOutlinePlus className="text-[11px]" />
                </span>
              </div>
            </div>
            <div className="absolute top-[43px] left-[65px]">
              <svg
                width="130"
                height="61"
                viewBox="0 0 130 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0V9.19835C0.5 17.4826 7.21573 24.1983 15.5 24.1983H117.5C124.127 24.1983 129.5 29.5709 129.5 36.1983V61"
                  stroke="url(#paint0_linear_17_228)"
                  strokeOpacity="0.3"
                />

                <motion.path
                  d="M0.5 0V9.19835C0.5 17.4826 7.21573 24.1983 15.5 24.1983H117.5C124.127 24.1983 129.5 29.5709 129.5 36.1983V61"
                  stroke="#EAB1FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.2, 0.2, 0],
                    pathOffset: [0, 0, 1, 1],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <defs>
                  <linearGradient
                    id="paint0_linear_17_228"
                    x1="40.7436"
                    y1="18.1488"
                    x2="96.3472"
                    y2="80.5961"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EAB1FF" />
                    <stop offset="1" stop-color="#187099" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div
            className="flex items-center justify-center relative"
            style={{
              width: "119px",
              height: "40px",
              borderRadius: "500px",
              padding: "1.5px", // Simulates the border width
              background:
                "linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 14.19%, rgba(181, 59, 226, 0.000025) 50.59%, rgba(181, 59, 226, 0.000025) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)",
            }}
          >
            {/* Inner Button (The 113x34 div) */}
            <button
              className="px-2py-3"
              style={{
                width: "113px",
                height: "34px",
                borderRadius: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                border: "1.5px solid transparent",
                // Combined Backgrounds
                background: `
              linear-gradient(0deg, rgba(181, 59, 226, 0.7), rgba(181, 59, 226, 0.7)),
              linear-gradient(0deg, rgba(181, 59, 226, 0.01), rgba(181, 59, 226, 0.01))
            `,
                // Box Shadows: Outer Glow + Inner Highlight
                boxShadow: `
              0px 32px 24px -16px rgba(9, 48, 239, 0.4),
              inset 0px 0px 8px 0px rgba(248, 248, 248, 0.4)
            `,
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "12px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <AiInt></AiInt>
              Ai Inteligence{" "}
            </button>
            <div className="absolute left-1/2 -bottom-1">
              <div className="w-[14px] flex items-center justify-center h-[14px] bg-[#B53BE2] rounded-[6px] shadow-[inset_0px_-4px_9px_0px_#EAB1FF] ">
                <span>
                  <AiOutlinePlus className="text-[11px]" />
                </span>
              </div>
            </div>
            <div className="absolute top-10 left-[65px]">
              <svg
                width="1"
                height="67"
                viewBox="0 0 1 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ১. স্ট্যাটিক বেস লাইন (হালকা ব্যাকগ্রাউন্ড হিসেবে থাকবে) */}
                <line
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="67"
                  stroke="#EAB1FF"
                  strokeOpacity="0.1"
                />

                {/* ২. অ্যানিমেটেড গ্লো লাইন */}
                <motion.line
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="67"
                  stroke="url(#paint0_linear_17_227)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.4, 0.4, 0], // আলোর দৈর্ঘ্য
                    pathOffset: [0, 0, 1, 1], // ওপর থেকে নিচে নামবে
                    opacity: [0, 1, 1, 0], // ফেড ইন/আউট
                  }}
                  transition={{
                    duration: 2.5, // কত দ্রুত নিচে নামবে
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <defs>
                  <linearGradient
                    id="paint0_linear_17_227"
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="67"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EAB1FF" />
                    <stop offset="1" stop-color="#187099" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div
            className="flex items-center justify-center relative"
            style={{
              width: "119px",
              height: "40px",
              borderRadius: "500px",
              padding: "1.5px", // Simulates the border width
              background:
                "linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 14.19%, rgba(181, 59, 226, 0.000025) 50.59%, rgba(181, 59, 226, 0.000025) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)",
            }}
          >
            {/* Inner Button (The 113x34 div) */}
            <button
              className="px-2py-3"
              style={{
                width: "113px",
                height: "34px",
                borderRadius: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                border: "1.5px solid transparent",
                // Combined Backgrounds
                background: `
              linear-gradient(0deg, rgba(181, 59, 226, 0.7), rgba(181, 59, 226, 0.7)),
              linear-gradient(0deg, rgba(181, 59, 226, 0.01), rgba(181, 59, 226, 0.01))
            `,
                // Box Shadows: Outer Glow + Inner Highlight
                boxShadow: `
              0px 32px 24px -16px rgba(9, 48, 239, 0.4),
              inset 0px 0px 8px 0px rgba(248, 248, 248, 0.4)
            `,
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "12px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <Quntam></Quntam>
              Quantum Glimpse{" "}
            </button>
            <div className="absolute left-1/2 -bottom-1">
              <div className="w-[14px] flex items-center justify-center h-[14px] bg-[#B53BE2] rounded-[6px] shadow-[inset_0px_-4px_9px_0px_#EAB1FF] ">
                <span>
                  <AiOutlinePlus className="text-[11px]" />
                </span>
              </div>
            </div>
            <div className="absolute top-11 -left-15">
              <svg
                width="129"
                height="61"
                viewBox="0 0 129 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ১. স্ট্যাটিক মেইন লাইন (ব্যাকগ্রাউন্ড লেয়ার) */}
                <path
                  d="M128.5 0V9.19835C128.5 17.4826 121.784 24.1983 113.5 24.1983H12.5C5.87258 24.1983 0.499994 29.5709 0.499994 36.1983V61"
                  stroke="url(#paint0_linear_17_229)"
                  strokeOpacity="0.2"
                />

                {/* ২. এনিমেটেড আলোর লেয়ার */}
                <motion.path
                  d="M128.5 0V9.19835C128.5 17.4826 121.784 24.1983 113.5 24.1983H12.5C5.87258 24.1983 0.499994 29.5709 0.499994 36.1983V61"
                  stroke="#EAB1FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.2, 0.2, 0], // আলোর দৈর্ঘ্য
                    pathOffset: [0, 0, 1, 1], // পাথের ওপর দিয়ে দৌড়াবে
                    opacity: [0, 1, 1, 0], // আসা এবং যাওয়ার সময় ফেড হবে
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <defs>
                  <linearGradient
                    id="paint0_linear_17_229"
                    x1="88.5684"
                    y1="18.1488"
                    x2="32.9165"
                    y2="80.1659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EAB1FF" />
                    <stop offset="1" stop-color="#187099" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[25px] ml-3">
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[54px] h-[54px] mt-5 flex items-center justify-center rounded-full 
            bg-[#b53be24d] border-[1.5px]
            border-[#B53BE21A] shadow-[0px_32px_24px_-16px_#B53BE266] shadow-[inset_0px_0px_8px_0px_#F8F8F866]"
          >
            <div className="w-[24px] h-[24px] rounded-[8px] border-0 [border-image:linear-gradient(158.39deg,_rgba(181,59,226,0.1)_14.19%,_rgba(181,59,226,0.000025)_50.59%,_rgba(181,59,226,0.000025)_68.79%,_rgba(181,59,226,0.025)_105.18%)_1] bg-[#B53BE2] flex items-center justify-center">
              <Image src={innerdiv} alt="icon" className="w-[12px] h-[12px]" />
            </div>
          </motion.div>
        </div>
        <div className="px-7.5">
          <p className="title-s mt-4 text-white ">Web App Development</p>
          <p className="text-base text-[#82869A] mt-3">
            Interactive and user-friendly web applications for real-world use.
          </p>
        </div>
      </div>

      {/* 2nd */}
      <div className="h-[367px] w-[414px] mt-5 bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
        <div className="px-7.5">
          <p className="title-s mt-4 text-white ">
            Secure Development Practices
          </p>
          <p className="text-base text-[#82869A] mt-3">
            We follow best practices to ensure safe and reliable systems.
          </p>
        </div>

        <div>
          <div
            className="flex items-center justify-center overflow-hidden backdrop-blur-[4px]"
            style={{
              width: "64.9px",
              height: "64.9px",
              borderRadius: "50%", // পারফেক্ট সার্কেলের জন্য
              background: "rgba(181, 59, 226, 0.25)", // হালকা বেগুনি ব্যাকগ্রাউন্ড যা ছবির সাথে মিলবে
              border: "1.32px ",
              // বর্ডার ইমেজ সোর্স সরাসরি স্টাইলে এভাবে দিলে অনেক সময় সমস্যা করে, তাই বর্ডার কালার কন্ট্রোল করা হয়েছে
              borderColor: "rgba(181, 59, 226, 0.2)",
              boxShadow: `
      0px 28.06px 21.05px -14.03px rgba(181, 59, 226, 0.2), 
      inset 0px 0px 7.02px 0px rgba(248, 248, 248, 0.4)
    `,
            }}
          >
            {/* আপনার আইকনটি এখানে */}
            <SecureImage className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveRealProblem3rdrow;
