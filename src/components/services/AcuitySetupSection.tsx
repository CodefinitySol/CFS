'use client';

import Image from 'next/image';

export default function AcuitySetupSection() {
    return (
        <section className="bg-[#17181B] py-20 lg:py-28 overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-[50%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 border border-white/5"
                            style={{
                                background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                            }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-white uppercase tracking-wider">Design services</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal leading-[1.1] tracking-tight max-w-2xl"
                            style={{
                                backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Acuity Scheduling Setup <br />& Styling For Squarespace
                        </h2>

                        {/* Description */}
                        <div className="space-y-6 max-w-xl">
                            <p className="font-aeonik text-base font-medium text-white">
                                Clean – clear – completely on brand.
                            </p>
                            <div className="space-y-4 font-aeonik text-white/70 leading-relaxed text-sm sm:text-base">
                                <p>
                                    This service connects Acuity Scheduling to your Squarespace site in a way that feels native (no awkward buttons – no confusing flows).
                                </p>
                                <p>
                                    Whether you offer coaching, consulting, therapy, or run a salon – we’ll set up your Squarespace booking system so it matches your brand style & makes booking simple.
                                </p>
                                <p>
                                    We work with online businesses, service providers, studio owners & creatives. If you’re looking for a professional Squarespace appointment scheduler that looks great & works hard – you’re in the right place.
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
                        <div className="flex flex-nowrap items-center gap-4 sm:gap-8 mt-4 overflow-x-auto no-scrollbar">
                            <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] flex-shrink-0">
                                <Image src="/marketplace.webp" alt="Marketplace Expert" fill className="object-contain" />
                            </div>
                            <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] flex-shrink-0">
                                <Image src="/community.webp" alt="Community Leader" fill className="object-contain" />
                            </div>
                            <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] flex-shrink-0">
                                <Image src="/member.webp" alt="Circle Member" fill className="object-contain" />
                            </div>
                        </div>
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

                </div>
            </div>
        </section>
    );
}
