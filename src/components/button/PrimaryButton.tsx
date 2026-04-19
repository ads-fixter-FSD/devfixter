"use client";

import React, { ReactNode, ComponentType } from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset";
    className?: string; 
    icon?: ComponentType<{ size?: number | string }>;
    disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    href,
    type = "button",
    className = "",
    icon: Icon,
    disabled = false,
}) => {
    
    const commonClasses = `btn-primary-custom inline-flex items-center justify-center gap-[10px] px-[16px] h-[56px] ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    if (href && !disabled) {
        return (
            <Link href={href} className={commonClasses}>
                {children}
                {Icon && <Icon size={20} />}
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
            {children}
            {Icon && <Icon size={20} />}
        </button>
    );
};

export default PrimaryButton;