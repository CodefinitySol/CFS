'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './Header';
import { Badge, Heading, Paragraph } from './atoms';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

export default function PortfolioHeroSection() {
    return (
        <section className="relative w-full bg-white pb-12 lg:pb-24">
            <Header isLight={true} />

            <div className="mx-auto mt-3 max-w-[1700px] px-4 sm:mt-4 sm:px-6 lg:px-12">
                {/* The Container Card with thick border */}
                <motion.div
                    className="relative rounded-[22px] sm:rounded-[22px] lg:rounded-[22px] p-2 sm:p-2 bg-[#ECECEC] overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* The Inner Dark Card */}
                    <div className="relative rounded-[16px] sm:rounded-[16px] lg:rounded-[16px] bg-[#191819] px-8 py-16 sm:px-12 sm:py-20 lg:px-24 lg:py-18 overflow-hidden">

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">

                            {/* Left Content */}
                            <div className="w-full lg:w-[45%] flex flex-col items-start gap-6">
                                {/* Badge */}
                                <Badge variant='gradient' size='md' icon={<span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>}>Portfolio</Badge>

                                {/* Heading */}
                                <Heading level={1} variant='gradient' size='lg'>
                                    Squarespace Website Portfolio
                                </Heading>

                                {/* Description */}
                                <Paragraph size='md' className='text-white'>Codefinity Solutions is a product-focused software development company. Browse a selection of our web, mobile, and AI-driven systems built for teams that demand reliability.</Paragraph>

                                <Link
                                    href={CALENDLY_BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/90 bg-white px-5 py-3 font-aeonik text-base font-medium text-[#2B2A2B] transition-all hover:border-white hover:shadow-lg"
                                >
                                    Schedule a call
                                    <svg className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#2B2A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right Image Content */}
                            <div className="w-full lg:w-[50%] relative">
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
