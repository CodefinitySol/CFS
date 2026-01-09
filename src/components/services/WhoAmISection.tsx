'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { HiArrowUpRight, HiCheck } from 'react-icons/hi2';

function AnimatedNumber({ value }: { value: string }) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    const prefix = value.startsWith('0') && numericValue < 10 ? '0' : '';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;
                    const duration = 2000;

                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 4);
                        setCount(Math.floor(easeOut * numericValue));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [numericValue]);

    return (
        <span ref={elementRef}>
            {prefix}{count}{suffix}
        </span>
    );
}

const STATS = [
    { label: "Successful Websites", value: "700+" },
    { label: "Awards Won", value: "05" },
    { label: "Client Satisfaction", value: "100%" }
];

const FEATURES = [
    "Fully personalized to match your brand.",
    "Optimized for all devices.",
    "User-friendly navigation and SEO-ready."
];

export default function WhoAmISection() {
    return (
        <section className="bg-[#E8ECF0] py-16 sm:py-24 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 bg-[#BEC8D1]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#516C83] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#516C83] tracking-wide">Who am I?</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#181A1D] mb-6">
                            Design Solutions That Bring Your Vision To Life
                        </h2>

                        {/* Description */}
                        <p className="font-aeonik text-sm sm:text-base text-[#181A1D]/80 leading-relaxed mb-8">
                            Expert custom Squarespace web design services that bring your unique vision to life with a custom Squarespace website tailored to your brand&apos;s identity. Whether you&apos;re a small business, creative professional, or entrepreneur, I craft responsive, aesthetically pleasing, and functional designs that captivate your audience and achieve your goals.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-10">
                            {FEATURES.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-[#181A1D]/80">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#516C83] flex items-center justify-center">
                                        <HiCheck className="text-white w-3 h-3" />
                                    </div>
                                    <span className="font-aeonik text-sm sm:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-aeonik text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-lg cursor-pointer"
                            style={{ backgroundColor: '#516C83', color: 'white' }}
                        >
                            Schedule a call
                            <HiArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Right Image with Stats Overlay */}
                    <div className="w-full lg:flex-1 max-w-[500px] lg:max-w-none">
                        {/* Outer Frame/Border */}
                        <div className="relative p-2 rounded-[20px] bg-[#D6DADE]">
                            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[12px] bg-gray-200">
                                <Image
                                    src="/services-section/who-am-i.webp"
                                    alt="Sam Crawford at work"
                                    fill
                                    className="object-cover"
                                />

                                {/* Stats Overlay */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-[16px] p-5 sm:p-6 grid grid-cols-3 gap-2 border border-white/20">
                                        {STATS.map((stat, index) => (
                                            <div key={index} className="flex flex-col items-center text-center">
                                                <div className="font-aeonik text-xl sm:text-2xl font-normal text-white mb-0.5">
                                                    <AnimatedNumber value={stat.value} />
                                                </div>
                                                <div className="font-aeonik text-[8px] sm:text-[9px] text-white/60 uppercase tracking-widest whitespace-nowrap">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
