'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDuplicate, HiShieldCheck, HiOutlineChartBar, HiOutlinePencilAlt } from 'react-icons/hi';
import { Paragraph } from './atoms';

const BENEFITS = [
    {
        title: "All-In-One Platform",
        description: "Hosting, templates, and tools included in one seamless package.",
        icon: <HiOutlineDuplicate className="w-6 h-6 text-[#2B2A2B]" />
    },
    {
        title: "Secure & Reliable",
        description: "Built-in SSL certificates and enterprise-grade security.",
        icon: <HiShieldCheck className="w-6 h-6 text-[#2B2A2B]" />
    },
    {
        title: "SEO-Ready",
        description: "Clean code structure and built-in SEO tools to get found online.",
        icon: <HiOutlineChartBar className="w-6 h-6 text-[#2B2A2B]" />
    },
    {
        title: "Easy To Manage",
        description: "Intuitive interface that lets you update content without code.",
        icon: <HiOutlinePencilAlt className="w-6 h-6 text-[#2B2A2B]" />
    }
];

export default function WhyChooseSquarespace() {
    return (
        <section className="bg-[#E8ECF0] py-24 sm:py-22">
            <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#BEC8D1] text-[#2B2A2B] mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium tracking-wide">Squarespace benefits</span>
                        </div>

                        <h2 className="font-aeonik text-5xl sm:text-5xl font-normal text-[#191819] mb-4">
                            Why Choose <br /> Squarespace?
                        </h2>

                        <Paragraph size="md" className="text-[#191819] max-w-lg">
                            As professional Squarespace designers, we leverage the platform&apos;s strengths to create websites that suit small to mid-size businesses and creators perfectly. Our expertise ensures your site looks polished and performs exceptionally.
                        </Paragraph>
                    </motion.div>

                    {/* Right Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-20">
                        {BENEFITS.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start gap-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8C3CD]">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="font-aeonik text-2xl font-normal text-[#191819] mb-3">
                                        {benefit.title}
                                    </h3>
                                    <Paragraph size="md" className="text-[#191819]/70 leading-relaxed font-aeonik">
                                        {benefit.description}
                                    </Paragraph>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
