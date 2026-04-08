'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { FiArrowLeft, FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/navigation';

interface AccordionItemProps {
    title: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/5 py-3.5 first:pt-0 last:border-0 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-left group transition-all duration-300 gap-4"
            >
                <span className="font-aeonik text-base sm:text-xl font-normal transition-all duration-300 bg-[linear-gradient(94.13deg,#e8ecf0_.14%,#2B2A2B_153.8%)] bg-clip-text text-transparent">
                    {title}
                </span>
                <div className={`flex-shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white border-white' : 'group-hover:border-white/30'}`}>
                    {isOpen ? <FiMinus className="text-black w-4 h-4" /> : <FiPlus className="text-white/60 w-4 h-4 group-hover:text-white" />}
                </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mt-5 mb-3' : 'max-h-0 opacity-0'}`}>
                <p className="font-aeonik text-sm sm:text-base text-white/40 leading-relaxed max-w-xl">
                    The Acuity account is yours – fully transferred & ready to use. You&apos;ll never be locked into someone else&apos;s setup. This ensures complete independence and long-term control over your scheduling workflow.
                </p>
            </div>
        </div>
    );
};

const MANAGEMENT_CARDS = [
    {
        title: "You're In Control",
        image: "/services-section/control.webp",
        items: [
            "Full Ownership of Your Booking System",
            "Expert Guidance at Your Fingertips",
            "Customizable Staff Permissions",
            "Seamless Integration",
            "Intuitive WYSIWYG Booking Panel",
            "Tailored Custom Forms",
            "Unlimited Appointment Types",
            "Secure & Private Booking Experience",
            "Consistent Branding Across the Board"
        ]
    },
    {
        title: "Engage Your Clients",
        image: "/services-section/engage.webp",
        items: [
            "Online Appointment Scheduling",
            "Flexible Availability Rules",
            "Branded Intake Forms",
            "Automated Confirmations + Reminders",
            "Zoom + Google Meet Integration",
            "Real-Time Calendar Sync",
            "Group Class Registration",
            "Integrated Payments",
            "Easy Rescheduling & Cancellations",
            "Email List Connection"
        ]
    }
];

import { motion } from 'framer-motion';

export default function AcuityManagementSection() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <motion.div
                className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-16 xl:px-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
                    <div className="w-full lg:max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#D1D9E0] text-[#2B2A2B] mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-3"></span>
                            <span className="font-aeonik text-[11px] font-medium uppercase tracking-[0.1em]">Why choose me as your Squarespace web designer?</span>
                        </div>

                        {/* Title */}
                        <h2 className="font-aeonik text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-[1.1] text-[#191819] mb-10 tracking-tight">
                            Manage Your Squarespace<br />
                            Appointments With Ease
                        </h2>

                        {/* Description paragraphs */}
                        <div className="flex flex-col gap-6 w-full lg:max-w-3xl">
                            <p className="font-aeonik text-base text-[#191819]/60 leading-relaxed">
                                Once your Acuity Scheduling setup is complete, you&apos;ll have full access to manage bookings – update hours – change services – all from a clean, no-code dashboard.
                            </p>
                            <p className="font-aeonik text-base text-[#191819]/60 leading-relaxed">
                                Whether you&apos;re a solo practitioner or a growing team, it&apos;s easy to stay flexible & in control.
                            </p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-4 pt-4 lg:pt-0">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-16 h-12 rounded-full bg-[#2B2A2B] flex items-center justify-center text-white hover:bg-[#435a6e] transition-all duration-300 group shadow-lg hover:shadow-xl"
                        >
                            <FiArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-16 h-12 rounded-full bg-[#2B2A2B] flex items-center justify-center text-white hover:bg-[#435a6e] transition-all duration-300 group shadow-lg hover:shadow-xl"
                        >
                            <FiArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Swiper content */}
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    onSlideChange={() => {
                        setOpenIndex(0);
                    }}
                    className="overflow-visible"
                    spaceBetween={40}
                >
                    {MANAGEMENT_CARDS.map((card, cardIdx) => (
                        <SwiperSlide key={cardIdx}>
                            <div className="bg-[#191819] rounded-[18px] overflow-hidden p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col lg:flex-row gap-16 lg:gap-24">

                                {/* Left side: Image and card Title */}
                                <div className="w-full lg:w-[55%] flex flex-col gap-12">
                                    <h3 className="font-aeonik text-4xl sm:text-6xl text-white font-normal tracking-tight">
                                        {card.title}
                                    </h3>

                                    <div className="relative aspect-[16/11] h-full w-full rounded-[12px] overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Right side: Accordion content list */}
                                <div className="w-full lg:w-[45%] flex flex-col justify-start">
                                    <div className="flex flex-col min-h-full">
                                        {card.items.map((item, idx) => (
                                            <AccordionItem
                                                key={idx}
                                                title={item}
                                                isOpen={openIndex === idx}
                                                onClick={() => handleAccordionClick(idx)}
                                            />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </motion.div>

            {/* Floating 'Book a call' button */}
            <div className="fixed bottom-10 right-10 z-[100] group hidden md:block">
                <Link
                    href={CALENDLY_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-full border border-white/10 bg-[#191819] px-10 py-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#2B2A2B]"
                >
                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </div>
                    <span className="font-aeonik text-lg font-medium tracking-tight">Book a free call</span>
                </Link>
            </div>
        </section>
    );
}
