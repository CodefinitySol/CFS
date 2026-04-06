'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header';
import { motion } from 'framer-motion';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

interface ServiceHeroSectionProps {
    badgeText: string;
    title: React.ReactNode;
    description: React.ReactNode;
    imageSrc: string;
    /** Match home hero: solid dark only. Set true to restore full-bleed background art. */
    showBackgroundImage?: boolean;
    bgImageSrc?: string;
    sectionBgColor?: string;
    imageOpacity?: number;
}

export default function ServiceHeroSection({
    badgeText,
    title,
    description,
    imageSrc,
    showBackgroundImage = false,
    bgImageSrc = '/bg-gradient.webp',
    sectionBgColor = '#191819',
    imageOpacity = 1
}: ServiceHeroSectionProps) {
    return (
        <section
            className="relative flex min-h-screen w-full flex-col overflow-hidden"
            style={{ backgroundColor: sectionBgColor }}
        >
            {/* Header */}
            <Header />

            {showBackgroundImage && (
                <div className="absolute inset-0 z-0">
                    <div style={{ opacity: imageOpacity }} className="absolute inset-0">
                        <Image
                            src={bgImageSrc}
                            alt=""
                            fill
                            priority
                            className="object-cover"
                            quality={100}
                        />
                    </div>
                </div>
            )}

            <motion.div
                className="relative z-10 mx-auto flex w-full max-w-[1920px] flex-1 flex-col justify-center px-4 pb-16 pt-10 sm:px-8 lg:px-16 lg:pb-22 lg:pt-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 backdrop-blur-sm"
                            style={{
                                background:
                                    'linear-gradient(90deg, rgba(232, 236, 240, 0.12) 0%, rgba(43, 42, 43, 0.35) 100%)',
                            }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-white tracking-wide">{badgeText}</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-aeonik font-normal leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-5xl">
                            {title}
                        </h1>

                        {/* Description */}
                        <div className="font-aeonik text-[#FFFFFF] max-w-lg whitespace-pre-line text-md">
                            {description}
                        </div>

                        {/* Schedule Call Button */}
                        <Link
                            href={CALENDLY_BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: '#2B2A2B' }}
                        >
                            <span className="font-aeonik text-sm font-medium text-white">Schedule a call</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[75%] relative">
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
            </motion.div>
        </section>
    );
}
