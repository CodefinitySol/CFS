'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface GrowthFeature {
    title: string;
    description: string;
    icon: string;
}

interface GrowthSectionProps {
    badge?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    techStack?: string[];
    features?: GrowthFeature[];
}

const DEFAULT_FEATURES: GrowthFeature[] = [
    {
        title: "Squarespace, Mastered",
        description: "We've built hundreds of Squarespace websites. We know how to push the platform without breaking it—and when to add custom code to elevate function.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Strategic Design",
        description: "We don't design in a vacuum. Every layout decision is informed by your goals, your audience, and your brand voice.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Built To Convert",
        description: "Strong visuals are important—but structure is what converts. We make sure your site does both.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Seamless Functionality",
        description: "Whether it's an online store, booking system, portfolio, or blog—to ensure your website works as hard as you do.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Collaborative Process",
        description: "We work with you directly throughout. No handoffs. No surprises.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "You Own Your Site",
        description: "No ongoing retainers, no confusing IP clauses. You'll walk away with a website you can confidently manage—or have us continue to manage it for you.",
        icon: "/services-section/offer-item-6.webp"
    }
];

export default function GrowthSection({
    badge = "What we offer",
    title = "Designed For Growth, Not Just Launch",
    description = "Your website is your first impression. It's also your infrastructure. That's why our custom Squarespace web design projects are built with your future in mind. From scalable page architecture to CMS-integrated content systems, we design sites that can evolve with your business.",
    techStack,
    features = DEFAULT_FEATURES
}: GrowthSectionProps) {
    const textGradient = {
        backgroundImage: 'linear-gradient(94.13deg, rgb(232, 236, 240) 0.14%, rgb(80, 108, 131) 153.8%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const badgeGradient = {
        background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(80, 108, 131, 0.3) 100%)',
    };

    return (
        <section className="bg-[#181A1D] py-16 sm:py-24 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">

                {/* Header Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-8"
                        style={badgeGradient}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60 mr-2"></span>
                        <span className="font-aeonik text-xs font-medium text-white tracking-wide">{badge}</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight mb-8 whitespace-pre-line"
                        style={textGradient}
                    >
                        {title}
                    </h2>

                    {/* Description */}
                    <div className="font-aeonik text-base text-[#E8ECF0] leading-relaxed max-w-xl">
                        {description}
                    </div>

                    <div className="mt-4 font-aeonik text-base text-[#E8ECF0]/70 leading-relaxed">
                        {techStack && techStack.map((tech, index) => (
                            <span key={index} className="inline-flex items-center rounded-full px-4 py-1.5 mr-2 mt-2"
                                style={badgeGradient}
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-white/60 mr-2"></span>
                                <span className="font-aeonik text-xs font-medium text-white tracking-wide">{tech}</span>
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#212327]/40 border border-white/5 rounded-[12px] p-10 flex flex-col items-start gap-12 transition-all duration-300 hover:bg-[#212327]/60 hover:border-white/10 group h-full"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >

                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={50}
                                height={50}
                                className="object-contain"
                            />

                            <div className="flex flex-col gap-6">
                                {/* Feature Title */}
                                <h3 className="font-aeonik text-2xl font-normal tracking-tight"
                                    style={textGradient}
                                >
                                    {feature.title}
                                </h3>

                                {/* Feature Description */}
                                <p className="font-aeonik text-base text-[#E8ECF0] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

