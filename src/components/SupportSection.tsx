'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSupport } from 'react-icons/bi';
import { HiOutlineBugAnt, HiOutlineWrench } from 'react-icons/hi2';

const SUPPORT_CARDS = [
    {
        title: 'Support & Feedback',
        description: 'Keeping your website running smoothly is essential to maintaining a professional and engaging online presence. Our website maintenance services are designed to ensure your platform remains secure & efficient',
        icon: BiSupport,
    },
    {
        title: 'Bug Fixes & Troubleshooting',
        description: 'Even the most sophisticated websites can experience occasional issues. That’s where our expert troubleshooting services come in to swiftly identify and resolve problems, minimizing downtime.',
        icon: HiOutlineBugAnt,
    },
    {
        title: 'Website Maintenance',
        description: 'When it comes to managing a website, having quick and expert help available can make all the difference. Our Priority Support ensures that your needs are addressed promptly and effectively, allowing you to focus on your goals.',
        icon: HiOutlineWrench,
    },
];

export default function SupportSection() {
    return (
        <section className="bg-white py-24 lg:py-22 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#191819 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#CFD6DC] text-[#2B2A2B] mb-6"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                        <span className="font-aeonik text-xs uppercase">Partnerships</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-aeonik text-4xl lg:text-5xl font-normal text-[#191819] max-w-xl"
                    >
                        Ongoing Support For Your Success
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SUPPORT_CARDS.map((card, index) => (
                        <SupportCard key={index} card={card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SupportCard({ card, index }: { card: typeof SUPPORT_CARDS[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col p-10 rounded-[12px] border border-[#E8ECF0] bg-white transition-all duration-300 hover:bg-[#2B2A2B] h-full"
        >
            {/* Icon */}
            <div className={`mb-32 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#191819]'}`}>
                <card.icon className="w-8 h-8" />
            </div>

            {/* Content */}
            <div className="mt-auto">
                <h3
                    className="font-aeonik text-[28px] lg:text-[32px] font-normal mb-4 transition-all duration-300 leading-tight"
                    style={{
                        background: isHovered
                            ? 'linear-gradient(94.13deg, #e8ecf0 .14%, #2B2A2B 153.8%)'
                            : 'none',
                        WebkitBackgroundClip: isHovered ? 'text' : 'none',
                        WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
                        color: isHovered ? 'transparent' : '#191819'
                    }}
                >
                    {card.title}
                </h3>
                <p className={`font-aeonik text-sm lg:text-base transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'}`}>
                    {card.description}
                </p>
            </div>
        </motion.div>
    );
}
