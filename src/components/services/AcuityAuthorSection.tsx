'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const ROLES = [
    "Squarespace Expert",
    "Squarespace Community Leader",
    "Squarespace Blog Contributor",
    "Squarespace Panelist",
    "Squarespace Educator",
    "Squarespace Enterprise Partner"
];

const SOCIAL_LINKS = [
    {
        icon: <FaLinkedinIn />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/codefinity-solutions/',
        external: true,
    },
    {
        icon: <FaInstagram />,
        label: 'Instagram',
        href: 'https://www.instagram.com/codefinitysol/',
        external: true,
    },
    {
        icon: <IoMailOutline />,
        label: 'Email',
        href: 'mailto:contact@codefinitysol.com',
        external: false,
    },
] as const;

import { motion } from 'framer-motion';

export default function AcuityAuthorSection() {
    return (
        <section className="bg-white overflow-hidden">
            <motion.div
                className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">

                    {/* Left Side: Image with Overlays */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-[600px] mx-auto rounded-[18px] overflow-hidden">
                            <Image
                                src="/services-section/author.webp"
                                alt="Sam Crawford"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#D1D9E0] text-[#2B2A2B]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-3"></span>
                            <span className="font-aeonik text-xs font-medium uppercase tracking-widest">About author</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#191819] tracking-tight">
                                Hi, I&apos;m Sam Crawford
                            </h2>
                            <h3 className="font-aeonik text-2xl sm:text-3xl text-[#191819]/60 font-normal">
                                Meet The Person Behind The Setup
                            </h3>
                        </div>

                        {/* Descriptions */}
                        <div className="space-y-6 max-w-2xl">
                            <p className="font-aeonik text-base sm:text-lg text-[#191819]/70 leading-relaxed">
                                I&apos;ve built over 700 Squarespace websites for businesses, churches & creatives who need their site to do more than just look good. That includes setting up powerful booking systems using Acuity Scheduling – fully styled, fully connected & easy to manage.
                            </p>
                            <p className="font-aeonik text-base sm:text-lg text-[#191819]/70 leading-relaxed">
                                If you&apos;re looking for a Squarespace appointment scheduler that looks on-brand, saves time & actually gets used – you&apos;re in the right place.
                            </p>
                        </div>

                        {/* Roles Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 w-full max-w-2xl my-4">
                            {ROLES.map((role, index) => (
                                <div key={index} className="font-aeonik text-base text-[#191819]/40">
                                    {role}
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    {...(social.external
                                        ? { target: '_blank', rel: 'noopener noreferrer' }
                                        : {})}
                                    className="w-12 h-12 rounded-full bg-[#B9C1C9] flex items-center justify-center text-[#191819] hover:bg-[#2B2A2B] hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
