'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header';

interface ServiceHeroSectionProps {
    badgeText: string;
    title: React.ReactNode;
    description: React.ReactNode;
    imageSrc: string;
    bgImageSrc?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    sectionBgColor?: string;
    imageOpacity?: number;
}

export default function ServiceHeroSection({
    badgeText,
    title,
    description,
    imageSrc,
    bgImageSrc = '/bg-gradient.webp',
    titleClassName = 'text-4xl sm:text-5xl lg:text-6xl',
    descriptionClassName = 'text-lg',
    sectionBgColor = '#181A1D',
    imageOpacity = 1
}: ServiceHeroSectionProps) {
    return (
        <section
            className="relative w-full min-h-screen overflow-hidden flex flex-col"
            style={{ backgroundColor: sectionBgColor }}
        >
            {/* Header */}
            <Header />

            {/* Background Image with Dark Mask */}
            <div className="absolute inset-0 z-0">
                <div style={{ opacity: imageOpacity }} className="absolute inset-0">
                    <Image
                        src={bgImageSrc}
                        alt="Background Gradient"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                    />
                </div>
            </div>

            <div className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-center py-20 lg:py-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 backdrop-blur-sm"
                            style={{
                                background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                            }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-white tracking-wide">{badgeText}</span>
                        </div>

                        {/* Heading */}
                        <h1 className={`font-aeonik font-normal leading-[1.1] tracking-tight ${titleClassName}`}>
                            {title}
                        </h1>

                        {/* Description */}
                        <div className={`font-aeonik text-[#E8ECF0]/80 leading-relaxed max-w-xl ${descriptionClassName}`}>
                            {description}
                        </div>

                        {/* Schedule Call Button */}
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                            style={{ backgroundColor: '#516C83' }}
                        >
                            <span className="font-aeonik text-sm font-medium text-white">Schedule a call</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[55%] relative">
                        <div className="relative w-full aspect-[4/3] lg:aspect-[16/10]">
                            <Image
                                src={imageSrc}
                                alt="Service Visualization"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
