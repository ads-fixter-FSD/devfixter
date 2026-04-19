"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BadgeProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  href,
  className = "",
}) => {
  
  const content = (
    <>
      <div className="flex items-center justify-center w-5 h-5 rounded-[6px] bg-[#FF58410D] backdrop-blur-[16px] shadow-[inset_0px_-4px_9px_0px_#27BBFF52]">
        <span className="text-white text-[14px] font-light leading-none select-none">
          <Image src={'/chevron-left.png'} width={16} height={16} alt='right arrow' />
        </span>
      </div>
      <span className="text-[14px] font-normal leading-[140%] bg-gradient-to-r from-[#B5BDE2] to-[rgba(181,189,226,0.55)] bg-clip-text text-transparent">
        {children}
      </span>
    </>
  );

  const containerClasses = `inline-flex items-center gap-[10px] ${className}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
};

export default Badge;