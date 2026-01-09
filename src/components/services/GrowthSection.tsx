'use client';

import React from 'react';
import Image from 'next/image';

export interface GrowthFeature {
    title: string;
    description: string;
    icon: string;
}

interface GrowthSectionProps {
    badge: string;
    title: React.ReactNode;
    description: React.ReactNode;
    features: GrowthFeature[];
}

export default function GrowthSection({
    badge,
    title,
    description,
    features
}: GrowthSectionProps) {
    const textGradient = {
        backgroundImage: 'linear-gradient(94.13deg, rgb(232, 236, 240) 0.14%, rgb(80, 108, 131) 153.8%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const badgeGradient = {
        background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(80, 108, 131, 0.3) 100%)',
    };

    return (
        <section className="bg-[#181A1D] py-16 sm:py-24 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">

                {/* Header Section */}
                <div className="max-w-4xl mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-8"
                        style={badgeGradient}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60 mr-2"></span>
                        <span className="font-aeonik text-xs font-medium text-white tracking-wide">{badge}</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight mb-8"
                        style={textGradient}
                    >
                        {title}
                    </h2>

                    {/* Description */}
                    <div className="font-aeonik text-base text-[#E8ECF0]/70 leading-relaxed max-w-3xl">
                        {description}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#212327]/40 border border-white/5 rounded-[24px] p-10 flex flex-col items-start gap-12 transition-all duration-300 hover:bg-[#212327]/60 hover:border-white/10 group h-full"
                        >

                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={50}
                                height={50}
                                className="object-contain"
                            />

                            <div className="flex flex-col gap-6">
                                {/* Feature Title */}
                                <h3 className="font-aeonik text-2xl font-normal tracking-tight"
                                    style={textGradient}
                                >
                                    {feature.title}
                                </h3>

                                {/* Feature Description */}
                                <p className="font-aeonik text-base text-[#E8ECF0]/50 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

