'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

export interface ChooseItem {
    title: string;
    description: string;
    icon: string;
}

interface ServiceWhyChooseSectionProps {
    badge?: string;
    title?: React.ReactNode;
    items?: ChooseItem[];
}

const DEFAULT_CHOOSE_ITEMS: ChooseItem[] = [
    {
        title: "Certified Squarespace Expertise",
        description: "As experienced Squarespace experts, we know the platform inside and out, allowing us to push its capabilities to deliver a truly unique website.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Client-Centered Approach",
        description: "We prioritize your input at every step, ensuring your website feels authentically you.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Proven Results",
        description: "With 700+ successful projects completed, We've helped businesses like yours achieve their online goals with style and ease.",
        icon: "/services-section/choose-item-3.webp"
    }
];

export default function ServiceWhyChooseSection({
    badge = "Why choose us",
    title = <>Designing Websites With<br />Purpose And Passion</>,
    items = DEFAULT_CHOOSE_ITEMS
}: ServiceWhyChooseSectionProps) {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">

                {/* Header Section */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 bg-[#CFD6DC]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#2B2A2B] tracking-wide">{badge}</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#191819]">
                            {title}
                        </h2>
                    </div>

                    {/* CTA Button */}
                    <a
                        href={CALENDLY_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full bg-[#2B2A2B] px-8 py-4 font-aeonik text-sm font-medium text-white transition-all hover:bg-[#3A383A] hover:shadow-lg lg:self-auto"
                    >
                        Schedule a call
                        <HiArrowUpRight className="h-4 w-4" />
                    </a>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Icon */}
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="object-contain"
                            />

                            {/* Content */}
                            <h3 className="font-aeonik text-2xl sm:text-3xl font-normal text-[#191819] mb-6 mt-6 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="font-aeonik text-base text-[#191819]/60 leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

