'use client';

import React from 'react';
import Image from 'next/image';

export default function AcuityProjectSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 lg:py-24">
            {/* Background Container with Cross markers at corners */}
            <div className="relative mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16 xl:px-20">

                {/* Colored Background Layer */}
                <div
                    className="absolute inset-x-6 sm:inset-x-10 lg:inset-x-16 xl:inset-x-20 inset-y-0 z-0 bg-[#DDE3E9] rounded-none shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]"
                />

                {/* Decorative Crosses at corners of the colored container */}
                <div className="absolute left-6 top-0 z-20 -translate-x-1/2 -translate-y-1/2 text-[#5D7285] sm:left-10 lg:left-16 xl:left-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 4V20M4 12H20" />
                    </svg>
                </div>
                <div className="absolute right-6 top-0 z-20 translate-x-1/2 -translate-y-1/2 text-[#5D7285] sm:right-10 lg:right-16 xl:right-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 4V20M4 12H20" />
                    </svg>
                </div>
                <div className="absolute left-6 bottom-0 z-20 -translate-x-1/2 translate-y-1/2 text-[#5D7285] sm:left-10 lg:left-16 xl:left-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 4V20M4 12H20" />
                    </svg>
                </div>
                <div className="absolute right-6 bottom-0 z-20 translate-x-1/2 translate-y-1/2 text-[#5D7285] sm:right-10 lg:right-16 xl:right-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 4V20M4 12H20" />
                    </svg>
                </div>

                {/* Content Section */}
                <div className="relative z-10 py-16 sm:py-20 lg:py-24 xl:py-28 px-8 sm:px-12 lg:px-20 xl:px-24">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 xl:gap-32">

                        {/* Left Content */}
                        <div className="flex-1 flex flex-col items-start gap-8">
                            {/* Badge */}
                            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#B9C6D1] text-[#5D7285]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#5D7285] mr-2"></span>
                                <span className="font-aeonik text-[11px] font-medium uppercase tracking-wider">Start your project</span>
                            </div>

                            {/* Heading */}
                            <h2 className="font-aeonik text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-normal leading-[1.05] tracking-tight text-[#1E293B]">
                                Ready To Book Smarter?
                            </h2>

                            {/* Description */}
                            <p className="font-aeonik text-base sm:text-lg text-[#1E293B]/70 leading-relaxed max-w-xl">
                                Join the businesses already using custom Squarespace scheduling to save time + stay on brand. Book a free discovery call today - and let's build a booking system that actually works for you.
                            </p>

                            {/* CTA + Social Proof */}
                            <div className="flex flex-wrap items-center gap-8 mt-10">
                                <button className="inline-flex items-center gap-3 rounded-full bg-[#5D7285] px-8 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                                >
                                    <span className="font-aeonik text-base font-medium text-white whitespace-nowrap">Schedule a call</span>
                                    <svg className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <div className="flex items-center">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm">
                                                <Image
                                                    src={i === 1 ? "/jim.jpeg" : i === 2 ? "/person.webp" : "/item-1.png"}
                                                    alt="User"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-aeonik text-base font-medium text-[#5D7285] leading-tight mb-0.5 whitespace-nowrap">700+ people</div>
                                        <div className="font-aeonik text-xs text-[#1E293B]/40 whitespace-nowrap">loved working with Sam</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="w-full lg:w-[420px] xl:w-[460px]">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block font-aeonik text-sm font-medium text-[#5D7285]">Name <span className="text-[#5D7285]/60 text-xs ml-0.5">*</span></label>
                                        <input type="text" placeholder="Enter full name" className="w-full bg-white rounded-xl px-5 py-3.5 border-none focus:outline-none focus:ring-2 focus:ring-[#5D7285]/10 text-[#1E293B] placeholder-[#1E293B]/30 font-aeonik transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-aeonik text-sm font-medium text-[#5D7285]">Email <span className="text-[#5D7285]/60 text-xs ml-0.5">*</span></label>
                                        <input type="email" placeholder="Enter email" className="w-full bg-white rounded-xl px-5 py-3.5 border-none focus:outline-none focus:ring-2 focus:ring-[#5D7285]/10 text-[#1E293B] placeholder-[#1E293B]/30 font-aeonik transition-all text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-aeonik text-sm font-medium text-[#5D7285]">Subject <span className="text-[#5D7285]/60 text-xs ml-0.5">*</span></label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-white rounded-xl px-5 py-3.5 border-none focus:outline-none focus:ring-2 focus:ring-[#5D7285]/10 text-[#1E293B]/50 font-aeonik cursor-pointer transition-all text-sm">
                                            <option value="">Select one</option>
                                            <option value="acuity">Acuity Setup</option>
                                            <option value="custom">Custom Design</option>
                                            <option value="migration">Website Migration</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#5D7285]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-aeonik text-sm font-medium text-[#5D7285]">Message <span className="text-[#5D7285]/60 text-xs ml-0.5">*</span></label>
                                    <textarea rows={5} placeholder="How we can help you?" className="w-full bg-white rounded-xl px-5 py-3.5 border-none focus:outline-none focus:ring-2 focus:ring-[#5D7285]/10 text-[#1E293B] placeholder-[#1E293B]/30 font-aeonik resize-none transition-all text-sm"></textarea>
                                </div>
                                <button className="w-full rounded-full bg-[#5D7285] py-4 text-white font-aeonik text-base font-medium transition-all hover:bg-[#4A5D6D] hover:shadow-xl mt-2">
                                    Submit enquiry
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
