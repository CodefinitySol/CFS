'use client';

import { useState } from 'react';

const values = [
    {
        id: 1,
        title: 'Clarity over noise',
        description:
            'Most software problems come from poor decisions early on, not lack of tools. We focus on understanding the problem properly, defining clear scope, and making decisions that reduce complexity instead of adding to it.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.00003 12.75L12.554 16.307C12.835 16.588 13.292 16.588 13.573 16.307L18 11.88C18.666 11.214 18.666 10.134 18 9.46797L13.5 4.96797C12.834 4.30097 11.754 4.30097 11.088 4.96797L9.00003 7.05697" />
                <path d="M14.991 7.21899L13.116 9.09399" />
                <path d="M15.0001 11.25L11.4461 7.693C11.1651 7.412 10.7081 7.412 10.4271 7.693L6.00003 12.12C5.33403 12.786 5.33403 13.866 6.00003 14.532L10.5 19.032C11.166 19.699 12.246 19.699 12.912 19.032L15.0001 16.943" />
                <path d="M9.00894 16.781L10.8849 14.906" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Quality that holds up',
        description:
            'We build systems that remain stable after launch, not just during demos. That means clean architecture, maintainable code, and decisions that support long-term reliability.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22L12 19L7 22L8.523 12.89" />
                <circle cx="12" cy="8" r="2" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Adaptability with purpose',
        description:
            'We use modern tools and AI where they create real value. Every choice is intentional, based on impact, not trends.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Real partnerships',
        description:
            'We work as part of the product team, not an external vendor. Clear communication, ownership, and accountability are part of how we deliver consistent results.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22L12 19L7 22L8.523 12.89" />
                <circle cx="12" cy="8" r="2" />
            </svg>
        ),
    },
];

import { motion } from 'framer-motion';

export default function CoreValuesSection() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white px-6 py-10 lg:py-20 lg:px-8 xl:px-12">
            <motion.div
                className="mx-auto max-w-[1600px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >

                {/* Top Badge (Only visible on mobile if needed, but design puts it with title) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Side: Title */}
                    <div className="flex flex-col items-start gap-8">
                        <div className="inline-flex items-center rounded-full bg-[#CFD6DC] px-4 py-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#2B2A2B]">Our values</span>
                        </div>

                        <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#191819] xl:max-w-sm">
                            What drives how we build and deliver
                        </h2>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="flex flex-col">
                        {values.map((item) => {
                            const isOpen = openId === item.id;

                            const newLocal = <div className="flex items-center gap-6">
                                {/* Icon Box */}
                                <div className={`flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-xl border transition-colors duration-300 bg-[#F9F9FA]
                        ${isOpen ? 'border-[#2B2A2B] bg-[#F5F8FA] text-[#2B2A2B]' : 'border-gray-200 text-gray-500 group-hover:border-gray-300'}`}
                                >
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <span className={`font-aeonik text-lg sm:text-xl lg:text-2xl transition-colors duration-300
                        ${isOpen ? 'text-[#191819] font-medium' : 'text-[#4B474B] group-hover:text-[#191819]'}`}
                                >
                                    {item.title}
                                </span>
                            </div>;
                            return (
                                <div
                                    key={item.id}
                                    className="border-b border-gray-100"
                                >
                                    <button
                                        onClick={() => toggle(item.id)}
                                        className="group w-full flex items-center justify-between py-5 text-left transition-colors cursor-pointer"
                                    >
                                        {newLocal}

                                        {/* Expand/Collapse Button */}
                                        <div className={`flex h-10 w-10 sm:h-12 sm:w-16 items-center justify-center rounded-full border transition-all duration-300
                       ${isOpen ? 'border-[#2B2A2B] text-[#2B2A2B] rotate-180' : 'border-gray-300 text-gray-400 group-hover:border-gray-400'}`}
                                        >
                                            {isOpen ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            )}
                                        </div>
                                    </button>

                                    {/* Content */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-10' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pl-[72px] sm:pl-[80px] text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl font-aeonik">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
