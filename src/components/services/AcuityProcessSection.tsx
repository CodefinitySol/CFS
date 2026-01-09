'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IoCheckmarkCircle } from 'react-icons/io5';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Onboarding",
        items: [
            "Initial consult call to learn your website goals",
            "Comprehensive onboard form",
            "Proposal to get started",
            "Collection of assets",
            "Project 'hub' setup"
        ],
        image: "/services-section/process-1.webp"
    },
    {
        number: "02",
        title: "Building Your Website",
        items: [
            "First homepage web design + video walkthrough",
            "Feedback round + wider website build + video walkthrough",
            "Target feedback round using bespoke feedback software",
            "We repeat this until you're 100% satisfied with your Squarespace website design and beautiful website"
        ],
        image: "/services-section/process-2.webp"
    },
    {
        number: "03",
        title: "Offboard",
        items: [
            "Finalisation call",
            "Confirmation of 100% satisfaction",
            "Hosting and domain setup",
            "Comprehensive offboard training",
            "30 days of free email assistance",
            "Ownership handover"
        ],
        image: "/services-section/process-3.webp"
    }
];

export default function AcuityProcessSection() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="bg-[#D1D7DD] py-12 sm:py-12 overflow-hidden mt-10">
            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#AEBAC4] text-[#1E293B] mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1E293B] mr-3"></span>
                            <span className="font-aeonik text-xs font-medium uppercase tracking-widest">Process</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-aeonik text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#1E293B] tracking-tight">
                            Our 3-Step Process For<br />
                            Setting Up Acuity Scheduling<br />
                            On Squarespace
                        </h2>
                    </div>

                    <div className="max-w-xl self-end">
                        <p className="font-aeonik text-lg text-[#1E293B]/60 leading-relaxed">
                            We specialize in setting up Acuity Scheduling that doesn't just work – it works with your brand, your hours & your clients. Every setup is built to streamline your online appointment scheduling, make your calendar easier to manage & help clients book without friction.
                        </p>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="rounded-[12px] overflow-visible"
                    >
                        {PROCESS_STEPS.map((step, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#EBEDF0] rounded-[12px] overflow-hidden p-4 sm:p-8 lg:p-12 flex flex-col gap-8 relative">

                                    {/* Header Row: Step Number + Navigation Buttons (Spans full width) */}
                                    <div className="flex items-center justify-between w-full">
                                        {/* Step Number Badge */}
                                        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <span className="font-aeonik text-2xl font-normal text-[#1E293B]">{step.number}</span>
                                        </div>

                                        {/* Navigation buttons on the far right */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => swiperRef.current?.slidePrev()}
                                                className="w-16 h-12 rounded-full bg-[#F9F9FA] flex items-center justify-center text-[#1E293B] hover:bg-white transition-all duration-300 shadow-sm"
                                            >
                                                <FiArrowLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => swiperRef.current?.slideNext()}
                                                className="w-16 h-12 rounded-full bg-[#F9F9FA] flex items-center justify-center text-[#1E293B] hover:bg-white transition-all duration-300 shadow-sm"
                                            >
                                                <FiArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                        {/* Left Side: Text Content */}
                                        <div className="w-full lg:w-[45%] flex flex-col items-start pt-4">
                                            <h3 className="font-aeonik text-4xl sm:text-5xl text-[#1E293B] font-normal mb-6 tracking-tight">
                                                {step.title}
                                            </h3>

                                            <div className="h-[1px] bg-[#1E293B]/5 w-full mb-6" />

                                            {/* List Items */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 w-full">
                                                {step.items.map((item, itemIdx) => (
                                                    <div key={itemIdx} className="flex items-start gap-2">
                                                        <div className="flex-shrink-0">
                                                            <IoCheckmarkCircle className="w-5 h-5 text-[#516C83]" />
                                                        </div>
                                                        <span className="font-aeonik text-base text-[#1E293B]/70 leading-snug">
                                                            {item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: Image Content */}
                                        <div className="w-full lg:w-[55%] relative aspect-[16/10] sm:aspect-[16/9] rounded-[24px] overflow-hidden border border-black/5 shadow-inner">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}
