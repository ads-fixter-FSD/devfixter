"use client";
import React from "react";
import innerdiv from "../../../public/home/solveRealProblem/Innerbtn.png";
import p1 from "../../../public/home/solveRealProblem/p1.png";
import p2 from "../../../public/home/solveRealProblem/p2.png";
import p3 from "../../../public/home/solveRealProblem/p3.png";
import p4 from "../../../public/home/solveRealProblem/p4.png";

import loading from "../../../public/home/solveRealProblem/loading.png";
import lockMain from "../../../public/home/solveRealProblem/lock.png";
import pointer from "../../../public/home/solveRealProblem/pointer.png";
import pen from "../../../public/home/solveRealProblem/pen.png";
import alfonso from "../../../public/home/solveRealProblem/pointerwithname.png";
import vendaike from "../../../public/home/solveRealProblem/blue.png";
import Image from "next/image";
import { motion } from "framer-motion";
import SolveRealProblem3rdrow from "./SolveRealProblem3rdrow";
import { fadeDown, fadeUp } from "../../../utils/animation";

const SolveRealProblemCard = () => {
  return (
    <div>
      <div className="md:flex items-center gap-5">
        <div>
          <div className="h-[704px] w-[413px] p-[30px] bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
            <div className="p-[1px] rounded-[30px] bg-[linear-gradient(180deg,_#00AEFF_0%,_#000000_87.68%)] overflow-hidden relative group">
              {/* ১. বর্ডার এনিমেশন লেয়ার (এটি শুধু বর্ডারের ওপর দৌড়াবে, আপনার ডিজাইনে হাত দিবে না) */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 260deg, #00AEFF 310deg, #FFFFFF 360deg)",
                    width: "250%",
                    height: "250%",
                    position: "absolute",
                    top: "-75%",
                    left: "-75%",
                    filter: "blur(2px)",
                  }}
                />
              </div>

              <div className="pt-[16px] px-[14px] bg-[#000311] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12] relative z-10">
                <div className="relative">
                  <div className="w-[323px] h-[39px] rounded-[8px] bg-[#121B35] flex items-center px-[12px]">
                    <p className="text-[12px] text-white">
                      One-Click Content Creation
                    </p>
                    <Image
                      src={pointer}
                      alt="line"
                      className="absolute left-1/2 top-7 animate-bounce"
                    />
                  </div>
                </div>
                <div>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp} className="mt-[15px] text-[#949494] text-[12px]">
                    <span className="text-[12px] text-white mr-[8px]">
                      Subject:
                    </span>
                    Discover the power of content generation
                  </motion.p>
                  <div className="relative">
                    <Image
                      src={pen}
                      alt="line"
                      width={16}
                      height={16}
                      className="absolute left-[115px] bottom-2"
                    />
                    <motion.p
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}className="mt-[6px] text-[12px] text-white ">
                      Hi [Recipient’s Name]
                    </motion.p>
                  </div>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-[12px] mt-[14px] text-[#949494]"
                  >
                    Create, optimize, and publish smarter content 10x faster,
                    with predictive analytics and generative AI. Create blogs,
                    pages, and FAQs with one-click prompts.
                  </motion.p>
                  <div className="relative">
                    <div className="mt-[25px]">
                      <button className="w-[163.7px] absolute z-20 left-[90px] bottom-[41px] h-[46px] px-[18.4px] py-[14.95px] rounded-[13.8px] bg-[#B53BE2] text-white text-[18.4px] font-medium leading-[140%] text-center border-transparent shadow-[inset_0px_-4.6px_21.85px_0px_#EAB1FF] flex items-center justify-center gap-[4.5px]">
                        <Image
                          src={loading}
                          alt="line"
                          width={23}
                          height={23}
                        />
                        Generating
                      </button>
                      <Image
                        src={alfonso}
                        width={75}
                        height={32}
                        alt="cursor"
                        className="absolute left-[15px] top-[122px]"
                      />
                      <Image
                        src={vendaike}
                        alt="cursor"
                        className="absolute left-[238px] bottom-0"
                        width={75}
                        height={32}
                      />

                      <div>
                        <div className="w-[325px] h-[8px] rounded-[4px] bg-[#121B35]"></div>
                      </div>
                      <div>
                        <div className="w-[325px] mt-4 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[325px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>

                      <div>
                        <div className="w-[325px] mt-[14px] h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[325px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>

                      <div>
                        <div className="w-[325px] mt-[14px] h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[325px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>

                      <div>
                        <div className="w-[325px] mt-[14px] h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[325px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>
                      <div>
                        <div className="w-[325px] mt-[14px] h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[325px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>
                      <div>
                        <div className="w-[325px] mt-[14px] h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[325px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>
                      <div>
                        <div className="w-[325px] mt-[14px] h-[4px] rounded-[4px] bg-[#121B35]"></div>{" "}
                        <div className="w-[290px] mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                        <div className="w-[325px]  mt-1 h-[4px] rounded-[4px] bg-[#121B35]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              className="px-7.5"
            >
              <p className="title-s mt-[43px] text-white font-medium">
                Custom Web Development
              </p>
              <p className="mt-3 text-base text-[#82869A] ">
                Build fast, scalable, and modern websites tailored to your
                business needsFrom landing pages to full web platforms, we
                develop high-performance, SEO-friendly solutions that deliver
                real results.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[704px] w-[413px] ">
            <div className="w-[413px] h-[367px] bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
              <div className="px-[30px] pt-[30px]">
                <div className="mx-auto w-[174px] h-[203px] p-[2px] rounded-[20px] bg-[linear-gradient(180deg,_#00AEFF_0%,_#000000_87.68%)] overflow-hidden relative group">
                  {/* বর্ডার এনিমেশন লেয়ার */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        background:
                          "conic-gradient(from 0deg, transparent 0deg, transparent 260deg, #00AEFF 310deg, #FFFFFF 360deg)",
                        width: "250%",
                        height: "250%",
                        position: "absolute",
                        top: "-75%",
                        left: "-75%",
                        filter: "blur(2px)",
                      }}
                    />
                  </div>

                  {/* আপনার অরিজিনাল ইনার কোড, এখন একটি motion.div-এর ভিতরে */}
                  <div className="w-full h-full bg-[#000311] rounded-[18px] pb-[30px] pt-[30px] relative z-10">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-[48px] h-0 border-[3px] rounded-2xl border-[#01ADFE] mx-auto "
                    ></motion.div>

                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                      className="w-[146px] mx-auto h-[24px] mt-[34px] rounded-[5px] bg-[#030C24]"
                    ></motion.div>

                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                      className="w-[146px] mx-auto mt-[6px] h-[24px] rounded-[5px] bg-[#030C24]"
                    ></motion.div>
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{
                          y: [0, -8, 0], // হালকা উপরে-নিচে মুভমেন্ট
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
                          <Image
                            src={innerdiv}
                            alt="icon"
                            className="w-[12px] h-[12px]"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  custom={0.2}
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeDown}
                  className="px-7.5"
                >
                  <p className="text-white font-medium title-s mt-5">
                    SaaS Application Development
                  </p>
                  <p className="text-[#82869A] text-base mt-3">
                    Build powerful SaaS platforms with secure and scalable
                    architecture.
                  </p>
                </motion.div>
              </div>
            </div>
            {/* 2nd div */}
            <div className="w-[413px] h-[317px] bg-[#000311] border mt-5 border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
              <div className="relative">
                {/* 1 */}
                <div className="absolute -top-12 left-[205px]">
                  <div className="absolute -right-[12px] -top-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_17_174)">
                        <path
                          d="M22.0574 6.17956C22.045 5.5316 22.0333 4.91947 22.0333 4.32728C22.0333 3.86335 21.6573 3.48722 21.1932 3.48722C17.6005 3.48722 14.8652 2.45473 12.5852 0.237863C12.259 -0.0793438 11.7399 -0.0792318 11.4139 0.237863C9.13407 2.45473 6.39916 3.48722 2.80672 3.48722C2.34279 3.48722 1.96666 3.86335 1.96666 4.32728C1.96666 4.91958 1.95501 5.53193 1.94258 6.18001C1.82744 12.2101 1.66973 20.4686 11.7244 23.9537C11.8135 23.9846 11.9065 24.0001 11.9995 24.0001C12.0924 24.0001 12.1855 23.9846 12.2746 23.9537C22.33 20.4685 22.1725 12.2098 22.0574 6.17956ZM11.9996 22.2685C3.3764 19.136 3.50678 12.2738 3.62248 6.21205C3.62942 5.84824 3.63614 5.49564 3.64085 5.14998C7.00558 5.00796 9.69624 3.98835 11.9996 1.98183C14.3031 3.98835 16.9942 5.00807 20.3592 5.14998C20.3639 5.49553 20.3706 5.84791 20.3776 6.21149C20.4932 12.2735 20.6234 19.1359 11.9996 22.2685Z"
                          fill="#EAB1FF"
                        />
                        <path
                          d="M14.8924 9.08169L10.8378 13.1361L9.10766 11.4059C8.77959 11.0779 8.24766 11.0779 7.9197 11.4059C7.59163 11.734 7.59163 12.2659 7.9197 12.5939L10.2439 14.9181C10.4078 15.0821 10.6229 15.1641 10.8378 15.1641C11.0528 15.1641 11.2678 15.0821 11.4318 14.9181L16.0803 10.2698C16.4085 9.94169 16.4085 9.40976 16.0804 9.0818C15.7524 8.75373 15.2205 8.75362 14.8924 9.08169Z"
                          fill="#EAB1FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_174">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className=" inline-block"
                    style={{ width: "1px", height: "41px" }}
                  >
                    <svg
                      width="1"
                      height="41"
                      viewBox="0 0 1 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.5"
                        y1="0"
                        x2="0.5"
                        y2="41"
                        stroke="url(#paint0_linear_17_173)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_17_173"
                          x1="2"
                          y1="16.5"
                          x2="-2.29561"
                          y2="17.0195"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#040614" />
                          <stop offset="1" stopColor="#EAB1FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* আলোর ঝলক - যা এই লাইনের ওপর দিয়ে দৌড়াবে */}
                    <div className="light-runner"></div>

                    <style jsx>{`
                      .light-runner {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 1px;
                        height: 15px; /* আলোর দৈর্ঘ্য */
                        background: linear-gradient(
                          to bottom,
                          transparent,
                          #eab1ff,
                          transparent
                        );
                        animation: run-light 1.5s infinite linear;
                      }

                      @keyframes run-light {
                        0% {
                          top: -15px;
                          opacity: 0;
                        }
                        30% {
                          opacity: 1;
                        }
                        70% {
                          opacity: 1;
                        }
                        100% {
                          top: 41px;
                          opacity: 0;
                        }
                      }
                    `}</style>
                  </div>
                </div>
                {/* 2 */}
                <div className="absolute left-[139px] -top-[9px] ">
                  <div className="relative inline-block">
                    <div className="absolute -top-7 -left-3 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_17_180)">
                          <path
                            d="M11.9861 0.0012207C11.5559 0.0012207 11.126 0.0243473 10.6983 0.0704505C10.3062 0.110497 9.91899 0.176172 9.53695 0.255864C9.46302 0.271332 9.38903 0.287651 9.3151 0.30472C7.06416 0.817211 5.00879 1.96809 3.39548 3.61934C3.24546 3.77312 3.09859 3.93145 2.95497 4.09429C-1.40305 9.09745 -0.880046 16.6862 4.12317 21.0442C8.91309 25.2165 16.1231 24.9389 20.5781 20.4107C20.7284 20.2569 20.8752 20.0986 21.0186 19.9357C22.9418 17.7455 24.0017 14.9298 24 12.015C24 5.37992 18.6212 0.00117065 11.9861 0.0012207ZM3.92929 4.22003C3.99257 4.15436 4.05824 4.09148 4.12272 4.02781C4.1972 3.95453 4.27129 3.88084 4.34738 3.80996C4.41425 3.74749 4.48313 3.68742 4.55161 3.62655C4.6289 3.55807 4.70579 3.48959 4.78508 3.42351C4.85476 3.36465 4.92644 3.30818 4.99773 3.25131C5.07782 3.18724 5.15791 3.12317 5.2404 3.0615C5.31329 3.00663 5.38737 2.95337 5.46186 2.90131C5.54476 2.84204 5.62805 2.78117 5.71255 2.72591C5.78824 2.67465 5.86472 2.62499 5.94161 2.57574C6.02731 2.52087 6.11341 2.46681 6.20031 2.41555C6.27855 2.36885 6.35729 2.3229 6.43658 2.27779C6.52523 2.22734 6.61424 2.17808 6.70369 2.13002C6.78378 2.08732 6.86387 2.04553 6.94397 2.00468C7.03527 1.95863 7.12738 1.91417 7.21989 1.87052C7.29998 1.83248 7.38327 1.79444 7.46577 1.7584C7.55988 1.71835 7.65519 1.6783 7.7505 1.63826C7.83339 1.60422 7.91589 1.57098 7.99958 1.53894C8.0965 1.5021 8.19461 1.46766 8.29272 1.43322C8.37642 1.40399 8.46011 1.37475 8.54501 1.34712C8.64473 1.31508 8.74524 1.28545 8.84616 1.25622C8.93066 1.23179 9.01435 1.20656 9.09925 1.18373C9.13169 1.17532 9.16412 1.16852 9.19656 1.16011C8.0112 2.31108 7.13153 3.73953 6.63721 5.31609C5.68672 5.0654 4.76656 4.7113 3.89325 4.26008C3.90647 4.24606 3.91768 4.23205 3.92929 4.22003ZM3.35343 4.86477C4.31539 5.38597 5.33546 5.79194 6.39253 6.07417C5.87434 7.87604 5.60232 9.73974 5.584 11.6146H0.782469C0.86972 9.14225 1.77381 6.76862 3.35343 4.86477ZM3.35343 19.1652C1.77391 17.2614 0.86982 14.8877 0.782469 12.4155H5.584C5.60232 14.2903 5.87429 16.154 6.39253 17.9559C5.33551 18.2382 4.31544 18.6441 3.35343 19.1652ZM9.09685 22.8479C9.01595 22.8275 8.93226 22.801 8.84896 22.7766C8.74764 22.747 8.64593 22.7173 8.54581 22.6849C8.46132 22.6577 8.37802 22.6284 8.29472 22.5992C8.19621 22.5652 8.0977 22.5303 8.00038 22.4931C7.91709 22.4614 7.83499 22.4282 7.7525 22.3946C7.65679 22.3545 7.56108 22.3145 7.46617 22.2744C7.38447 22.2384 7.30318 22.2013 7.22229 22.1631C7.12898 22.1191 7.03607 22.0742 6.94197 22.0277C6.86187 21.9877 6.78178 21.9477 6.70169 21.904C6.61118 21.8555 6.52148 21.8059 6.43178 21.7546C6.35169 21.7102 6.2756 21.6645 6.19831 21.6181C6.11021 21.5652 6.02371 21.5108 5.93721 21.4551C5.86112 21.4066 5.78503 21.3574 5.71015 21.3069C5.62485 21.2493 5.54035 21.1892 5.45665 21.1291C5.38337 21.0767 5.31008 21.0242 5.238 20.9689C5.15511 20.9065 5.07381 20.842 4.99292 20.7771C4.92204 20.7206 4.85156 20.6646 4.78228 20.6065C4.70218 20.54 4.6249 20.4708 4.54721 20.4019C4.47913 20.3414 4.41065 20.2817 4.34417 20.2201C4.26768 20.1488 4.1936 20.0747 4.11911 20.0014C4.05464 19.9377 3.98896 19.8749 3.92569 19.8096C3.91408 19.7972 3.90286 19.7844 3.89125 19.7724C4.76451 19.3209 5.68467 18.9667 6.63521 18.7159C7.12963 20.2924 8.00924 21.7208 9.19456 22.8719C9.16212 22.8635 9.12928 22.8567 9.09685 22.8479ZM11.5857 23.1963C9.87214 22.9528 8.37001 21.1644 7.42492 18.5233C8.7913 18.2174 10.1857 18.0532 11.5857 18.0335V23.1963ZM11.5857 17.2326C10.1005 17.2521 8.62155 17.4285 7.17343 17.7588C6.6706 16.0215 6.40535 14.224 6.38492 12.4155H11.5857V17.2326ZM11.5857 11.6146H6.38492C6.4053 9.80602 6.67055 8.00855 7.17343 6.27119C8.62155 6.60142 10.1006 6.77783 11.5857 6.7974V11.6146ZM11.5857 5.99648C10.1856 5.97696 8.7913 5.81282 7.42492 5.50671C8.37001 2.86567 9.87214 1.07721 11.5857 0.83373V5.99648ZM20.6189 4.86477C22.1984 6.76867 23.1025 9.1423 23.1899 11.6146H18.3884C18.37 9.73974 18.0981 7.87604 17.5798 6.07417C18.6368 5.79179 19.6569 5.38587 20.6189 4.86477ZM14.8723 1.18173C14.9564 1.20255 15.0401 1.22899 15.1234 1.25341C15.2247 1.28305 15.3264 1.31268 15.4265 1.34512C15.511 1.37235 15.5943 1.40158 15.6776 1.43082C15.7761 1.46486 15.8747 1.4997 15.972 1.53694C16.0553 1.56858 16.1374 1.60181 16.2199 1.63545C16.3156 1.6755 16.4113 1.71555 16.5062 1.75559C16.5879 1.79163 16.6692 1.82873 16.7501 1.86692C16.8434 1.91097 16.9363 1.95582 17.0304 2.00228C17.1105 2.04232 17.1906 2.08237 17.2707 2.12602C17.3612 2.17447 17.4509 2.22413 17.5406 2.27539C17.6207 2.31984 17.6968 2.36549 17.774 2.41195C17.8621 2.46481 17.9486 2.51927 18.0351 2.57494C18.1112 2.62339 18.1873 2.67265 18.2622 2.72311C18.3475 2.78077 18.4316 2.84044 18.5153 2.90051C18.589 2.95297 18.6623 3.00583 18.7348 3.0607C18.8172 3.12277 18.8981 3.18724 18.9794 3.25212C19.0499 3.30818 19.1208 3.36425 19.1901 3.42271C19.2702 3.48919 19.3475 3.55847 19.4251 3.62735C19.4932 3.68782 19.5617 3.74749 19.6282 3.80916C19.7047 3.88044 19.7788 3.95453 19.8532 4.02781C19.9177 4.09148 19.9834 4.15436 20.0467 4.21963C20.0583 4.23204 20.0695 4.24486 20.0811 4.25687C19.2078 4.70829 18.2877 5.06255 17.3371 5.31329C16.8418 3.73657 15.961 2.30828 14.7746 1.1577C14.807 1.16611 14.8399 1.17292 14.8723 1.18173ZM12.3866 0.83373C14.1002 1.07721 15.6023 2.86567 16.5474 5.50671C15.1811 5.81267 13.7867 5.97681 12.3866 5.99648V0.83373ZM12.3866 6.7974C13.8718 6.77788 15.3508 6.60147 16.7989 6.27119C17.3018 8.00855 17.567 9.80602 17.5874 11.6146H12.3866V6.7974ZM12.3866 12.4155H17.5874C17.5671 14.224 17.3018 16.0215 16.7989 17.7588C15.3508 17.4286 13.8718 17.2522 12.3866 17.2326V12.4155ZM12.3866 23.1963V18.0335C13.7868 18.0531 15.1811 18.2172 16.5474 18.5233C15.6023 21.1644 14.1002 22.9528 12.3866 23.1963ZM20.0431 19.81C19.9798 19.8753 19.9145 19.9381 19.85 20.0018C19.7756 20.0751 19.7011 20.1492 19.6246 20.2205C19.5581 20.2825 19.4896 20.3406 19.4215 20.4027C19.3439 20.4716 19.2666 20.5404 19.1873 20.6069C19.1172 20.6654 19.0459 20.7218 18.9746 20.7787C18.8945 20.8428 18.8144 20.9069 18.7319 20.9685C18.6591 21.0234 18.585 21.0767 18.5105 21.1287C18.4276 21.188 18.3443 21.2488 18.2598 21.3041C18.1841 21.3554 18.1076 21.405 18.0307 21.4539C17.945 21.5091 17.8587 21.5626 17.7716 21.6141C17.6915 21.6609 17.6151 21.7066 17.5362 21.7518C17.4475 21.8023 17.3584 21.8515 17.2687 21.8996C17.1886 21.9423 17.1085 21.9841 17.0284 22.0249C16.9371 22.071 16.845 22.1154 16.7525 22.1591C16.6724 22.1971 16.5891 22.2352 16.5066 22.2712C16.4125 22.3113 16.3172 22.3513 16.2219 22.3914C16.139 22.425 16.0565 22.4586 15.9732 22.4903C15.8755 22.5275 15.7773 22.5624 15.6788 22.5964C15.5955 22.6256 15.5122 22.6549 15.4277 22.6821C15.3276 22.7145 15.2275 22.7442 15.1254 22.7734C15.0417 22.7982 14.9576 22.8231 14.8731 22.8459C14.8407 22.8543 14.8082 22.8611 14.7758 22.8695C15.9612 21.7185 16.8408 20.2901 17.3351 18.7135C18.2856 18.9642 19.2058 19.3183 20.0791 19.7695C20.0659 19.784 20.0547 19.798 20.0431 19.81ZM20.6189 19.1652C19.657 18.644 18.6369 18.2381 17.5798 17.9559C18.098 16.154 18.37 14.2903 18.3884 12.4155H23.1899C23.1027 14.8877 22.1985 17.2614 20.6189 19.1652Z"
                            fill="#EAB1FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_180">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      width="41"
                      height="17"
                      viewBox="0 0 41 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 0V16H40.5"
                        stroke="url(#paint0_linear_17_179)"
                        strokeOpacity="0.3"
                      />

                      <path
                        className="moving-light"
                        d="M0.5 0V16H40.5"
                        stroke="url(#paint0_linear_17_179)"
                        strokeWidth="1.2"
                      />

                      <defs>
                        <linearGradient
                          id="paint0_linear_17_179"
                          x1="-5.78571"
                          y1="-16.5"
                          x2="37.0398"
                          y2="-16.5451"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#040614" />
                          <stop offset="1" stopColor="#EAB1FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <style jsx>{`
                      .moving-light {
                        stroke-dasharray: 20, 60;
                        animation: flow 2s linear infinite;
                      }

                      @keyframes flow {
                        0% {
                          stroke-dashoffset: 80;
                        }
                        100% {
                          stroke-dashoffset: 0;
                        }
                      }
                    `}</style>
                  </div>
                </div>
                {/* 3 */}
                <div className="absolute top-[35px] left-[80px]">
                  <div className="absolute -top-7 -left-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.25 6C1.25 4.48122 2.48122 3.25 4 3.25H20C21.5188 3.25 22.75 4.48122 22.75 6V16C22.75 17.5188 21.5188 18.75 20 18.75H14.2135L14.9635 20.25H17C17.4142 20.25 17.75 20.5858 17.75 21C17.75 21.4142 17.4142 21.75 17 21.75H7C6.58579 21.75 6.25 21.4142 6.25 21C6.25 20.5858 6.58579 20.25 7 20.25H9.03647L9.78647 18.75H4C2.48122 18.75 1.25 17.5188 1.25 16V6ZM20 17.25H4C3.30964 17.25 2.75 16.6904 2.75 16V6C2.75 5.30964 3.30964 4.75 4 4.75H20C20.6904 4.75 21.25 5.30964 21.25 6V16C21.25 16.6904 20.6904 17.25 20 17.25Z"
                        fill="#EAB1FF"
                      />
                    </svg>
                  </div>
                  <svg
                    width="71"
                    height="18"
                    viewBox="0 0 71 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0V17H70.5"
                      stroke="url(#paint0_linear_17_185)"
                      strokeOpacity="0.2"
                    />

                    {/* চলন্ত আলোর লাইন */}
                    <path
                      className="moving-light-long"
                      d="M0.5 0V17H70.5"
                      stroke="url(#paint0_linear_17_185)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <defs>
                      <linearGradient
                        id="paint0_linear_17_185"
                        x1="5.41228"
                        y1="-23.5"
                        x2="82.4674"
                        y2="9.14426"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#040614" />
                        <stop offset="1" stopColor="#EAB1FF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <style jsx>{`
                    .moving-light-long {
                      /* পাথের দৈর্ঘ্য অনুযায়ী ড্যাশ সেট করা হয়েছে */
                      stroke-dasharray: 25, 100;
                      animation: flow-long 2.5s linear infinite;
                    }

                    @keyframes flow-long {
                      0% {
                        stroke-dashoffset: 125;
                      }
                      100% {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </div>
                {/* 4 */}
                <div className="absolute top-[88px] left-[97px]">
                  <div className="absolute -top-2 -left-[30px]">
                    <svg
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8906 0H2.10938C0.943922 0 0 0.949781 0 2.10938V14.7656C0 15.9321 0.950859 16.875 2.10938 16.875H21.8906C23.0463 16.875 24 15.9361 24 14.7656V2.10938C24 0.951844 23.0598 0 21.8906 0ZM21.5952 1.40625C21.1642 1.83492 13.7476 9.21249 13.4916 9.4672C13.0931 9.86564 12.5634 10.085 12 10.085C11.4366 10.085 10.9069 9.86559 10.5071 9.46589C10.3349 9.29456 3.00014 1.99847 2.40478 1.40625H21.5952ZM1.40625 14.4794V2.39648L7.48303 8.44125L1.40625 14.4794ZM2.40567 15.4688L8.48006 9.43298L9.51408 10.4616C10.1781 11.1256 11.061 11.4913 12 11.4913C12.939 11.4913 13.8219 11.1256 14.4846 10.4629L15.5199 9.43298L21.5943 15.4688H2.40567ZM22.5938 14.4794L16.517 8.44125L22.5938 2.39648V14.4794Z"
                        fill="#EAB1FF"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="81"
                      height="1"
                      viewBox="0 0 81 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* অরিজিনাল স্থির লাইন (ব্যাকগ্রাউন্ড) */}
                      <path
                        d="M0 0.5H81"
                        stroke="url(#paint0_linear_17_215)"
                        strokeOpacity="0.2"
                      />

                      {/* চলন্ত আলোর লাইন */}
                      <path
                        className="horizontal-light"
                        d="M0 0.5H81"
                        stroke="url(#paint0_linear_17_215)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      <defs>
                        <linearGradient
                          id="paint0_linear_17_215"
                          x1="32.5976"
                          y1="-1.5"
                          x2="32.8634"
                          y2="2.84217"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#040614" />
                          {/* কালার আরও গাঢ় করতে চাইলে #EAB1FF বদলে #D27CFF দিতে পারেন */}
                          <stop offset="1" stopColor="#EAB1FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <style jsx>{`
                    .horizontal-light {
                      /* ৩০ পিক্সেল লম্বা আলোর ঝলক */
                      stroke-dasharray: 30, 81;
                      animation: slide-right 2s linear infinite;
                    }

                    @keyframes slide-right {
                      0% {
                        stroke-dashoffset: 111; /* ৮১ + ৩০ */
                      }
                      100% {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </div>
                {/* 5 */}

                <div className="absolute top-[88px] left-[238px]">
                  <div className="absolute -top-2.5 left-[89px]">
                    <svg
                      width="15"
                      height="22"
                      viewBox="0 0 15 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.75 21.5H2.75C1.23 21.5 0 20.27 0 18.75V2.75C0 1.23 1.23 0 2.75 0H11.75C13.27 0 14.5 1.23 14.5 2.75V18.75C14.5 20.27 13.27 21.5 11.75 21.5ZM2.75 1.5C2.06 1.5 1.5 2.06 1.5 2.75V18.75C1.5 19.44 2.06 20 2.75 20H11.75C12.44 20 13 19.44 13 18.75V2.75C13 2.06 12.44 1.5 11.75 1.5H2.75Z"
                        fill="#EAB1FF"
                      />
                    </svg>
                  </div>
                  <div className="absolute ">
                    <svg
                      width="84"
                      height="1"
                      viewBox="0 0 84 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* অরিজিনাল স্থির লাইন */}
                      <path
                        d="M84 0.5L0 0.499993"
                        stroke="url(#paint0_linear_17_209)"
                        strokeOpacity="0.2"
                      />

                      {/* চলন্ত আলোর লাইন */}
                      <path
                        className="horizontal-flow-light"
                        d="M84 0.5L0 0.499993"
                        stroke="url(#paint0_linear_17_209)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      <defs>
                        <linearGradient
                          id="paint0_linear_17_209"
                          x1="50.1951"
                          y1="2.5"
                          x2="49.9387"
                          y2="-1.84331"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#040614" />
                          <stop offset="1" stopColor="#EAB1FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <style jsx>{`
                      .horizontal-flow-light {
                        /* ৩০ পিক্সেল লম্বা আলোর ঝলক */
                        stroke-dasharray: 30, 84;
                        animation: slide-flow 2s linear infinite;
                      }

                      @keyframes slide-flow {
                        0% {
                          stroke-dashoffset: -114; /* ৮৪ + ৩০ */
                        }
                        100% {
                          stroke-dashoffset: 0;
                        }
                      }
                    `}</style>
                  </div>
                </div>
                {/* 6 */}
                <div className="absolute left-[264px] top-[33px]">
                  <div className="absolute left-[50px] -top-[25px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_17_198)">
                        <path
                          d="M6.62659 5.46171C6.28046 5.1153 5.7189 5.1153 5.37278 5.46171C4.08765 6.74683 3.45601 8.53708 3.63957 10.3737C3.68537 10.8313 4.07082 11.1723 4.52096 11.1723C4.55054 11.1723 4.58035 11.1708 4.60993 11.1679C5.09734 11.1191 5.45289 10.6843 5.40413 10.1973C5.27349 8.89202 5.71923 7.62288 6.62659 6.71547C6.97299 6.3694 6.97299 5.80779 6.62659 5.46171Z"
                          fill="#EAB1FF"
                        />
                        <path
                          d="M10.1379 0C4.54786 0 0 4.54786 0 10.1379C0 15.728 4.54786 20.2759 10.1379 20.2759C15.728 20.2759 20.2759 15.728 20.2759 10.1379C20.2759 4.54786 15.728 0 10.1379 0ZM10.1379 18.5025C5.52562 18.5025 1.77342 14.7502 1.77342 10.1379C1.77342 5.52562 5.52562 1.77342 10.1379 1.77342C14.75 1.77342 18.5025 5.52562 18.5025 10.1379C18.5025 14.7502 14.7502 18.5025 10.1379 18.5025Z"
                          fill="#EAB1FF"
                        />
                        <path
                          d="M23.7402 22.4864L17.2968 16.043C16.9504 15.6966 16.3894 15.6966 16.043 16.043C15.6966 16.3891 15.6966 16.9507 16.043 17.2968L22.4864 23.7402C22.6596 23.9134 22.8863 23.9999 23.1133 23.9999C23.3403 23.9999 23.567 23.9134 23.7402 23.7402C24.0866 23.394 24.0866 22.8325 23.7402 22.4864Z"
                          fill="#EAB1FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_198">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    width="66"
                    height="17"
                    viewBox="0 0 66 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* অরিজিনাল স্থির পাথ (ব্যাকগ্রাউন্ড) */}
                    <path
                      d="M65 0V16H0"
                      stroke="url(#paint0_linear_17_197)"
                      strokeOpacity="0.2"
                    />

                    {/* চলন্ত আলোর পাথ */}
                    <path
                      className="moving-light-l-reverse"
                      d="M65 0V16H0"
                      stroke="url(#paint0_linear_17_197)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <defs>
                      <linearGradient
                        id="paint0_linear_17_197"
                        x1="82.3837"
                        y1="-9.99999"
                        x2="-4.04147"
                        y2="-15.0198"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#040614" />
                        <stop offset="1" stopColor="#EAB1FF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <style jsx>{`
                    .moving-light-l-reverse {
                      stroke-dasharray: 25, 100;
                      animation: flow-reverse 2.2s linear infinite;
                    }

                    @keyframes flow-reverse {
                      0% {
                        stroke-dashoffset: 125;
                      }
                      100% {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </div>
                <div className="absolute left-[230px] -top-[5.5px]">
                  <div className="absolute -top-7 left-9.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_17_190)">
                        <path
                          d="M7.92144 15.32C7.44513 15.7964 7.44513 16.5686 7.92144 17.0448C8.39791 17.5211 9.17001 17.5211 9.64632 17.0448C10.944 15.7471 13.0559 15.7471 14.3536 17.0448C14.5918 17.2828 14.9041 17.402 15.2161 17.402C15.5282 17.402 15.8404 17.283 16.0786 17.0448C16.5549 16.5685 16.5549 15.7962 16.0786 15.32C13.8296 13.0711 10.1704 13.0711 7.92144 15.32Z"
                          fill="#EAB1FF"
                        />
                        <path
                          d="M4.34679 11.745C3.87049 12.2213 3.87049 12.9936 4.34679 13.4697C4.8231 13.9459 5.5952 13.9462 6.07167 13.4697C9.3406 10.2008 14.6596 10.2008 17.9284 13.4697C18.1666 13.7078 18.4789 13.827 18.7909 13.827C19.103 13.827 19.4152 13.708 19.6534 13.4697C20.1298 12.9934 20.1298 12.2212 19.6534 11.745C15.4334 7.5251 8.56687 7.5251 4.34679 11.745Z"
                          fill="#EAB1FF"
                        />
                        <path
                          d="M23.6429 7.75564C17.223 1.33568 6.77709 1.33568 0.35729 7.75564C-0.119015 8.23195 -0.119015 9.00422 0.35729 9.48036C0.833758 9.95666 1.60586 9.95666 2.08217 9.48036C4.7312 6.83116 8.25349 5.37233 12 5.37233C15.7466 5.37233 19.2688 6.83133 21.9179 9.48036C22.1561 9.71843 22.4683 9.83763 22.7804 9.83763C23.0925 9.83763 23.4047 9.71859 23.6429 9.48036C24.1192 9.00422 24.1192 8.23195 23.6429 7.75564Z"
                          fill="#EAB1FF"
                        />
                        <path
                          d="M12 21.0596C12.7392 21.0596 13.3385 20.4603 13.3385 19.7211C13.3385 18.9818 12.7392 18.3826 12 18.3826C11.2608 18.3826 10.6615 18.9818 10.6615 19.7211C10.6615 20.4603 11.2608 21.0596 12 21.0596Z"
                          fill="#EAB1FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_190">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="50"
                      height="15"
                      viewBox="0 0 50 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* অরিজিনাল স্থির লাইন (ব্যাকগ্রাউন্ডে আবছা থাকবে) */}
                      <path
                        d="M49 0V14H0"
                        stroke="url(#paint0_linear_17_189)"
                        strokeOpacity="0.2"
                      />

                      {/* চলন্ত আলোর লাইন */}
                      <path
                        className="moving-light-small-l"
                        d="M49 0V14H0"
                        stroke="url(#paint0_linear_17_189)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      <defs>
                        <linearGradient
                          id="paint0_linear_17_189"
                          x1="38"
                          y1="-24.9375"
                          x2="-5.56596"
                          y2="3.13212"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#040614" />
                          <stop offset="1" stopColor="#EAB1FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <style jsx>{`
                      .moving-light-small-l {
                        /* পাথের দৈর্ঘ্য অনুযায়ী ড্যাশ সেট করা হয়েছে */
                        stroke-dasharray: 15, 60;
                        animation: flow-small-l 1.8s linear infinite;
                      }

                      @keyframes flow-small-l {
                        0% {
                          stroke-dashoffset: 75;
                        }
                        100% {
                          stroke-dashoffset: 0;
                        }
                      }
                    `}</style>

                    <style jsx>{`
                      .moving-light-short-l {
                        /* পাথের মোট দৈর্ঘ্য প্রায় ৬৪ পিক্সেল (১৪ নিচে + ৫০ বামে) */
                        stroke-dasharray: 20, 80;
                        animation: flow-short 1.8s linear infinite;
                      }

                      @keyframes flow-short {
                        0% {
                          stroke-dashoffset: 100;
                        }
                        100% {
                          stroke-dashoffset: 0;
                        }
                      }
                    `}</style>
                  </div>
                </div>
                <Image
                  src={lockMain}
                  alt="icon"
                  className="w-[100px] h-[100px] mt-[82px] ml-[157px] "
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                custom={0.2}
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeDown}
                className="px-7.5"
              >
                <p className="text-white font-medium title-s mt-6">
                  API Development & Integration
                </p>
                <p className="text-[#82869A] text-base mt-3">
                  Seamless integrations with third-party tools and custom APIs.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute left-[56px] top-[50px]" // পজিশন এখন এখানে
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={p3} alt="line" />
          </motion.div>

          <motion.div
            className="absolute left-[80px] top-[150px]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={p4} alt="line" />
          </motion.div>

          <motion.div
            className="absolute left-[328px] top-[75px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={p1} alt="line" />
          </motion.div>

          <motion.div
            className="absolute left-[328px] top-[146px]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={p2} alt="line" />
          </motion.div>
        </div>

        {/* last div
         */}
        <div>
          <SolveRealProblem3rdrow></SolveRealProblem3rdrow>
        </div>
      </div>
    </div>
  );
};

export default SolveRealProblemCard;
