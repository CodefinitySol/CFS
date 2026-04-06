'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Top Background part (Header Area) */}
            <div className="bg-[#CFD7DE] pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-26 lg:pb-16">
                <motion.div
                    className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Content Header */}
                    <div className="flex flex-col items-center">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-3 py-1.5 bg-[#A2B0BC] text-[#2B2A2B] mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#5A565A] mr-2"></span>
                            <span className="font-aeonik text-xs uppercase">Process</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-aeonik text-3xl lg:text-5xl font-normal leading-tight text-[#191819] mb-4">
                            Our Web Design Process in Action
                        </h2>

                        {/* Descriptions */}
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <p className="font-aeonik text-md sm:text-md text-[#191819]">
                                Dive into our design process, explore our featured projects, and learn what sets us apart.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Middle Section with Split Background and Video */}
            <div className="relative">
                {/* Background Split for the Video Area */}
                <div className="absolute inset-0 flex flex-col">
                    <div className="h-[70%] bg-[#CFD7DE]" />
                    <div className="h-[30%] bg-white" />
                </div>

                <motion.div
                    className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Video Player / Thumbnail */}
                    <div className="w-full relative mx-auto group">
                        <div className="relative aspect-video w-full overflow-hidden rounded-[20px] sm:rounded-[40px] bg-black shadow-2xl border-[12px] border-[#BAC1C8]">
                            {!isPlaying ? (
                                <>
                                    {/* Thumbnail */}
                                    <Image
                                        src="/video-thumbnail.png"
                                        alt="Founder Video Thumbnail"
                                        fill
                                        className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                                    />

                                    {/* YouTube UI Overlays */}
                                    <div className="absolute inset-x-0 top-0 p-4 sm:p-6 flex items-center justify-between z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-white/20">
                                                <Image src="/jim.jpeg" alt="Founder" width={40} height={40} className="object-cover" />
                                            </div>
                                            <span className="text-white font-aeonik text-base font-medium drop-shadow-md">
                                                Acuity Scheduling Services for Businesses | by Crawford
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <button className="text-white hover:scale-110 transition-transform">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg>
                                            </button>
                                            <span className="text-white text-[10px] font-medium uppercase tracking-wider">Share</span>
                                        </div>
                                    </div>

                                    {/* Main Play Button */}
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute inset-0 flex items-center justify-center z-10"
                                    >
                                        <div className="bg-[#FF0000] rounded-2xl w-16 h-11 sm:w-20 sm:h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl group/play">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="sm:w-8 sm:h-8">
                                                <path d="M8 5V19L19 12L8 5Z" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Watch on YouTube branding */}
                                    <div className="absolute bottom-5 left-5 z-10">
                                        <div className="bg-black/80 rounded h-10 px-4 flex items-center gap-2 border border-white/10">
                                            <span className="text-white/80 text-[13px] font-aeonik">Watch on</span>
                                            <div className="flex items-center gap-1.5">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>
                                                <span className="text-white font-bold text-[13px] tracking-tight">YouTube</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <iframe
                                    src={`${VIDEO_URL}?autoplay=1`}
                                    className="absolute inset-0 h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Spacing part */}
            <div className="bg-white h-20 sm:h-24 lg:h-32" />
        </section>
    );
}
