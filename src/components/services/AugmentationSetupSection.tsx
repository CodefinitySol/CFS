'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AcuitySetupSection() {
    return (
        <section className="bg-[#17181B] py-20 lg:py-28 overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-[50%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 border border-white/5"
                            style={{
                                background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                            }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-white uppercase tracking-wider">Team augmentation</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-aeonik text-3xl sm:text-3xl lg:text-3xl xl:text-4xl font-normal leading-[1.1] tracking-tight max-w-2xl"
                            style={{
                                backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Dedicated Team Augmentation
                            Built to Fit Your Product
                        </h2>

                        {/* Description */}
                        <div className="space-y-6 max-w-xl">
                            <p className="font-aeonik text-base font-medium text-white">
                                Clean collaboration. Clear ownership. Fully aligned with your workflow.
                            </p>
                            <div className="space-y-4 font-aeonik text-white/70 leading-relaxed text-sm sm:text-base">
                                <p>
                                    This service embeds experienced engineers directly into your product team, working inside your tools, processes, and delivery rhythm. No silos. No hand-offs. Just people who understand how real products are built and shipped.
                                </p>
                                <p>
                                    Whether you need frontend support, backend depth, or full-stack execution, we match you with developers who align with your stack, communication style, and expectations from day one.
                                </p>
                                <p>
                                    We work with startups, scale-ups, and product teams that want speed without sacrificing quality. If you’re looking for a reliable extension of your internal team that delivers consistently and takes ownership, you’re in the right place.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="inline-flex items-center gap-3 rounded-full px-8 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group mt-2"
                            style={{ backgroundColor: '#5D7285' }}
                        >
                            <span className="font-aeonik text-base font-medium text-white whitespace-nowrap">Schedule a call</span>
                            <svg className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Awards */}
                        {/* <div className="flex flex-nowrap items-center gap-4 sm:gap-8 mt-4 overflow-x-auto no-scrollbar">
                            <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] flex-shrink-0">
                                <Image src="/marketplace.webp" alt="Marketplace Expert" fill className="object-contain" />
                            </div>
                            <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] flex-shrink-0">
                                <Image src="/community.webp" alt="Community Leader" fill className="object-contain" />
                            </div>
                            <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] flex-shrink-0">
                                <Image src="/member.webp" alt="Circle Member" fill className="object-contain" />
                            </div>
                        </div> */}
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-[50%] relative">
                        <div className="relative aspect-square w-full rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src="/services-section/design-service-img.webp"
                                alt="Acuity Design Service"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
