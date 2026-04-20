"use client";
import { motion } from "framer-motion";
import { fadeDown, fadeUp } from "../../../utils/animation";

import React from "react";
import {
  AiIcon,
  AiInt,
  Blue,
  Quntam,
  Red,
  SecureImage,
  Whitecross,
  WhiteRight,
} from "../svg";

import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

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
            <div className="absolute right-[41px] -bottom-1">
              <div className="w-[14px] flex items-center justify-center h-[14px] bg-[#B53BE2] rounded-[6px] shadow-[inset_0px_-4px_9px_0px_#EAB1FF] ">
                <span>
                  <AiOutlinePlus className="text-[11px]" />
                </span>
              </div>
            </div>
            <div className="absolute top-[43px] left-[70px]">
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
            <div className="absolute right-[42px] -bottom-1">
              <div className="w-[14px] flex items-center justify-center h-[14px] bg-[#B53BE2] rounded-[6px] shadow-[inset_0px_-4px_9px_0px_#EAB1FF] ">
                <span>
                  <AiOutlinePlus className="text-[11px]" />
                </span>
              </div>
            </div>
            <div className="absolute top-10 left-[69px]">
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
        <div className="flex items-center justify-center mt-[25px] ml-6">
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
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_17_150)">
                    <path
                      d="M13.6875 6.94043H13.6904L13.6885 6.94141L13.6914 6.94531H13.6865L9.16211 12.8857L11.0879 6.94531H11.0801L6.5293 1L4.60254 6.94043H4.61133L9.16211 12.8857H6.54004L2.00391 6.94531H2.00098L2.00195 6.94336L2 6.94043H2.00488L6.5293 1H9.15137L13.6875 6.94043Z"
                      fill="url(#paint0_linear_17_150)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_17_150"
                      x="0"
                      y="0"
                      width="15.6914"
                      height="15.8857"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0431373 0 0 0 0 0.0901961 0 0 0 0 0.32549 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_17_150"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_17_150"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_17_150"
                      x1="7.84562"
                      y1="1"
                      x2="7.84562"
                      y2="12.8859"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#EAB1FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeDown}
          className="px-7.5"
        >
          <p className="title-s mt-4 text-white ">Web App Development</p>
          <p className="text-base text-[#82869A] mt-3">
            Interactive and user-friendly web applications for real-world use.
          </p>
        </motion.div>
      </div>

      {/* 2nd */}
      <div className="h-[367px] w-[414px] mt-5 bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          className="px-7.5"
        >
          <p className="title-s mt-4 text-white ">
            Secure Development Practices
          </p>
          <p className="text-base text-[#82869A] mt-3">
            We follow best practices to ensure safe and reliable systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* up */}
          <div className="absolute left-40 top-2">
            {/* left */}
            <svg
              width="43"
              height="118"
              viewBox="0 0 43 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.8153 72.2179L41.5956 72.5974L3.00918 50.251L3.22892 49.8715L3.44867 49.4921L42.0351 71.8385L41.8153 72.2179ZM3.22892 49.8715L2.79044 49.8715L2.79044 0.438574L3.22893 0.438574L3.66741 0.438574L3.6674 49.8715L3.22892 49.8715ZM41.8153 117.588L41.3768 117.588L41.3768 72.2179L41.8153 72.2179L42.2538 72.2179L42.2538 117.588L41.8153 117.588"
                stroke="#1A1A1A"
                strokeWidth="1"
              />

              {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
              <path
                className="continuous-zigzag-light"
                d="M3.22893 0.438574L3.22892 49.8715L41.8153 72.2179L41.8153 117.588"
                stroke="url(#paint0_linear_17_293_bright)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_17_293_bright"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#EAB1FF" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            <style jsx>{`
              .continuous-zigzag-light {
                stroke-dasharray: 30, 150;
                animation: zigzag-flow 2s linear infinite;
              }

              @keyframes zigzag-flow {
                0% {
                  stroke-dashoffset: 180;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
          {/* right */}
          <div className="absolute left-50.5 top-2">
            <svg
              width="43"
              height="125"
              viewBox="0 0 43 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* স্থির ব্যাকগ্রাউন্ড লাইন (আবছা কালো/ধূসর) */}
              <path
                d="M39.0249 0.438477L39.0249 48.6664L0.438512 72.4204L0.438509 124.967"
                stroke="#1A1A1A"
                strokeWidth="1"
                fill="none"
              />

              {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
              <path
                className="continuous-zigzag-reverse"
                d="M39.0249 0.438477L39.0249 48.6664L0.438512 72.4204L0.438509 124.967"
                stroke="url(#paint0_linear_zigzag_fade)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_zigzag_fade"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  {/* ওপরের দিকে একদম অস্পষ্ট */}
                  <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                  {/* ৩০% থেকে শুরু হয়ে নিচে নামলে পুরোপুরি গাড়ো হবে */}
                  <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            <style jsx>{`
              .continuous-zigzag-reverse {
                /* আলোর দৈর্ঘ্য এবং গ্যাপ সেট করা হয়েছে */
                stroke-dasharray: 45, 150;
                animation: zigzag-flow-reverse 2.8s linear infinite;
              }

              @keyframes zigzag-flow-reverse {
                0% {
                  stroke-dashoffset: 200;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
          {/* left arrow  */}
          <div className="absolute left-12 top-22">
            <RiArrowDropLeftLine
              size={15}
              className="thin-arrow"
              style={{ color: "#EAB1FF" }}
            />
          </div>
          {/* red */}
          <div className="absolute left-2 top-20">
            <motion.div
              // ফ্লোটিং এনিমেশন
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className=" flex items-center justify-center overflow-hidden backdrop-blur-[2px]"
              style={{
                width: "40.34px",
                height: "40.34px",
                top: "535.98px",
                left: "334.66px",
                borderRadius: "50%",
                background: "#16021E",
              }}
            >
              <Red></Red>
            </motion.div>
          </div>
          {/* blue */}
          <div className="absolute left-2 top-38">
            <motion.div
              // ফ্লোটিং এনিমেশন
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className=" flex items-center justify-center overflow-hidden backdrop-blur-[2px]"
              style={{
                width: "40.34px",
                height: "40.34px",
                top: "535.98px",
                left: "334.66px",
                borderRadius: "50%",
                background: "#16021E",
              }}
            >
              <Blue></Blue>
            </motion.div>{" "}
          </div>
          {/* white c */}
          <div className="absolute top-20 left-89">
            <motion.div
              // ফ্লোটিং এনিমেশন
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className=" flex items-center justify-center overflow-hidden backdrop-blur-[2px]"
              style={{
                width: "40.34px",
                height: "40.34px",
                top: "535.98px",
                left: "334.66px",
                borderRadius: "50%",
                background: "#16021E",
              }}
            >
              <Whitecross></Whitecross>
            </motion.div>{" "}
          </div>
          {/* white r */}
          <div className="absolute top-38 left-88">
            <motion.div
              // ফ্লোটিং এনিমেশন
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className=" flex items-center justify-center overflow-hidden backdrop-blur-[2px]"
              style={{
                width: "40.34px",
                height: "40.34px",
                top: "535.98px",
                left: "334.66px",
                borderRadius: "50%",
                background: "#16021E",
              }}
            >
              <WhiteRight></WhiteRight>
            </motion.div>{" "}
          </div>
          {/* left arrow */}
          <div className="absolute left-12 top-[165px]">
            <RiArrowDropLeftLine
              size={15}
              className="thin-arrow"
              style={{ color: "#EAB1FF" }}
            />
          </div>
          {/* right arrow  */}

          <div className="absolute left-85 top-[165px]">
            <RiArrowDropRightLine
              size={15}
              className="thin-arrow"
              style={{ color: "#EAB1FF" }}
            />
          </div>
          {/* right arrow  */}
          <div className="absolute left-85 top-[88px]">
            <RiArrowDropRightLine
              size={15}
              className="thin-arrow"
              style={{ color: "#EAB1FF" }}
            />
          </div>
          <div className="absolute left-14 top-23">
            <svg
              width="125"
              height="43"
              viewBox="0 0 125 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* স্থির ব্যাকগ্রাউন্ড লাইন */}
              <path
                d="M0.438477 3.229H48.6664L72.4204 41.8154H124.967"
                stroke="#1A1A1A"
                strokeWidth="1"
                fill="none"
              />

              {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
              <path
                className="horizontal-zigzag-glow"
                d="M0.438477 3.229H48.6664L72.4204 41.8154H124.967"
                stroke="url(#paint_horizontal_fade)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="paint_horizontal_fade"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  {/* বাম দিকে অস্পষ্ট */}
                  <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                  {/* ডান দিকে উজ্জ্বল */}
                  <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            <style jsx>{`
              .horizontal-zigzag-glow {
                /* আলোর দৈর্ঘ্য এবং গ্যাপ */
                stroke-dasharray: 40, 160;
                animation: horizontal-flow 3s linear infinite;
              }

              @keyframes horizontal-flow {
                0% {
                  stroke-dashoffset: 200;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
          {/* left down------- */}
          <div className="absolute left-14 top-[134px]">
            <svg
              width="118"
              height="43"
              viewBox="0 0 118 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* স্থির ব্যাকগ্রাউন্ড লাইন - ডিজাইনের গভীরতা বাড়াতে */}
              <path
                d="M117.588 0.438477H72.2178L49.8714 39.0249H0.438454"
                stroke="#1A1A1A"
                strokeWidth="1"
                fill="none"
              />

              {/* অনবরত দৌড়াতে থাকা উজ্জ্বল আলোর লাইন */}
              <path
                className="horizontal-zigzag-last"
                d="M117.588 0.438477H72.2178L49.8714 39.0249H0.438454"
                stroke="url(#paint_horizontal_fade_last)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="paint_horizontal_fade_last"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  {/* ডান দিক থেকে অস্পষ্ট শুরু হবে */}
                  <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                  {/* বাম দিকে যেতে যেতে গাড়ো হবে */}
                  <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            <style jsx>{`
              .horizontal-zigzag-last {
                /* আলোর দৈর্ঘ্য এবং গ্যাপ - ৩য় সারির সাথে সামঞ্জস্য রেখে */
                stroke-dasharray: 35, 150;
                animation: horizontal-flow-last 2.8s linear infinite;
              }

              @keyframes horizontal-flow-last {
                0% {
                  stroke-dashoffset: 185;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
          {/* div right up  */}
          <div className="absolute top-23 left-[224px]">
            <svg
              width="124"
              height="43"
              viewBox="0 0 124 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* স্থির ব্যাকগ্রাউন্ড লাইন */}
              <path
                d="M122.775 3.229H75.2263L51.8068 41.8154H0"
                stroke="#1A1A1A"
                strokeWidth="1"
                fill="none"
              />

              {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
              <path
                className="horizontal-zigzag-reverse-flow"
                d="M122.775 3.229H75.2263L51.8068 41.8154H0"
                stroke="url(#paint_horizontal_fade_rev)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="paint_horizontal_fade_rev"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  {/* ডান দিকে অস্পষ্ট */}
                  <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                  {/* বাম দিকে গাড়ো/উজ্জ্বল */}
                  <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            <style jsx>{`
              .horizontal-zigzag-reverse-flow {
                /* আলোর সাইজ এবং গ্যাপ */
                stroke-dasharray: 40, 160;
                animation: horizontal-reverse-flow 3s linear infinite;
              }

              @keyframes horizontal-reverse-flow {
                0% {
                  /* ডান থেকে বামে ফ্লো করার জন্য পজিটিভ অফসেট */
                  stroke-dashoffset: 0;
                }
                100% {
                  stroke-dashoffset: 200;
                }
              }
            `}</style>
          </div>
          {/* right down */}
          <div className="absolute top-[133px] left-[231px]">
            <svg
              width="117"
              height="43"
              viewBox="0 0 117 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* স্থির ব্যাকগ্রাউন্ড লাইন */}
              <path
                d="M0 0.438477H44.8316L66.9128 39.0249H115.759"
                stroke="#1A1A1A"
                strokeWidth="1"
                fill="none"
              />

              {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
              <path
                className="horizontal-zigzag-glow-alt"
                d="M0 0.438477H44.8316L66.9128 39.0249H115.759"
                stroke="url(#paint_horizontal_fade_alt)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="paint_horizontal_fade_alt"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  {/* বাম দিকে অস্পষ্ট শুরু হবে */}
                  <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                  {/* ডান দিকে যেতে যেতে উজ্জ্বল হবে */}
                  <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            <style jsx>{`
              .horizontal-zigzag-glow-alt {
                /* আলোর দৈর্ঘ্য এবং গ্যাপ */
                stroke-dasharray: 40, 150;
                animation: flow-right 2.8s linear infinite;
              }

              @keyframes flow-right {
                0% {
                  stroke-dashoffset: 190;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
          {/* btn */}
          <div
            className="flex z-55 absolute top-[100px] left-[170px] items-center justify-center overflow-hidden backdrop-blur-[4px] moving-bubble"
            style={{
              width: "64.9px",
              height: "64.9px",
              borderRadius: "50%",
              background: "rgba(181, 59, 226, 0.25)",
              border: "1.32px", // আপনার দেওয়া আগের ভ্যালু
              borderColor: "rgba(181, 59, 226, 0.2)",
              boxShadow: `
      0px 28.06px 21.05px -14.03px rgba(181, 59, 226, 0.1), 
      inset 0px 0px 7.02px 0px rgba(248, 248, 248, 0.4)
    `,
            }}
          >
            <SecureImage className="w-[24px] h-[24px]" />

            <style jsx>{`
              .moving-bubble {
                animation: move 4s ease-in-out infinite;
              }

              @keyframes move {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                } /* শুধু একটু ওপর-নিচ করবে */
              }
            `}</style>
          </div>
          {/* down */}
          <div>
            {/* left */}
            <div className="absolute left-40 top-32 z-10">
              <svg
                width="43"
                height="111"
                viewBox="0 0 43 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* স্থির ব্যাকগ্রাউন্ড লাইন */}
                <path
                  d="M41.8153 0L41.8153 54.3413L3.22892 81.1064L3.22892 110.314"
                  stroke="#1A1A1A"
                  strokeWidth="1"
                  fill="none"
                />

                {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
                <path
                  className="continuous-zigzag-down"
                  d="M41.8153 0L41.8153 54.3413L3.22892 81.1064L3.22892 110.314"
                  stroke="url(#paint_linear_zigzag_fade_3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />

                <defs>
                  <linearGradient
                    id="paint_linear_zigzag_fade_3"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    {/* ওপরের অংশ অস্পষ্ট */}
                    <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                    {/* নিচে নামলে গাড়ো হবে */}
                    <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>

              <style jsx>{`
                .continuous-zigzag-down {
                  /* আলোর সাইজ ৩০ এবং গ্যাপ ১২০ পিক্সেল */
                  stroke-dasharray: 30, 120;
                  animation: zigzag-flow-down 2.2s linear infinite;
                }

                @keyframes zigzag-flow-down {
                  0% {
                    stroke-dashoffset: 150;
                  }
                  100% {
                    stroke-dashoffset: 0;
                  }
                }
              `}</style>
            </div>
            {/* right */}
            <div className="absolute top-32 left-50.5">
              <svg
                width="43"
                height="112"
                viewBox="0 0 43 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* স্থির ব্যাকগ্রাউন্ড লাইন */}
                <path
                  d="M0.438477 0L0.438479 54.3413L39.0249 81.1064L39.0249 111.314"
                  stroke="#1A1A1A"
                  strokeWidth="1"
                  fill="none"
                />

                {/* অনবরত দৌড়াতে থাকা আলোর লাইন */}
                <path
                  className="continuous-zigzag-left-down"
                  d="M0.438477 0L0.438479 54.3413L39.0249 81.1064L39.0249 111.314"
                  stroke="url(#paint_linear_zigzag_left_fade)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />

                <defs>
                  <linearGradient
                    id="paint_linear_zigzag_left_fade"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    {/* ওপরের অংশ অস্পষ্ট */}
                    <stop offset="0%" stopColor="#EAB1FF" stopOpacity="0" />
                    {/* নিচে নামলে গাড়ো হবে */}
                    <stop offset="100%" stopColor="#EAB1FF" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>

              <style jsx>{`
                .continuous-zigzag-left-down {
                  /* আলোর সাইজ এবং গ্যাপ */
                  stroke-dasharray: 35, 130;
                  animation: zigzag-left-flow 2.4s linear infinite;
                }

                @keyframes zigzag-left-flow {
                  0% {
                    stroke-dashoffset: 165;
                  }
                  100% {
                    stroke-dashoffset: 0;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveRealProblem3rdrow;


