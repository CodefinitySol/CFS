'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';

export interface ChooseItem {
    title: string;
    description: string;
    icon: string;
}

interface ServiceWhyChooseSectionProps {
    badge: string;
    title: React.ReactNode;
    items: ChooseItem[];
}

export default function ServiceWhyChooseSection({
    badge,
    title,
    items
}: ServiceWhyChooseSectionProps) {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 bg-[#CFD6DC]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#516C83] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#516C83] tracking-wide">{badge}</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#181A1D]">
                            {title}
                        </h2>
                    </div>

                    {/* CTA Button */}
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#516C83] px-8 py-4 font-aeonik text-sm font-medium text-white transition-all hover:bg-[#405669] hover:shadow-lg self-start lg:self-auto cursor-pointer">
                        Schedule a call
                        <HiArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-start">
                            {/* Icon */}
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="object-contain"
                            />

                            {/* Content */}
                            <h3 className="font-aeonik text-2xl sm:text-3xl font-normal text-[#181A1D] mb-6 mt-6 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="font-aeonik text-base text-[#181A1D]/60 leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

