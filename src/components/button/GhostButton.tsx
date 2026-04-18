"use client";

import React, { ReactNode, ComponentType } from 'react';

interface GhostButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: ComponentType<{ size?: number | string }>;
    disabled?: boolean;
}

const GhostButton: React.FC<GhostButtonProps> = ({
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
            className={`btn-ghost-custom ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{
                width: '161px',
                height: '48px',
                padding: '13px 16px',
            }}
        >
            {children}
            {Icon && <Icon size={18} />}
        </button>
    );
};

export default GhostButton;