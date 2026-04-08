'use client';

import React from 'react';
import Header from '../Header';
import ContactForm from '../molecules/ContactForm';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AcuityHeroSection() {
    return (
        <section className="relative w-full flex flex-col bg-[#E8ECF0]">
            {/* Header */}
            <Header isLight={true} />

            <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-4 sm:px-6 pb-10 pt-10 lg:px-16 lg:pb-22 lg:pt-12">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 xl:gap-32"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Left Content */}
                    <div className="w-full lg:w-[50%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-3 py-1"
                            style={{
                                background: 'white',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                            }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#2B2A2B] uppercase">Available for work</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-aeonik text-4xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal leading-[1.1] tracking-tight text-[#191819]">
                            Dedicated engineering teams that actually execute
                        </h1>

                        {/* Description Section */}
                        <div className="max-w-xl space-y-3 font-aeonik text-base leading-relaxed text-[#191819] sm:text-md">
                            <p>
                                Scale your product without slowing down hiring. We provide experienced engineers who integrate directly into your workflow and operate as part of your team from day one.
                            </p>
                            <p>
                                Whether you need to move faster, add capacity, or bring in specific expertise, we deliver engineers who understand real product development and take ownership of what they build.
                            </p>
                            <p>No handoffs. No friction. Just consistent delivery.</p>
                            <p className="font-medium text-md text-[#191819]">
                                Your roadmap. Our team. One system.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                            style={{ backgroundColor: '#5A565A' }}
                        >
                            <span className="font-aeonik text-sm font-medium text-white">Request a quote</span>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Content - Form */}
                    <div className="w-full lg:w-[45%] xl:w-[40%] relative">
                        <ContactForm isAugmentation={true} />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
