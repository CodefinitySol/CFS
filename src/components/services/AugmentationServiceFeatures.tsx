'use client';

import React from 'react';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
    {
        title: "Product-level engineers",
        description: "Engineers who understand systems, not just tickets",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        )
    },
    {
        title: "Proven in production",
        description: "Experience working on live products with real users and constraints",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 4"></path>
            </svg>
        )
    },
    {
        title: "Consistent teams",
        description: "No rotation, no loss of context, no re-onboarding cycles",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
        )
    },
    {
        title: "Aligned with your workflow",
        description: "We work inside your stack, tools, and processes",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            </svg>
        )
    },
    {
        title: "Built for visibility",
        description: "Clear ownership, predictable output, and transparent progress",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12c-2.67 0-4-3-4-3s1.33-3 4-3 4 3 4 3-1.33 3-4 3Z"></path>
                <path d="M14 12c2.67 0 4 3 4 3s-1.33 3-4 3-4-3-4-3 1.33-3 4-3Z"></path>
            </svg>
        )
    },
    {
        title: "Flexible as you grow",
        description: "Teams scale and adjust as your product evolves",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
            </svg>
        )
    }
];

import { motion } from 'framer-motion';

export default function AugmentationServiceFeatures() {
    return (
        <section className="bg-white pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
            <motion.div
                className="mx-auto flex max-w-[1600px] flex-col items-center px-4 sm:px-6 lg:px-16 xl:px-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >

                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center rounded-full px-3 py-2 bg-[#D1D9E0] text-[#2B2A2B] mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                        <span className="font-aeonik text-xs font-medium uppercase tracking-widest">Why teams work with us</span>
                    </div>

                    <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-normal text-[#191819] max-w-2xl">
                        Why teams work with us
                    </h2>

                    <div className="mt-8 max-w-3xl space-y-4 text-center font-aeonik text-base leading-relaxed text-[#4D494D] sm:text-lg">
                        <p>
                            We embed engineers directly into your team, working inside your tools, codebase, and delivery process. No silos, no parallel systems, no communication gaps.
                        </p>
                        <p>
                            You get developers who understand how real products are built, not just how to complete isolated tasks.
                        </p>
                        <p>
                            We match engineers based on your stack, product complexity, and expectations so they contribute from day one.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {FEATURES.map((feature: FeatureItem, index: number) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-[12px] bg-[#F1F4F6] transition-all duration-500 hover:bg-[#2B2A2B] cursor-pointer flex flex-col items-start gap-8 border border-transparent shadow-sm hover:shadow-2xl"
                        >
                            {/* Header: Icon + Heading */}
                            <div className="flex items-center gap-4">
                                <div className="text-[#191819] group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="font-aeonik text-2xl font-normal leading-tight text-[#191819] transition-all duration-300 group-hover:bg-[linear-gradient(94.13deg,#e8ecf0_0.14%,#2B2A2B_153.8%)] group-hover:bg-clip-text group-hover:text-transparent inline-block">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="font-aeonik text-base text-[#191819] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
