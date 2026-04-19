import React from "react";
import SiteLogo from "../siteLogo/SiteLogo";
import PrimaryButton from "@/components/button/PrimaryButton";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineBehance } from "react-icons/ai";
import { FaDribbble } from "react-icons/fa6";
import ContactCTA from "./ContactCTA";

const Footer = () => {
  return (
    <footer className="w-full pb-[36px] ">
        <ContactCTA />
      {/* Outer Container (1280px) */}
      <div className="custom-container px-5 mx:px-0">
        {/* Inner Wrapper (Width: 1160px) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-[1160px]">
          {/* Left Side (Width: 305px) */}
          <div className="w-full lg:w-[305px]  flex flex-col gap-[47px]">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <SiteLogo />
              </div>
              <p className="text-base text-[#9B9EA8]">
                Build, launch, and scale your digital products with expert
                development solutions. We help startups and businesses turn
                ideas into powerful web applications.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="title-s mb-4 text-foreground">Newsletter</h4>
              <div className="flex gap-2 p-1 border border-border rounded-[14px] bg-card-dark focus-within:border-primary transition-all">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-none outline-none px-4 py-[11px] w-full text-base text-foreground"
                />
                <PrimaryButton>Subscribe</PrimaryButton>
              </div>
            </div>
          </div>

          {/* Right Side (Width: 727px) */}
          <div className="w-full lg:w-[727px] flex flex-wrap lg:flex-nowrap gap-[120px]">
            {/* Pages Col 1 - Content based width */}
            <div className="shrink-0">
              <h4 className="text-base text-white mb-3 font-medium ">Pages</h4>
              <ul className="space-y-4 text-muted text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages Col 2 - Content based width */}
            <div className="shrink-0">
              <h4 className="text-base text-white mb-3 font-medium">Pages</h4>
              <ul className="space-y-4 text-muted text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Pricing Single
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Career Single
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog Single
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    404
                  </a>
                </li>
              </ul>
            </div>

            {/* Utility Col - Content based width */}
            <div className="shrink-0">
              <h4 className="text-base text-white mb-3 font-medium">Utility</h4>
              <ul className="space-y-4 text-muted text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Style Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Password
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Change Log
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    404
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Socials - Content based width */}
            <div className="shrink-0">
              <div className="mb-8">
                <h4 className="text-base text-white mb-3 font-medium">Email</h4>
                <p className="text-muted text-sm whitespace-nowrap">
                  devfixter@gmail.com
                </p>
              </div>
              <div>
                <h4 className="title-s mb-4 text-foreground">Social Media</h4>
                <div className="flex gap-[10px] text-muted">
                  <span className="cursor-pointer hover:text-primary">
                   <FaFacebookF size={18} />
                  </span>
                  <span className="cursor-pointer hover:text-primary">
                     <FaLinkedinIn size={20} />
                  </span>
                  <span className="cursor-pointer hover:text-primary">
                  <IoLogoInstagram size={18}/>
                  </span>
                  <span className="cursor-pointer hover:text-primary">
                     <AiOutlineBehance size={25}/>
                  </span>
                  <span className="cursor-pointer hover:text-primary">
                     <FaDribbble size={18}/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Border & Copyright */}
        <div className="max-w-[1160px] mx-auto border-t border-[#191C28] mt-[54px]  text-center lg:text-center">
          <p className="text-[#B5BDE2] text-sm pt-[12px]">
            © 2026 DevFixter. All rights reserved.
            <span className="text-foreground ml-1">
              Design & Development <span className="text-[#B5BDE2]">by</span>  DevFixter
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
