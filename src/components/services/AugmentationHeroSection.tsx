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

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col justify-center pt-10 pb-10 lg:pt-12 lg:pb-22">
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
                            <span className="h-1.5 w-1.5 rounded-full bg-[#506C83] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#506C83] uppercase">Available for work</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-aeonik text-4xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal leading-[1.1] tracking-tight text-[#1E293B]">
                            Dedicated Development Teams by
                            <span className="relative inline-block px-4 py-2 ml-2">
                                <span
                                    className="relative z-10"
                                >
                                    Codefinity
                                </span>
                                <span
                                    className="absolute inset-0 z-0 bg-[url('/squareborder.png')] bg-[length:100%_100%] bg-center bg-no-repeat brightness-0"
                                    aria-hidden="true"
                                />
                            </span>
                        </h1>

                        {/* Description Section */}
                        <div className="space-y-3 max-w-xl">
                            <p className="font-aeonik text-md font-medium text-[#1E293B]">
                                Scale faster. Ship consistently. Stay in control.
                            </p>
                            <div className="space-y-2 font-aeonik text-[#1E293B] leading-relaxed text-base sm:text-md">
                                <p>
                                    Hiring shouldn’t slow your product down. Our team augmentation model gives you access to experienced developers who plug directly into your workflow and work as an extension of your internal team.
                                </p>
                                <p>
                                    Whether you need to speed up delivery, cover skill gaps, or scale without long-term hiring risk, we provide engineers who understand real-world product development and take ownership from day one.
                                </p>
                                <p>
                                    No handoffs. No friction. Just focused execution.
                                </p>
                                <p className="font-medium text-md text-[#1E293B]">
                                    Your roadmap. Our people. One team.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                            style={{ backgroundColor: '#5D7285' }}
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
