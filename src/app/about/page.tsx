import OurStory from '@/components/about-us/OurStory'
import WhatWeDo from '@/components/about-us/WhatWeDo'
import GhostButton from '@/components/button/GhostButton'
import GlassButton from '@/components/button/GlassButton'
import PrimaryButton from '@/components/button/PrimaryButton'
import Badge from '@/components/shared/Badge'
import Hero from '@/components/shared/Hero'
import Image from 'next/image'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import HowWeBuild from './_component/HowWeBuild'

export default function page() {
  return (
    <div>
        <Hero
      badge={
        <Badge>
           <span className="flex items-center">
             <span className="opacity-50"></span> About DevFixter
           </span>
        </Badge>
      }
      title={
        <>Building Powerful Digital <br /> Solutions for Modern Businesses</>
      }
      description="At DevFixter, we combine strategy, design, and development to create products that are fast, reliable, and built for growth. From simple websites to complex web applications — we build solutions that make an impact."
      primaryBtn={
        <PrimaryButton icon={<FiArrowRight />} className="!w-[136px] !rounded-[12px">
          Get Started
        </PrimaryButton>
      }
    secondaryBtn={
  <GlassButton 
  icon={<Image src="/logo.png" width={13} height={13} alt="icon" />} 
  className="!w-[235px] !h-[58px]"
>
  Book a Free Consultation
</GlassButton>
}
    />




 
    <OurStory></OurStory>
    <HowWeBuild />
    <WhatWeDo></WhatWeDo>
    </div>
  )
}
