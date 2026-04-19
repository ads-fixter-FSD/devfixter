
import React from "react";
import Badge from "../shared/Badge";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";

export default function WhatWeDo() {
  return (
    <div className="pt-20 lg:pt-30 px-3 md:px-0">
      
      <div className="custom-container min-h-auto lg:h-[520px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        
        {/* Left Side: Image Section */}
        <div className="w-full lg:w-[560px] h-[300px] lg:h-full relative rounded-[30px] overflow-hidden">
          <Image
            src="/aboutUs/whatWeDo.svg"
            alt="Our Team"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[630px] flex flex-col gap-6 items-start justify-center">
          <div className="flex flex-col gap-[14px]">
            <Badge>What We Do</Badge>
            <div className="title-md">
              We Design, Develop, and Scale <br className="hidden lg:block" /> 
              Powerful Digital Solutions for <br className="hidden lg:block" />
              Businesses
            </div>
          </div>
          
          <div className="flex flex-col gap-[30px] w-full lg:w-[597px]">
            <div className="text-base text-[#9B9EA8]">
              Whether you&apos;re a startup or an established business, we
              provide end-to-end development services to bring your ideas to
              life. From planning and UI integration to backend development and
              deployment, we ensure your product is fast, secure, and built for
              growth.
            </div>
            <div>
              <PrimaryButton>
                Start Your Project{" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16732 9.99992L15.834 9.99992M15.834 9.99992L10.0007 4.16659M15.834 9.99992L10.0007 15.8333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </PrimaryButton>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}