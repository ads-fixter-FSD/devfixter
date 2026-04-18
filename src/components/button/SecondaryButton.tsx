"use client";

import React, { ReactNode, ComponentType } from 'react';
import Link from 'next/link';

interface SecondaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string; 
    type?: "button" | "submit" | "reset";
    className?: string; 
    icon?: ComponentType<{ size?: number | string }>;
    disabled?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    children,
    onClick,
    href,
    type = "button",
    className = "",
    icon: Icon,
    disabled = false,
}) => {
    
    const commonClasses = `btn-secondary-custom inline-flex items-center justify-center gap-[10px] w-[161px] h-[48px] ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;

    if (href && !disabled) {
        return (
            <Link href={href} className={commonClasses}>
                {children}
                {Icon && <Icon size={18} />}
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
            {Icon && <Icon size={18} />}
        </button>
    );
};

export default SecondaryButton;