'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
    return (
        <section className="relative w-full pt-24 pb-0 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center rounded-full p-1 bg-white/[0.03] border border-white/10 mb-10"
                >
                    <span
                        className="text-white text-[10px] sm:text-xs font-aeonik uppercase px-4 py-1.5 rounded-full flex items-center gap-2"
                        style={{ background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)' }}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                        NEWSLETTER
                    </span>
                    <span className="text-white/80 text-[10px] sm:text-xs font-aeonik px-4 pr-6">
                        Product Engineering, AI & Scaling Insights
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-aeonik text-4xl lg:text-5xl font-normal mb-8"
                    style={{
                        backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Get Product Engineering Insights
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-aeonik text-base sm:text-md text-white max-w-2xl mb-14"
                >
                    Join our newsletter for practical insights on building and scaling real software products. We share lessons from production systems, AI-driven workflows, modern web stacks, and cloud infrastructure—focused on what actually works in the real world.
                </motion.p>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="w-full max-w-[1000px] flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 mb-20"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="First Name"
                        className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-3.5 text-white placeholder:text-white text-sm focus:outline-none focus:border-white transition-all font-aeonik"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-3.5 text-white placeholder:text-white text-sm focus:outline-none focus:border-white transition-all font-aeonik"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-3.5 text-white placeholder:text-white text-sm focus:outline-none focus:border-white transition-all font-aeonik"
                    />
                    <button
                        type="submit"
                        className="self-center lg:self-auto bg-[#516C83] text-white rounded-full px-12 py-3.5 font-medium hover:brightness-110 active:scale-[0.98] transition-all font-aeonik cursor-pointer whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </motion.form>

                {/* Bottom Image Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full relative px-4"
                >
                    <Image
                        src="/newsletter-img.webp"
                        alt="Newsletter Showcase"
                        width={1400}
                        height={600}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
