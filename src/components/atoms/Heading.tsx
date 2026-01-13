import { ReactNode, HTMLAttributes, createElement } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: 'default' | 'gradient';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    children: ReactNode;
    className?: string;
}

export default function Heading({
    level = 2,
    variant = 'default',
    size = 'lg',
    children,
    className = '',
    ...props
}: HeadingProps) {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    const sizeStyles = {
        xs: 'text-xl sm:text-2xl',
        sm: 'text-2xl sm:text-3xl',
        md: 'text-3xl sm:text-4xl',
        lg: 'text-4xl sm:text-5xl',
        xl: 'text-5xl sm:text-6xl',
        '2xl': 'text-6xl sm:text-7xl',
        '3xl': 'text-7xl sm:text-8xl',
    };

    const gradientStyle = variant === 'gradient' ? {
        backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    } : {};

    const baseStyles = 'font-aeonik font-normal leading-tight tracking-tight';
    const variantClass = variant === 'gradient' ? 'bg-clip-text text-transparent' : '';

    return createElement(
        Tag,
        {
            className: `${baseStyles} ${sizeStyles[size]} ${variantClass} ${className}`,
            style: gradientStyle,
            ...props
        },
        children
    );
}
