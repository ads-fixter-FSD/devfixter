"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import GhostButton from "./button/GhostButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "#features" },
    { name: "Company", href: "#company" },
    { name: "Blog", href: "#blog" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 flex justify-center z-[100] transition-all duration-300">
      <nav 
        className={`w-full max-w-[1440px] h-[80px] flex items-center justify-between transition-all duration-300 
          px-5 md:px-[80px] py-[16px] 
          ${
            isScrolled 
              ? "bg-[#0E0E0F]/40 backdrop-blur-xl  " 
              : "bg-transparent" 
          }`}
      >
        {/* Logo Section */}
        <Link href="/" className="relative w-[125px] h-[23px] flex items-center shrink-0">
          <Image 
            src="/logo1.png" 
            alt="logo" 
            fill 
            className="object-contain" 
            priority 
          />
        </Link>

        {/* Main Nav Items (Center) */}
        <div className="hidden md:flex items-center gap-[30px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-all duration-300 hover:text-white whitespace-nowrap ${
                  isActive ? "text-white" : "text-[#B5BDE2]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Contact Now Button (Right) */}
        <div className="hidden md:block shrink-0">
          <GhostButton 
            icon={FiArrowRight} 
            className="!w-[147px] !h-[48px] !rounded-[12px] !text-[15px] font-medium"
            onClick={() => console.log("Contact Clicked")}
          >
            Contact Now
          </GhostButton>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl transition-all"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[80px] left-0 w-full bg-[#0E0E0F] border-b border-white/10 flex flex-col items-center py-10 gap-6 md:hidden z-40 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href ? "text-white" : "text-[#B5BDE2]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <GhostButton 
                  icon={FiArrowRight}
                  className="!w-[200px]"
                  onClick={() => setIsOpen(false)}
              >
                Contact Now
              </GhostButton>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;