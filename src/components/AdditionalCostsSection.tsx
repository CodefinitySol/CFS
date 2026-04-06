'use client';

import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiMiniSparkles, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { BsInfinity } from 'react-icons/bs';

const COSTS = [
    {
        title: 'Squarespace Subscription',
        description: '$16-$47 per month, paid directly to Squarespace. Required for hosting and platform features.',
        icon: BsInfinity
    },
    {
        title: 'Domain Purchase',
        description: 'One-time fee or annual renewal (typically $10-$20/year). First year often free with Squarespace.',
        icon: HiOutlineGlobeAlt
    },
    {
        title: 'Add-Ons',
        description: 'Professional copywriting, advanced SEO packages, and ongoing maintenance available upon request.',
        icon: HiMiniSparkles
    },
    {
        title: 'Third-Party Integrations',
        description: 'Email marketing tools, booking systems, or e-commerce features may have separate costs.',
        icon: HiOutlineLightBulb
    }
];

export default function AdditionalCostsSection() {
    return (
        <section className="bg-white py-24 sm:py-18 overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium text-[#2B2A2B] bg-[#E8ECF0]">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#2B2A2B]" />
                        Costs & considerations
                    </span>
                    <h2 className="mt-8 font-aeonik text-4xl font-normal tracking-tight text-[#191819] sm:text-5xl lg:text-5xl max-w-4xl leading-[1.1]">
                        Additional Costs &<br />Considerations
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {COSTS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col p-8 rounded-[12px] bg-[#E8ECF0] transition-all duration-300 hover:bg-[#2B2A2B] cursor-default h-full"
                        >
                            <div className="flex flex-col gap-6">
                                {/* Icon & Title Row */}
                                <div className="flex items-start gap-3">
                                    <item.icon className="h-7 w-7 text-[#191819] transition-colors duration-300 group-hover:text-white shrink-0 mt-1" />
                                    <h3 className="font-aeonik text-2xl font-normal leading-tight text-[#191819] transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(94.74deg,#fff_.26%,#2B2A2B_118.16%)]">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="font-aeonik text-base text-[#2B2A2B] leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
