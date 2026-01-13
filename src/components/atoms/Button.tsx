import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'cta' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-aeonik font-medium transition-all cursor-pointer';

    const variantStyles = {
        primary: 'border border-white/90 bg-white text-gray-900 hover:border-white hover:shadow-lg',
        secondary: 'bg-[#374151] text-white hover:bg-[#4b5563]',
        cta: 'bg-[#506C83] text-white hover:bg-[#405669] hover:shadow-xl',
        ghost: 'bg-transparent text-white hover:bg-white/10',
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-7 py-3.5 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
        </button>
    );
}
