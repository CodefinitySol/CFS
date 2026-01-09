'use client';

import React from 'react';
import Header from '../Header';
import ContactForm from '../ContactForm';
import Link from 'next/link';

export default function AcuityHeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col bg-[#E8ECF0]">
            {/* Header */}
            <Header isLight={true} />

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col justify-center py-20 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 xl:gap-32">

                    {/* Left Content */}
                    <div className="w-full lg:w-[50%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-5 py-2"
                            style={{
                                background: 'white',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                            }}
                        >
                            <span className="h-2 w-2 rounded-full bg-[#506C83] mr-3"></span>
                            <span className="font-aeonik text-xs font-medium text-[#506C83] tracking-wide uppercase">Available for work</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-aeonik text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-[1.1] tracking-tight text-[#1E293B]">
                            Acuity Scheduling For<br />
                            Squarespace Websites |<br />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10">by Crawford</span>
                                <div className="absolute inset-0 -m-1 border border-black/10 rounded-lg pointer-events-none"></div>
                            </span>
                        </h1>

                        {/* Description Section */}
                        <div className="space-y-6 max-w-xl">
                            <p className="font-aeonik text-lg font-medium text-[#1E293B]">
                                Book Smarter – Look Polished – Save Time
                            </p>
                            <div className="space-y-4 font-aeonik text-[#1E293B]/70 leading-relaxed text-base sm:text-lg">
                                <p>
                                    Online scheduling doesn’t have to look clunky or feel disconnected from your brand. Acuity Scheduling for Squarespace lets clients book straight from your site (no back-and-forth emails – no off-brand popups).
                                </p>
                                <p>
                                    Whether you’re a coach, consultant, or run a wellness studio – this setup creates a seamless booking flow that works with how you run your business.
                                </p>
                                <p className="font-medium text-[#1E293B]">
                                    Built-in design. Built-in confidence.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-10 py-5 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                            style={{ backgroundColor: '#5D7285' }}
                        >
                            <span className="font-aeonik text-base font-medium text-white">Request a quote</span>
                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Content - Form */}
                    <div className="w-full lg:w-[45%] xl:w-[40%] relative">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
