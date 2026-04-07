'use client';

import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi2';

const STATS = [
    {
        label: 'Projects Completed',
        value: '700+',
    },
    {
        label: 'Week Turnaround',
        value: '2-5',
    },
    {
        label: 'Client Satisfaction',
        value: '100%',
    }
];

export default function WhyChooseStatsSection() {
    return (
        <section className="bg-[#E8ECF0] py-24 sm:py-28 overflow-hidden lg:px-8">
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 bg-[#BEC8D1] w-fit">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                        <span className="font-aeonik text-xs font-medium text-[#2B2A2B] tracking-wide">Why choose us</span>
                    </span>
                    <h2 className="font-aeonik text-5xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-[#191819] mb-8">
                        Why Choose by Crawford
                    </h2>
                    <p className="font-aeonik text-md text-black max-w-2xl">
                        We&apos;ve helped businesses across the UK launch sleek, scalable Squarespace sites that reflect
                        their brand and drive results. Our focus on brand-aligned visuals, user experience, and fast
                        turnarounds means you get a website that works from day one.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[12px] p-6 flex flex-col justify-between min-h-[180px] border-[#E0E4E8] border-[1px]"
                        >
                            <div className="flex items-start justify-between">
                                <span className="font-aeonik text-lg font-medium text-black">{stat.label}</span>
                            </div>
                            <div className="flex items-end justify-between mt-8">
                                <HiArrowUp className="h-10 w-10 text-black" />
                                <span className="font-aeonik text-5xl font-normal text-transparent bg-clip-text bg-[linear-gradient(94.74deg,#191819_.26%,#2B2A2B_118.16%)]">
                                    {stat.value}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
