'use client';

import Image from 'next/image';
import Header from './Header';
import { motion } from 'framer-motion';
import { Badge, Heading, Paragraph, Button } from './atoms';

export default function PricingHeroSection() {
    return (
        <section className="relative w-full bg-[#181A1D] overflow-hidden flex flex-col">
            {/* Header */}
            <Header isLight={false} />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-gradient.webp"
                    alt="Background Gradient"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 flex flex-col justify-center pt-10 lg:pt-10 pb-12 lg:pb-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <motion.div
                        className="w-full lg:w-[45%] flex flex-col items-start gap-8"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <Badge variant="gradient" size="md" icon={<span className="h-1.5 w-1.5 rounded-full bg-white mr-2" />}>
                            Transparent pricing
                        </Badge>

                        {/* Heading */}
                        <Heading level={1} variant="gradient" size="xl">
                            Squarespace Website  <span className="relative inline-block px-4 py-2">
                                <span
                                    className="relative z-10 bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Design Pricing
                                </span>
                                <span
                                    className="absolute inset-0 z-0 bg-[url('/squareborder.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
                                    aria-hidden="true"
                                />
                            </span>
                        </Heading>

                        {/* Description */}
                        <Paragraph size="md" className="text-white max-w-xl">
                            Squarespace is the go-to platform for small businesses and creatives who want a professional web presence without the complexity. We offer transparent, no-code website builds with quick turnarounds and sleek, functional design. Below you'll find our pricing packages and what's included in each plan.
                        </Paragraph>

                        {/* CTA Button */}
                        <Button
                            variant="secondary"
                            size="md"
                            className="!bg-[#516C83] backdrop-blur-md border border-white/10 hover:!bg-[#516C83]/50 transition-all font-aeonik mt-2"
                            icon={<svg className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                        >
                            Explore Pricing Plans
                        </Button>
                    </motion.div>

                    {/* Right Image/Visualization */}
                    <motion.div
                        className="w-full lg:w-[55%] relative"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full aspect-[16/10] lg:aspect-[1.4/1]">
                            <Image
                                src="/pricing-hero-img.webp"
                                alt="Pricing Visual Representation"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
