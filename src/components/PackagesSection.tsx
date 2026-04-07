'use client';

import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';

const PACKAGES = [
    {
        title: 'Starting Out?',
        description: 'Perfect for freelancers, artists, & new businesses who need a professional presence quickly.',
        buttonText: 'Choose Essentials',
        link: '/contact',
    },
    {
        title: 'Growing Business?',
        description: 'Ideal for established businesses ready to scale with more pages and custom features.',
        buttonText: 'Choose Premium',
        link: '/contact',
    },
    {
        title: 'Large Organisation?',
        description: 'For complex builds requiring unlimited customization and dedicated attention.',
        buttonText: 'Choose Enterprise',
        link: '/contact',
    },
];

export default function PackagesSection() {
    return (
        <section className="bg-white py-24 sm:py-22 overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col items-start mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium text-[#2B2A2B] bg-[#CFD6DC]">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#2B2A2B]" />
                        Packages
                    </span>
                    <h2 className="mt-8 font-aeonik text-5xl font-normal tracking-tight text-[#191819] sm:text-5xl max-w-2xl">
                        Which Package Is Right For You?
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {PACKAGES.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col p-10 h-full border-[#C1CAD1] border-[1px] rounded-[12px] bg-[#EBEEF1] transition-all duration-300 cursor-default"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="font-aeonik text-3xl font-normal leading-tight text-[#191819] mb-6 transition-all duration-300">
                                    {item.title}
                                </h3>

                                <p className="font-aeonik text-lg text-[#191819]/70 leading-relaxed mb-10 min-h-[80px] transition-colors duration-300">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#2B2A2B] px-6 py-3 font-aeonik text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
                                    >
                                        {item.buttonText}
                                        <HiArrowUpRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
