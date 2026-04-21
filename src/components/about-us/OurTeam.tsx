
"use client";

import React from "react";
import Badge from "../shared/Badge";
import { TEAM_MEMBERS } from "@/constants/team";
import Image from "next/image";

// Swiper Components & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function OurTeam() {
  return (
    <div className="py-20 lg:py-30 px-3 md:px-0">
      <div className="custom-container flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-6 w-full lg:w-[734px]">
          <div className="flex flex-col items-center gap-3">
            <Badge>Our Team</Badge>
            <div className="text-center title-lg">
              Meet the Experts Behind <br className="hidden lg:block" />{" "}
              DevFixter
            </div>
          </div>
          <div className="text-center text-base text-[#9B9EA8]">
            Our team is made up of skilled developers, designers, and
            problem-solvers dedicated to building fast, scalable, and reliable
            digital solutions. We work together to turn ideas into powerful
            products.
          </div>
        </div>

        {/* --- Swiper Slider Section --- */}
        <div className="w-full py-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="team-swiper"
          >
           
            {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, index) => (
              <SwiperSlide
                key={`${member.id}-${index}`}
                className="max-w-[300px] md:max-w-[320px] py-4"
              >
                {({ isActive }) => (
                  <div
                    className={`relative rounded-[6px] overflow-hidden transition-all duration-500 h-[420px] shadow-xl border-2 border-white 
                    ${isActive ? "bg-[#1E232B] scale-105" : "bg-white"}`}
                  >
                    {isActive ? (
                      
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                        <div className="w-32 h-32 relative rounded-full border-4 border-gray-700 overflow-hidden mb-6">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-white text-2xl font-bold">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 font-medium mb-4">
                          {member.designation}
                        </p>
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                          {member.description}
                        </p>
                        <div className="flex gap-3">
                          {[
                            FaFacebookF,
                            FaInstagram,
                            FaTwitter,
                            FaLinkedinIn,
                          ].map((Icon, i) => (
                            <div
                              key={i}
                              className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform cursor-pointer"
                            >
                              <Icon size={14} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                  
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover opacity-80"
                      />
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #333;
          opacity: 0.3;
        }
        .team-swiper .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 5px;
          background: #1e232b;
          opacity: 1;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}
