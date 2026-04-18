"use client";

import React, { ReactNode, ComponentType } from 'react';

interface GlassButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: ComponentType<{ size?: number | string }>;
    disabled?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
    children,
    onClick,
    type = "button",
    className = "",
    icon: Icon,
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn-glass-custom ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{
                width: '163px',
                height: '49px',
                padding: '13px 16px',
            }}
        >
            {Icon && <Icon size={20} />}
            {children}
        </button>
    );
};

export default GlassButton;