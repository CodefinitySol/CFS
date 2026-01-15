'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
    {
        id: 1,
        title: 'Products Shipped',
        value: '52+',
        description: 'Products built and actively running in production across different industries and stages.',
    },
    {
        id: 2,
        title: 'Years of Hands-On Delivery',
        value: '3+',
        description: 'Years of focused experience delivering web, mobile, AI, and infrastructure solutions with consistency.',
    },
    {
        id: 3,
        title: 'Client Satisfaction',
        value: '100%',
        description: 'Every client we currently work with continues to trust us with their product and development needs.',
    },
];

import Link from 'next/link';

function AnimatedValue({ value }: { value: string }) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    // Parse the number and suffix
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;
                    const duration = 2000; // 2 seconds

                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        // Ease out quart
                        const easeOut = 1 - Math.pow(1 - progress, 4);

                        setCount(Math.floor(easeOut * numericValue));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 } // Trigger when 10% visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [numericValue]);

    return (
        <span ref={elementRef} className="font-aeonik text-5xl sm:text-6xl text-[#181A1D] tracking-tight">
            {count}{suffix}
        </span>
    );
}

export default function RecordOfResultsSection() {
    return (
        <section>
            {/* Top Part - Gray Background */}
            <div className="bg-[#E8ECF0] px-6 py-20 lg:px-8 xl:px-12 pb-32 lg:pb-48">
                <div className="mx-auto max-w-[1600px]">
                    <motion.div
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Left Content */}
                        <div className="max-w-3xl flex flex-col items-start text-left">
                            {/* Badge */}
                            <div className="mb-8 inline-flex items-center rounded-full bg-[#BEC8D1] px-4 py-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#506C83] mr-2"></span>
                                <span className="font-aeonik text-xs font-medium text-[#506C83]">Our track record</span>
                            </div>

                            {/* Heading */}
                            <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#181A1D] mb-8">
                                A Record Of Results
                            </h2>

                            {/* Description */}
                            <p className="font-aeonik text-sm sm:text-base text-[#4B5563] max-w-xl">
                                Our growth has come from doing the work properly and standing behind it. These numbers reflect real products shipped, long-term client relationships, and systems that continue to run in production.
                            </p>
                        </div>

                        {/* Right Content - Button */}
                        <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-white transition-all hover:scale-105 hover:shadow-lg lg:mb-2"
                            style={{ backgroundColor: '#516C83' }}
                        >
                            <span className="font-aeonik text-base font-medium">Schedule a call</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </Link>

                    </motion.div>
                </div>
            </div>

            {/* Bottom Part - Split Background for Overlapping Effect */}
            <div className="bg-[#E8ECF0] lg:bg-gradient-to-b lg:from-[#E8ECF0] lg:from-50% lg:via-white lg:via-50% lg:to-white lg:to-100% px-6 pb-20 lg:px-8 xl:px-12">
                <div className="mx-auto max-w-[1600px] -mt-12 lg:-mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                className="bg-white rounded-[12px] p-4 lg:p-6 shadow-sm border border-black/5 flex flex-col h-full"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >

                                {/* Top Row: Title */}
                                <h3 className="font-aeonik text-lg font-medium text-[#181A1D] mb-12">
                                    {stat.title}
                                </h3>

                                {/* Middle Row: Arrow + Value */}
                                <div className="flex justify-between items-end mb-8 mt-auto">
                                    {/* Thin Arrow Icon */}
                                    <div className="mb-2 text-[#506C83]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="100" x2="12" y2="5"></line>
                                            <polyline points="5 12 12 5 19 12"></polyline>
                                        </svg>
                                    </div>
                                    {/* Value */}
                                    <AnimatedValue value={stat.value} />
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gray-100 mb-6"></div>

                                {/* Description */}
                                <p className="font-aeonik text-sm text-black">
                                    {stat.description}
                                </p>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
