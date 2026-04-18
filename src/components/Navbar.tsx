"use client";

import Link from "next/link";
import React from "react";
import GhostButton from "./button/GhostButton";
import { FiArrowRight } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0E0E0F] h-[80px] flex items-center justify-center border-b border-white/5 z-50 fixed top-0">
      <div className="w-full max-w-[1280px] px-6 lg:px-10 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-[10px] group">
          <div className="w-[32px] h-[32px] bg-[#B53BE2] rounded-[10px] flex items-center justify-center shadow-[0px_4px_10px_rgba(181,59,226,0.5)]">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Geometric 'd' representation */}
              <rect x="2" y="7" width="6" height="6" rx="1.5" fill="white" />
              <rect x="9" y="3" width="3" height="10" rx="1" fill="white" />
              <rect x="2" y="3" width="3" height="3" rx="1" fill="white" />
            </svg>
          </div>
          <span className="font-semibold text-white tracking-tight text-[22px] lowercase font-sans">
            devfixter
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-white text-[15px] font-medium transition-opacity hover:opacity-80">
            Home
          </Link>
          <Link href="#features" className="text-[#B5BDE2] text-[15px] font-medium transition-colors hover:text-white">
            Features
          </Link>
          <Link href="#company" className="text-[#B5BDE2] text-[15px] font-medium transition-colors hover:text-white">
            Company
          </Link>
          <Link href="#blog" className="text-[#B5BDE2] text-[15px] font-medium transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="#pricing" className="text-[#B5BDE2] text-[15px] font-medium transition-colors hover:text-white">
            Pricing
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <GhostButton icon={FiArrowRight} onClick={() => console.log('Contact Now Clicked')}>
            Contact Now
          </GhostButton>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-[#B5BDE2] hover:text-white p-2">
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

