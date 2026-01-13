'use client';

import React from 'react';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
    {
        title: "Free Scoping Call",
        description: "We start with a focused call to understand your product, current team setup, and delivery gaps. You bring the context. We help define where augmentation actually adds value.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        )
    },
    {
        title: "Experienced Product Engineers",
        description: "Our engineers are not freelancers dropped into tickets. They have real product experience and know how to work inside existing codebases, roadmaps, and delivery cycles.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 4"></path>
            </svg>
        )
    },
    {
        title: "Proven in Live Environments",
        description: "This is not theoretical staffing. Our teams have shipped features, handled production systems, and worked inside fast-moving product orgs with real users and real deadlines.",
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
        title: "Teams That Stay Consistent",
        description: "You work with the same people, not rotating resources. That means retained context, faster execution, and fewer mistakes over time.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            </svg>
        )
    },
    {
        title: "Iteration Until It Works",
        description: "If something is not clicking, we adjust. Roles, responsibilities, or scope can evolve as the product evolves. The goal is long-term fit, not short-term coverage.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12c-2.67 0-4-3-4-3s1.33-3 4-3 4 3 4 3-1.33 3-4 3Z"></path>
                <path d="M14 12c2.67 0 4 3 4 3s-1.33 3-4 3-4-3-4-3 1.33-3 4-3Z"></path>
            </svg>
        )
    },
    {
        title: "Aligned With Your Standards",
        description: "We adapt to your coding practices, documentation style, review process, and communication norms so the team feels internal, not external.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
            </svg>
        )
    },
    {
        title: "Integrated Into Your Tooling",
        description: "We work inside your existing stack and tools including repos, project management, CI, and communication channels. No parallel systems. No friction.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        )
    },
    {
        title: "Built for Delivery Visibility",
        description: "Clear ownership, predictable output, and transparent progress. You always know who is working on what and why.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L9 12z"></path>
                <path d="M12 15v5s1-.5 4-1c0-1.5-.5-3-.5-3L12 15z"></path>
            </svg>
        )
    },
    {
        title: "Support Beyond Onboarding",
        description: "We stay involved after ramp-up to handle scaling needs, performance feedback, and continuity so the team remains effective as requirements change.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
        )
    }
];

import { motion } from 'framer-motion';

export default function AcuityServiceFeatures() {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <motion.div
                className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >

                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#D1D9E0] text-[#516C83] mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#516C83] mr-3"></span>
                        <span className="font-aeonik text-xs font-medium uppercase tracking-widest">Why choose us</span>
                    </div>

                    <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight text-[#1E293B] max-w-4xl">
                        What Makes Our Team Augmentation Different
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {FEATURES.map((feature: FeatureItem, index: number) => (
                        <div
                            key={index}
                            className="group relative p-10 rounded-[18px] bg-[#F1F4F6] transition-all duration-500 hover:bg-[#516C83] cursor-pointer flex flex-col items-start gap-8 border border-transparent shadow-sm hover:shadow-2xl"
                        >
                            {/* Header: Icon + Heading */}
                            <div className="flex items-center gap-4">
                                <div className="text-[#1E293B] group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="font-aeonik text-2xl font-normal leading-tight text-[#1E293B] transition-all duration-300 group-hover:bg-[linear-gradient(94.13deg,#e8ecf0_0.14%,#506c83_153.8%)] group-hover:bg-clip-text group-hover:text-transparent inline-block">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="font-aeonik text-base text-[#1E293B]/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
