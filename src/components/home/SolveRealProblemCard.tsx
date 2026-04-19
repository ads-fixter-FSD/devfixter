"use client";
import React from "react";
import innerdiv from "../../../public/home/solveRealProblem/Innerbtn.png";
import p1 from "../../../public/home/solveRealProblem/p1.png";
import p2 from "../../../public/home/solveRealProblem/p2.png";
import p3 from "../../../public/home/solveRealProblem/p3.png";
import p4 from "../../../public/home/solveRealProblem/p4.png";

import msg from "../../../public/home/solveRealProblem/msg.png";
import loading from "../../../public/home/solveRealProblem/loading.png";
import internet from "../../../public/home/solveRealProblem/internet.png";
import phone from "../../../public/home/solveRealProblem/phoneIcon.png";
import lockMain from "../../../public/home/solveRealProblem/lock.png";
import pc from "../../../public/home/solveRealProblem/pc.png";
import search from "../../../public/home/solveRealProblem/seacrch.png";
import wifi from "../../../public/home/solveRealProblem/wifi.png";
import virus from "../../../public/home/solveRealProblem/virus.png";
import pointer from "../../../public/home/solveRealProblem/pointer.png";
import border1 from "../../../public/home/solveRealProblem/border.png";
import pen from "../../../public/home/solveRealProblem/pen.png";
import alfonso from "../../../public/home/solveRealProblem/pointerwithname.png";
import vendaike from "../../../public/home/solveRealProblem/blue.png";
import Image from "next/image";
import { motion } from "framer-motion";
const SolveRealProblemCard = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
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

              {/* ২. আপনার দেওয়া অরিজিনাল কোড (এক বিন্দুও পরিবর্তন করা হয়নি) */}
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
                  <p className="mt-[15px] text-[#949494] text-[12px]">
                    <span className="text-[12px] text-white mr-[8px]">
                      Subject:
                    </span>
                    Discover the power of content generation
                  </p>
                  <div className="relative">
                    <Image
                      src={pen}
                      alt="line"
                      width={16}
                      height={16}
                      className="absolute left-[115px] bottom-2"
                    />
                    <p className="mt-[6px] text-[12px] text-white ">
                      Hi [Recipient’s Name]
                    </p>
                  </div>
                  <p className="text-[12px] mt-[14px] text-[#949494]">
                    Create, optimize, and publish smarter content 10x faster,
                    with predictive analytics and generative AI. Create blogs,
                    pages, and FAQs with one-click prompts.
                  </p>
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
            <div>
              <p className="title-s mt-[43px] text-white font-medium">
                Custom Web Development
              </p>
              <p className="mt-3 text-base text-[#82869A] ">
                Build fast, scalable, and modern websites tailored to your
                business needsFrom landing pages to full web platforms, we
                develop high-performance, SEO-friendly solutions that deliver
                real results.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[704px] w-[413px] ">
            <div className="w-[413px] h-[367px] bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">
              <div className="px-[30px] pt-[30px]">
                <div className="mx-auto w-[174px] h-[203px] p-[2px] rounded-[20px] bg-[linear-gradient(180deg,_#00AEFF_0%,_#000000_87.68%)]">
                  <div className="w-full h-full bg-[#000311] rounded-[18px] pb-[30px]  pt-[30px]">
                    <div className="w-[48px] h-0 border-[3px] rounded-2xl border-[#01ADFE] mx-auto "></div>
                    <div className="w-[146px] mx-auto h-[24px] mt-[34px] rounded-[5px] bg-[#030C24]"></div>
                    <div className="w-[146px] mx-auto mt-[6px] h-[24px] rounded-[5px] bg-[#030C24]"></div>
                    {/* ffff */}
                    <div className="flex items-center justify-center">
                      {/* outer glow */}

                      <div
                        className="w-[54px] h-[54px] mt-5 flex items-center justify-center rounded-full 
  bg-[#b53be24d]  border-[1.5px]
  border-[#B53BE21A] shadow-[0px_32px_24px_-16px_#B53BE266] shadow-[inset_0px_0px_8px_0px_#F8F8F866]"
                      >
                        <div className="w-[24px] h-[24px] rounded-[8px] border-0 [border-image:linear-gradient(158.39deg,_rgba(181,59,226,0.1)_14.19%,_rgba(181,59,226,0.000025)_50.59%,_rgba(181,59,226,0.000025)_68.79%,_rgba(181,59,226,0.025)_105.18%)_1] bg-[#B53BE2] flex items-center justify-center">
                          <Image
                            src={innerdiv}
                            alt="icon"
                            className="w-[12px] h-[12px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-white font-medium title-s mt-5">
                  SaaS Application Development
                </p>
                <p className="text-[#82869A] text-base mt-3">
                  Build powerful SaaS platforms with secure and scalable
                  architecture.
                </p>
              </div>
            </div>{" "}

            {/* 2nd div */}
            <div className="w-[413px] h-[317px] bg-[#000311] border mt-5 border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]">




            </div>
          </div>
          <Image src={p3} alt="line" className="absolute left-[56px] top-[50px] " />
          <Image src={p4} alt="line" className="absolute left-[80px] top-[150px]" />
          <Image src={p1} alt="line" className="absolute left-[328px] top-[75px]" />
          <Image src={p2} alt="line" className="absolute left-[328px] top-[146px]" />
        </div>

        {/* last div
         */}
        <div>
          <div className="h-[704px] max-w-[413px] p-[30px] bg-[#000311] border border-[#FFFFFF12] rounded-[30px] shadow-[inset_0px_34px_154px_0px_#FFFFFF12]"></div>
        </div>
      </div>
    </div>
  );
};

export default SolveRealProblemCard;
