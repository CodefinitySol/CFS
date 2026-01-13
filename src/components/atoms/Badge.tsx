import { ReactNode } from 'react';

export interface BadgeProps {
    variant?: 'default' | 'gradient' | 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
}

export default function Badge({
    variant = 'default',
    size = 'md',
    icon,
    children,
    className = '',
}: BadgeProps) {
    const baseStyles = 'inline-flex items-center rounded-full font-aeonik font-medium';

    const variantStyles = {
        default: 'bg-[#506C834D] text-[#506C83]',
        gradient: 'text-white',
        light: 'bg-[#CFD6DC] text-[#506C83]',
        dark: 'bg-[#AEBAC5] text-[#597589]',
    };

    const sizeStyles = {
        sm: 'px-3 py-1 text-xs',
        md: 'px-4 py-1.5 text-sm',
        lg: 'px-5 py-2 text-base',
    };

    const gradientStyle = variant === 'gradient'
        ? { background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(80, 108, 131, 0.3) 100%)' }
        : {};

    return (
        <span
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            style={gradientStyle}
        >
            {icon}
            {children}
        </span>
    );
}
