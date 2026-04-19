"use client";

import React, { ReactNode } from 'react';

interface GlassButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: React.ReactNode; 
    disabled?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
    children,
    onClick,
    type = "button",
    className = "",
    icon,
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                flex items-center justify-center 
                transition-all duration-300
                whitespace-nowrap overflow-hidden
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20 active:scale-95'}
                ${className}
            `}
            style={{
                width: '235px',
                height: '49px',
                gap: '10px',
                borderRadius: '12px',
                padding: '13px 16px',
                background: '#FFFFFF14',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)', // Safari support
            }}
        >
            {icon && (
                <span 
                    className="flex-shrink-0 flex items-center justify-center rounded-[4px]" 
                    style={{ 
                        background: '#B53BE2',
                        width: '24px', 
                        height: '24px' 
                    }}
                >
                    {icon}
                </span>
            )}
            
            <span className="leading-none text-white font-medium">
                {children}
            </span>
        </button>
    );
};

export default GlassButton;