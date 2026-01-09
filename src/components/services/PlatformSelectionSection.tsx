'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineLightBulb } from 'react-icons/hi2';

interface PlatformSelectionSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    imageSrc: string;
    buttonText?: string;
}

export default function PlatformSelectionSection({
    title,
    description,
    imageSrc,
    buttonText = "Subscribe"
}: PlatformSelectionSectionProps) {
    const textGradient = {
        backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 0.14%, #506c83 153.8%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
                <div className="bg-[#516C83] rounded-[18px] overflow-hidden p-4 sm:p-4 lg:p-6 xl:p-8">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* Left: Image */}
                        <div className="w-full lg:w-[40%] relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src={imageSrc}
                                alt="Platform Selection Plateform"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 space-y-6">
                            <div className="space-y-4">
                                <h2
                                    className="font-aeonik text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal leading-[1.1] tracking-tight"
                                    style={textGradient}
                                >
                                    {title}
                                </h2>
                                <p className="font-aeonik text-sm sm:text-base text-white/60 leading-relaxed max-w-xl">
                                    {description}
                                </p>
                            </div>

                            {/* Subscription Form */}
                            <div className="relative max-w-md group">
                                <div className="flex items-center rounded-full bg-white/10 border border-white/20 p-1 backdrop-blur-sm transition-all group-within:border-white/40">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="flex-1 bg-transparent px-5 py-1.5 text-white placeholder-white/40 focus:outline-none font-aeonik text-xs sm:text-sm"
                                    />
                                    <button className="bg-white text-[#516C83] px-6 py-2.5 rounded-full font-aeonik text-xs sm:text-sm font-medium transition-all hover:bg-white/90 cursor-pointer">
                                        {buttonText}
                                    </button>
                                </div>
                            </div>

                            {/* Features Row */}
                            <div className="pt-2 flex flex-wrap gap-6 sm:gap-8">
                                <div className="flex items-center gap-2.5 text-white">
                                    <HiOutlineBookOpen className="w-4 h-4" />
                                    <span className="font-aeonik text-[10px] uppercase tracking-widest">Valuable Resources</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-white">
                                    <HiOutlineAcademicCap className="w-4 h-4" />
                                    <span className="font-aeonik text-[10px] uppercase tracking-widest">Exclusive Access</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-white">
                                    <HiOutlineLightBulb className="w-4 h-4" />
                                    <span className="font-aeonik text-[10px] uppercase tracking-widest">Expert Insights</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
