'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { COMPANY_EMAIL_MAILTO } from '@/constants/contact';
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
        href: COMPANY_EMAIL_MAILTO,
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
                            <span className="font-aeonik text-xs font-medium">Contact</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="font-aeonik text-4xl font-normal leading-tight text-[#191819] sm:text-5xl lg:text-6xl">
                                Start a project with a team that executes
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="font-aeonik text-md max-w-lg leading-relaxed text-[#191819]">
                            If you are building, scaling, or fixing a product, send us the details. We review every enquiry properly and respond with clear next steps.
                        </p>
                        <p className="font-aeonik text-md max-w-lg text-[#191819]">
                            Prefer a direct connection? Reach us on LinkedIn, Instagram, or by email.
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
