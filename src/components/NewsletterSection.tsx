'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
    return (
        <section className="relative w-full overflow-x-hidden pt-24 pb-6">
            <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-center px-4 text-center sm:px-6 lg:px-12">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center rounded-full p-1 bg-white/[0.03] border border-white/10 mb-10"
                >
                    <span
                        className="text-white text-[10px] sm:text-xs font-aeonik uppercase px-4 py-1.5 rounded-full flex items-center gap-2"
                        style={{ background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(91,83,91,.3) 100%)' }}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                        NEWSLETTER
                    </span>
                    <span className="text-white/80 text-[10px] sm:text-xs font-aeonik px-4 pr-6">
                        Product engineering insights that actually matter
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 inline-block pb-1 font-aeonik text-4xl font-normal leading-[1.18] lg:text-5xl lg:leading-[1.15]"
                    style={{
                        backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Product engineering insights that actually matter
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-aeonik text-base sm:text-md text-white max-w-2xl mb-14"
                >
                    Practical breakdowns on building and scaling real software products. No theory, no fluff. Just what works in production across AI systems, SaaS platforms, and modern infrastructure.
                </motion.p>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-12 flex w-full max-w-[1000px] flex-col items-stretch justify-center gap-4 md:flex-row md:items-center md:gap-3 lg:gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="First Name"
                        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-aeonik text-sm text-white placeholder:text-white transition-all focus:border-white focus:outline-none md:px-4 lg:px-6"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-aeonik text-sm text-white placeholder:text-white transition-all focus:border-white focus:outline-none md:px-4 lg:px-6"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-aeonik text-sm text-white placeholder:text-white transition-all focus:border-white focus:outline-none md:px-4 lg:px-6"
                    />
                    <button
                        type="submit"
                        className="self-center bg-[#2B2A2B] px-12 py-3.5 font-aeonik font-medium text-white rounded-full transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer whitespace-nowrap md:self-auto"
                    >
                        Get insights
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
