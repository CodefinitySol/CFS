'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import Header from './Header';
import ContactForm from './molecules/ContactForm';

const SOCIAL_LINKS = [
    {
        icon: <FaLinkedinIn />,
        href: 'https://www.linkedin.com/company/codefinity-solutions/',
        external: true,
        label: 'LinkedIn',
    },
    {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/codefinitysol/',
        external: true,
        label: 'Instagram',
    },
    {
        icon: <IoMailOutline />,
        href: 'mailto:contact@codefinitysol.com',
        external: false,
        label: 'Email',
    },
] as const;

export default function ContactHeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
            {/* Header */}
            <Header isLight={true} />

            <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 py-20 sm:px-10 sm:py-16 lg:px-12 lg:py-12">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">

                    {/* Left Content */}
                    <motion.div
                        className="flex flex-col items-start gap-8"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#CFD6DC] text-[#2B2A2B]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium">Contact us</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="font-aeonik text-5xl font-normal text-[#191819] sm:text-6xl">
                                Start a project
                            </h1>
                            <h2 className="font-aeonik text-2xl sm:text-2xl font-normal text-black">
                                We Will Respond To Your Enquiry Within 24 Hours.
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="font-aeonik text-md max-w-lg text-[#191819]">
                            We&apos;d love to hear about your project. Use the form to get in touch and tell us what you&apos;re working on. Prefer a direct connection? You can also reach us on LinkedIn, Instagram, or by email.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {SOCIAL_LINKS.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    {...(link.external
                                        ? { target: '_blank', rel: 'noopener noreferrer' }
                                        : {})}
                                    aria-label={link.label}
                                    className="h-11 w-15 flex items-center justify-center rounded-full bg-[#F1EEF1] text-[#2B2A2B] text-xl transition-all hover:bg-[#2B2A2B] hover:text-white"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* Social proof */}
                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                                        <Image src={`/about-us/review-${i}.webp`} alt="Client" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-aeonik text-sm font-bold text-[#191819]">132+ people</p>
                                <p className="font-aeonik text-xs leading-snug text-[#191819]/60">
                                    Satisfied working with Codefinity Solutions
                                </p>
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
