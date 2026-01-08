'use client';

import { useState } from 'react';

const values = [
    {
        id: 1,
        title: 'Innovation and Adaptability',
        description: 'We embrace change and continuously evolve, ensuring our solutions stay ahead in a dynamic world.',
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
        title: 'Quality and Consistency',
        description: 'Delivering excellence is our priority. We maintain high standards to ensure reliability and lasting impact.',
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
        title: 'Authentic Connections',
        description: 'Collaboration is at the heart of what we do. By building genuine relationships with our clients and fellow designers, we create a space for honest feedback, innovative ideas.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
        ),
    },
];

export default function CoreValuesSection() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white px-6 py-10 lg:py-20 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-[1600px]">

                {/* Top Badge (Only visible on mobile if needed, but design puts it with title) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Side: Title */}
                    <div className="flex flex-col items-start gap-8">
                        <div className="inline-flex items-center rounded-full bg-[#CFD6DC] px-4 py-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#506C83] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#506C83]">Our Values</span>
                        </div>

                        <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#181A1D] max-w-xl">
                            Core Values That Shape Every Project And Partnership
                        </h2>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="flex flex-col">
                        {values.map((item) => {
                            const isOpen = openId === item.id;

                            return (
                                <div
                                    key={item.id}
                                    className="border-b border-gray-100 last:border-0"
                                >
                                    <button
                                        onClick={() => toggle(item.id)}
                                        className="group w-full flex items-center justify-between py-5 text-left transition-colors"
                                    >
                                        <div className="flex items-center gap-6">
                                            {/* Icon Box */}
                                            <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border transition-colors duration-300
                        ${isOpen ? 'border-[#506C83] bg-[#F5F8FA] text-[#506C83]' : 'border-gray-200 text-gray-500 group-hover:border-gray-300'}`}
                                            >
                                                <div className="w-6 h-6 sm:w-7 sm:h-7">
                                                    {item.icon}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <span className={`font-aeonik text-lg sm:text-xl lg:text-2xl transition-colors duration-300
                        ${isOpen ? 'text-[#181A1D] font-medium' : 'text-[#4B5563] group-hover:text-[#181A1D]'}`}
                                            >
                                                {item.title}
                                            </span>
                                        </div>

                                        {/* Expand/Collapse Button */}
                                        <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all duration-300
                       ${isOpen ? 'border-[#506C83] text-[#506C83] rotate-180' : 'border-gray-300 text-gray-400 group-hover:border-gray-400'}`}
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
            </div>
        </section>
    );
}
