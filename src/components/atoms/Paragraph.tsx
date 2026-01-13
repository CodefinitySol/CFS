import { ReactNode, HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'muted' | 'light';
    children: ReactNode;
    className?: string;
}

export default function Paragraph({
    size = 'md',
    variant = 'default',
    children,
    className = '',
    ...props
}: ParagraphProps) {
    const sizeStyles = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    };

    const variantStyles = {
        default: 'text-gray-900',
        muted: 'text-[#64748B]',
        light: 'text-white/90',
    };

    return (
        <p
            className={`font-aeonik leading-relaxed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </p>
    );
}
