'use client';

import { motion } from 'framer-motion';

const INDUSTRIES = [
    'Agency', 'AI', 'Automotive', 'Church', 'Consulting', 'Education', 'Energy',
    'Enterprise', 'Events', 'Finance', 'Fitness', 'Industrial', 'Insurance', 'Law',
    'Marketing', 'Medical', 'Nonprofit', 'Real Estate', 'SaaS', 'Security', 'Tech',
    'Travel', 'Vacation Rentals', 'Venture Capital', 'Video Production', 'Web3'
];

export default function IndustriesSection() {
    return (
        <section className="bg-[#E8ECF0] pt-0 pb-12 overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 bg-[#BEC8D1] w-fit">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                        <span className="font-aeonik text-xs font-medium text-[#2B2A2B] tracking-wide">Industries</span>
                    </span>
                    <h2 className="font-aeonik text-5xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-[#191819] mb-8">
                        Industries We Serve
                    </h2>
                    <p className="font-aeonik text-md text-[#191819] max-w-2xl">
                        We partner with businesses across a diverse range of sectors, tailoring our Squarespace design
                        and SEO services to meet unique industry needs.
                    </p>
                </div>

                {/* Tags Grid */}
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {INDUSTRIES.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="px-6 py-2 rounded-full border border-[#748A9C] text-[#2B2A2B] font-aeonik text-base transition-all duration-300 hover:bg-[#E8ECF0] hover:text-[#191819] hover:border-[#BEC8D1] cursor-default bg-[#E8ECF0]"
                        >
                            {industry}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
