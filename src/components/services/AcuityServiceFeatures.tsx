'use client';

import React from 'react';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
    {
        title: "Free Setup Consultation",
        description: "Let's start with a no-pressure call. I'll look at what you have now – if anything – and map out how to build a better Squarespace appointment scheduler that works for you.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        )
    },
    {
        title: "Recognized Squarespace Expert",
        description: "I've helped 700+ Squarespace websites go live – many with Acuity Scheduling. As a trusted expert & educator, I bring real experience to every setup.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 4"></path>
            </svg>
        )
    },
    {
        title: "Tried – Tested – Booked",
        description: "This isn't just about getting Acuity live. It's about building a booking system that actually gets used – that matches your flow – and feels like part of your brand.",
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
        title: "Clients Keep Coming Back",
        description: "People love working with me because I keep it simple. Quick replies – zero jargon – and no half-finished projects.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            </svg>
        )
    },
    {
        title: "Unlimited Revisions Until It Feels Right",
        description: "From button colors to wording on confirmation emails – we'll tweak until everything feels right.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12c-2.67 0-4-3-4-3s1.33-3 4-3 4 3 4 3-1.33 3-4 3Z"></path>
                <path d="M14 12c2.67 0 4 3 4 3s-1.33 3-4 3-4-3-4-3 1.33-3 4-3Z"></path>
            </svg>
        )
    },
    {
        title: "Branded Look & Feel",
        description: "No generic widgets here. Your Squarespace booking plugin will be styled to match your fonts, colors & layout – so it fits right in.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
            </svg>
        )
    },
    {
        title: "Connected To Your Tools",
        description: "From Zoom & Google Calendar to email lists & payment systems – I'll make sure your Squarespace Acuity setup works with what you're already using.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        )
    },
    {
        title: "Built With Visibility In Mind",
        description: "Every page includes foundational SEO so your service shows up in searches for online appointment scheduling or Squarespace calendar booking.",
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
        title: "Support That Sticks Around",
        description: "Need help after launch? No problem. I offer ongoing support options so your booking system doesn't fall apart the moment something changes.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
        )
    }
];

export default function AcuityServiceFeatures() {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col items-center">

                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#D1D9E0] text-[#516C83] mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#516C83] mr-3"></span>
                        <span className="font-aeonik text-xs font-medium uppercase tracking-widest">Why choose us</span>
                    </div>

                    <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight text-[#1E293B] max-w-4xl">
                        What Makes This Acuity Scheduling Service Different
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
            </div>
        </section>
    );
}
