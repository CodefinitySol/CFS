'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import Header from './Header';
import ContactForm from './molecules/ContactForm';
import { Badge } from './atoms';

const SOCIAL_LINKS = [
    { icon: <FaBehance />, href: "#" },
    { icon: <FaDribbble />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <IoMailOutline />, href: "mailto:hello@example.com" },
];

export default function ContactHeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
            {/* Header */}
            <Header isLight={true} />

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col justify-center py-20 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="flex flex-col items-start gap-8"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#CFD6DC] text-[#506C83]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#506C83] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium">Contact me</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="font-aeonik text-6xl sm:text-5xl font-normal text-[#1E293B]">
                                Start A Project
                            </h1>
                            <h2 className="font-aeonik text-2xl sm:text-2xl font-normal text-black">
                                We Will Respond To Your Enquiry Within 24 Hours.
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="font-aeonik text-md text-[#1E293B] max-w-lg">
                            We'd love to hear about your project. Use the form to get in touch and tell us what you're working on. Prefer a direct connection? You can also reach us via Dribbble, Behance, LinkedIn, or email.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {SOCIAL_LINKS.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="h-11 w-15 flex items-center justify-center rounded-full bg-[#EDF2F6] text-[#506C83] text-xl transition-all hover:bg-[#506C83] hover:text-white"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* CTA with Avatars */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                            <button className="px-8 py-4 rounded-full bg-[#516C83] text-white text-sm font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 group">
                                Book a free call
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <div className="flex items-center">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden relative">
                                            <Image src={`/about-us/review-${i}.webp`} alt="User" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="ml-4">
                                    <p className="font-aeonik text-sm font-bold text-[#1E293B]">700+ people</p>
                                    <p className="font-aeonik text-[10px] text-[#1E293B]/50 uppercase tracking-wider">loved working with Sam</p>
                                </div>
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="flex items-center gap-3 sm:gap-4 pt-4 w-full">
                            <div className="relative w-34 h-18 transition-all cursor-pointer brightness-0">
                                <Image src="/marketplace.webp" alt="Award" fill className="object-contain" />
                            </div>
                            <div className="relative w-34 h-18 transition-all cursor-pointer brightness-0">
                                <Image src="/community.webp" alt="Award" fill className="object-contain" />
                            </div>
                            <div className="relative w-34 h-18 transition-all cursor-pointer brightness-0">
                                <Image src="/member.webp" alt="Award" fill className="object-contain" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ContactForm isContactPage={true} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
