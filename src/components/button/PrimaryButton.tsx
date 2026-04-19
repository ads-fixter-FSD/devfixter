"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset";
    className?: string; 
    icon?: ReactNode; 
    disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    href,
    type = "button",
    className = "",
    icon,
    disabled = false,
}) => {
    
    const commonClasses = `btn-primary-custom inline-flex items-center justify-center gap-[10px] min-w-[163px] h-[56px] transition-all duration-300 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    const content = (
        <>
            {children}
            {icon && <span className="flex items-center">{icon}</span>}
        </>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={commonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={commonClasses}
        >
            {content}
        </button>
    );
};

export default PrimaryButton;