'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurOfficesSection() {
    return (
        <section className="bg-white py-10 lg:py-18 px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-[1600px]">

                {/* Header */}
                <motion.div
                    className="flex flex-col items-start gap-6 mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full bg-[#CFD6DC] px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#506C83] mr-2"></span>
                        <span className="font-aeonik text-xs font-medium text-[#506C83]">Our office</span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#181A1D]">
                        Where We Make It Happen
                    </h2>
                </motion.div>

                {/* Card */}
                <motion.div
                    className="group relative rounded-[12px] border border-gray-100 p-3 lg:p-3 transition-all duration-300 hover:bg-[#516C83] hover:border-[#516C83] hover:shadow-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Image */}
                        <div className="relative w-full lg:w-[300px] h-[200px] sm:h-[240px] lg:h-[220px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="/about-us/liverpool.webp"
                                alt="Liverpool Office"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-grow py-2 pr-4 lg:pr-0">

                            {/* Mobile Layout (< lg) */}
                            <div className="flex flex-col gap-8 lg:hidden w-full">
                                {/* Title */}
                                <h3 className="font-aeonik text-3xl text-[#506C83] transition-all duration-300">
                                    <span className="text-[#374151] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(94.74deg,#fff_.26%,#506c83_118.16%)]">
                                        Lahore
                                    </span>
                                </h3>

                                {/* Details List (Order: Address -> Phone -> Email) */}
                                <div className="flex flex-col gap-6">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <svg className="w-6 h-6 text-[#9CA3AF] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 21C16 17 20 13 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13 8 17 12 21Z" />
                                            <circle cx="12" cy="9" r="3" />
                                        </svg>
                                        <p className="font-aeonik text-base text-[#4B5563] group-hover:text-white transition-colors leading-relaxed max-w-[240px]">
                                            Located in Johar Town
                                            F76G+746, 330
                                            Block R, Phase 2
                                            Johar Town, Lahore
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-4">
                                        <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.84C8.77382 17.2481 6.72533 15.1996 5.13333 12.7833C3.43915 10.1863 2.38766 7.23053 2.05333 4.15332C2.02816 3.87593 2.06139 3.59648 2.15059 3.33267C2.23979 3.06886 2.38321 2.82662 2.57143 2.62137C2.75966 2.41613 2.98877 2.25253 3.24396 2.14093C3.49914 2.02933 3.77477 1.97235 4.05333 1.97332H7.05333C7.53767 1.96884 8.00693 2.14442 8.37517 2.46889C8.74341 2.79335 8.98877 3.24727 9.06666 3.74999C9.21235 4.85461 9.48281 5.93677 9.87333 6.97999C10.0296 7.39396 10.0634 7.84478 9.97089 8.27961C9.87841 8.71444 9.66344 9.11545 9.35166 9.43499L8.08166 10.705C9.50529 13.2073 11.581 15.283 14.0833 16.7067L15.3533 15.4367C15.6729 15.1249 16.0739 14.9099 16.5087 14.8174C16.9435 14.7249 17.3944 14.7587 17.8083 14.915C18.8515 15.3055 19.9337 15.576 21.0383 15.7217C21.5456 15.8003 22.0029 16.0504 22.3278 16.4239C22.6527 16.7974 22.8257 17.2718 22.8067 17.7617V17.76V16.92Z" />
                                        </svg>
                                        <span className="font-aeonik text-base text-[#4B5563] group-hover:text-white transition-colors">
                                            Available on request
                                        </span>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-4">
                                        <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
                                        </svg>
                                        <span className="font-aeonik text-base text-[#4B5563] group-hover:text-white transition-colors">
                                            hello@codefinitysolutions.com
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile Buttons */}
                                <div className="flex flex-row gap-4 w-full mt-4">
                                    <button className="flex-1 rounded-full border border-gray-200 py-3 px-6 font-aeonik text-sm font-medium text-[#181A1D] transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black">
                                        View Map
                                    </button>
                                    <button className="flex-1 rounded-full border border-gray-200 py-3 px-6 font-aeonik text-sm font-medium text-[#181A1D] transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black">
                                        Get in touch
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Layout (>= lg) */}
                            <div className="hidden lg:flex flex-row gap-0 w-full">
                                {/* Title Column - Left */}
                                <div className="lg:w-[200px] flex-shrink-0">
                                    <h3 className="font-aeonik text-3xl sm:text-3xl text-[#506C83] transition-all duration-300">
                                        <span className="text-[#374151] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(94.74deg,#fff_.26%,#506c83_118.16%)]">
                                            Lahore
                                        </span>
                                    </h3>
                                </div>

                                {/* Details & Buttons Columns - Right */}
                                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* Column 1: Address, Email, View Map */}
                                    <div className="flex flex-col justify-between gap-8 h-full">
                                        <div className="flex flex-col gap-8">
                                            {/* Address */}
                                            <div className="flex items-start gap-4">
                                                <svg className="w-6 h-6 text-[#9CA3AF] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path d="M12 21C16 17 20 13 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13 8 17 12 21Z" />
                                                    <circle cx="12" cy="9" r="3" />
                                                </svg>
                                                <p className="font-aeonik text-base text-[#4B5563] group-hover:text-white transition-colors leading-relaxed">
                                                    Located in Johar Town
                                                    F76G+746, 330
                                                    Block R, Phase 2
                                                    Johar Town, Lahore
                                                </p>
                                            </div>

                                            {/* Email */}
                                            <div className="flex items-center gap-4">
                                                <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
                                                </svg>
                                                <span className="font-aeonik text-base text-[#4B5563] group-hover:text-white transition-colors">
                                                    hello@codefinitysolutions.com
                                                </span>
                                            </div>
                                        </div>

                                        <button className="w-full rounded-full border border-gray-200 py-3 px-6 font-aeonik text-sm font-medium text-[#181A1D] transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black mt-auto">
                                            View Map
                                        </button>
                                    </div>

                                    {/* Column 2: Phone, Get in touch */}
                                    <div className="flex flex-col justify-between gap-8 h-full">
                                        <div className="flex flex-col gap-4">
                                            {/* Phone */}
                                            <div className="flex items-center gap-4">
                                                <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.84C8.77382 17.2481 6.72533 15.1996 5.13333 12.7833C3.43915 10.1863 2.38766 7.23053 2.05333 4.15332C2.02816 3.87593 2.06139 3.59648 2.15059 3.33267C2.23979 3.06886 2.38321 2.82662 2.57143 2.62137C2.75966 2.41613 2.98877 2.25253 3.24396 2.14093C3.49914 2.02933 3.77477 1.97235 4.05333 1.97332H7.05333C7.53767 1.96884 8.00693 2.14442 8.37517 2.46889C8.74341 2.79335 8.98877 3.24727 9.06666 3.74999C9.21235 4.85461 9.48281 5.93677 9.87333 6.97999C10.0296 7.39396 10.0634 7.84478 9.97089 8.27961C9.87841 8.71444 9.66344 9.11545 9.35166 9.43499L8.08166 10.705C9.50529 13.2073 11.581 15.283 14.0833 16.7067L15.3533 15.4367C15.6729 15.1249 16.0739 14.9099 16.5087 14.8174C16.9435 14.7249 17.3944 14.7587 17.8083 14.915C18.8515 15.3055 19.9337 15.576 21.0383 15.7217C21.5456 15.8003 22.0029 16.0504 22.3278 16.4239C22.6527 16.7974 22.8257 17.2718 22.8067 17.7617V17.76V16.92Z" />
                                                </svg>
                                                <span className="font-aeonik text-base text-[#4B5563] group-hover:text-white transition-colors">
                                                    Available on request
                                                </span>
                                            </div>
                                        </div>

                                        <button className="w-full rounded-full border border-gray-200 py-3 px-6 font-aeonik text-sm font-medium text-[#181A1D] transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black mt-auto">
                                            Get in touch
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
