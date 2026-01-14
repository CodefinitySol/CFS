'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './Header';
import { Badge, Button, Heading, Paragraph } from './atoms';

export default function PortfolioHeroSection() {
    const badgeGradient = "linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(80, 108, 131, 0.3) 100%)";

    return (
        <section className="relative w-full bg-white pb-12 lg:pb-24">
            <Header isLight={true} />

            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 mt-4 sm:mt-8">
                {/* The Container Card with thick border */}
                <motion.div
                    className="relative rounded-[22px] sm:rounded-[22px] lg:rounded-[22px] p-2 sm:p-2 bg-[#ECECEC] overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* The Inner Dark Card */}
                    <div className="relative rounded-[16px] sm:rounded-[16px] lg:rounded-[16px] bg-[#17181B] px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-28 overflow-hidden">

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">

                            {/* Left Content */}
                            <div className="w-full lg:w-[45%] flex flex-col items-start gap-8">
                                {/* Badge */}
                                <Badge variant='gradient' size='md' icon={<span className="h-2 w-2 rounded-full bg-white mr-3"></span>}>Portfolio</Badge>

                                {/* Heading */}
                                <Heading level={1} variant='gradient' size='xl'>
                                    Squarespace Website Portfolio
                                </Heading>

                                {/* Description */}
                                <Paragraph size='lg' className='text-white/60'>Codefinity Solutions is a product-focused software development company. Browse a selection of our web, mobile, and AI-driven systems built for teams that demand reliability.</Paragraph>

                                {/* CTA Button */}
                                <Button variant='primary' className="!text-[#506c83]"
                                    icon={<svg className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#506c83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>}>
                                    Schedule a call
                                </Button>
                            </div>

                            {/* Right Image Content */}
                            <div className="w-full lg:w-[55%] relative">
                                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/portfolio-hero-img.webp"
                                        alt="Codefinity Portfolio Showcase"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Background Decorative patterns could be added here if needed */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
