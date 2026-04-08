'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IoCheckmarkCircle } from 'react-icons/io5';

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
        image: "/agency-process-1.webp"
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
        image: "/agency-process-2.webp"
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
        image: "/agency-process-3.webp"
    }
];

import { motion } from 'framer-motion';

export default function AgencyProcessSection() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="bg-[#D1D7DD] py-12 overflow-hidden mt-10">
            <motion.div
                className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >

                {/* Header Section */}
                <div className="flex flex-col justify-center items-center gap-4 mb-10">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#AEBAC4] text-[#191819]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#191819] mr-3"></span>
                        <span className="font-aeonik text-xs font-medium uppercase">Process</span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-aeonik text-4xl lg:text-5xl font-normal text-[#191819] tracking-tight">
                        Our Simple and Streamlined Process
                    </h2>
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
                                <div className="bg-[#EBEDF0] rounded-[12px] overflow-hidden px-4 pt-8 sm:px-8 lg:pl-12 lg:pr-10 lg:pt-10 flex flex-col gap-2 relative">

                                    {/* Header Row: Step Number + Navigation Buttons (Spans full width) */}
                                    <div className="flex items-center justify-between w-full lg:pr-12">
                                        {/* Step Number Badge */}
                                        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center">
                                            <span className="font-aeonik text-2xl font-normal text-[#191819]">{step.number}</span>
                                        </div>

                                        {/* Navigation buttons on the far right */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => swiperRef.current?.slidePrev()}
                                                className="w-16 h-12 rounded-full bg-[#F9F9FA] flex items-center justify-center text-[#191819] hover:bg-white transition-all duration-300 shadow-sm cursor-pointer"
                                            >
                                                <FiArrowLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => swiperRef.current?.slideNext()}
                                                className="w-16 h-12 rounded-full bg-[#F9F9FA] flex items-center justify-center text-[#191819] hover:bg-white transition-all duration-300 shadow-sm cursor-pointer"
                                            >
                                                <FiArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                        {/* Left Side: Text Content */}
                                        <div className="w-full flex flex-col items-start pt-4">
                                            <h3 className="font-aeonik text-4xl sm:text-4xl text-[#191819] font-normal mb-6 tracking-tight">
                                                {step.title}
                                            </h3>

                                            <div className="h-[1px] bg-[#191819]/5 w-full mb-6" />

                                            {/* List Items */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 w-full">
                                                {step.items.map((item, itemIdx) => (
                                                    <div key={itemIdx} className="flex items-start gap-2">
                                                        <div className="flex-shrink-0">
                                                            <IoCheckmarkCircle className="w-5 h-5 text-[#2B2A2B]" />
                                                        </div>
                                                        <span className="font-aeonik text-base text-black leading-snug">
                                                            {item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: Image Content */}
                                        <div className="w-full relative border-[10px] border-[#C1CAD1] !border-b-0 rounded-tl-[32px] rounded-tr-[32px] overflow-hidden bg-white/5">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                width={700}
                                                height={500}
                                                className="w-full h-auto block object-contain"
                                                priority
                                            />
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </motion.div>
        </section>
    );
}
