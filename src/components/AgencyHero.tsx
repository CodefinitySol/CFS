'use client';

import Image from 'next/image';
import Header from './Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge, Heading, Paragraph } from '@/components/atoms';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

export default function AgencyHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.4
            }
        }
    };

    return (
        <section className="relative overflow-hidden bg-[#080c14] pb-8 lg:pb-0">
            <Header />

            {/* Background Image/Gradient */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-gradient.webp"
                    alt="Background Gradient"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 py-12 md:py-16 lg:px-10 lg:py-4 xl:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1 space-y-6 lg:max-w-[700px]"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-1 backdrop-blur-md w-fit"
                        >
                            <Badge
                                variant="gradient"
                                size="sm"
                                icon={<span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FFFFFF] shadow-[0_0_6px_rgba(74,222,128,0.8)]" />}
                                className="transition-transform hover:scale-[1.02]"
                            >
                                Available for work
                            </Badge>
                            <button className="px-5 font-aeonik text-xs font-medium text-white/60 transition-colors hover:text-white">
                                Get in touch now
                            </button>
                        </motion.div>

                        {/* Title */}
                        <motion.div variants={itemVariants}>
                            <Heading
                                level={1}
                                variant="gradient"
                                size="xl"
                                className="!text-4xl lg:!text-5xl"
                            >
                                Expert Squarespace Web Design Agency Tailored To Drive Your Business Growth
                            </Heading>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants}>
                            <Paragraph size="md" variant="light" className="max-w-2xl text-[#9ea3a7]">
                                Transform your online presence with by Crawford, a leading Squarespace web design agency. We create custom, high-converting websites that drive results.
                            </Paragraph>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link
                                href={CALENDLY_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/90 bg-white px-10 py-3 font-aeonik text-base font-medium text-gray-900 transition-all hover:border-white hover:shadow-lg"
                            >
                                Schedule a call
                            </Link>

                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#1e242c] px-10 py-3 font-aeonik text-base font-medium text-white transition-all hover:bg-[#252d37]"
                            >
                                View Portfolio
                            </Link>
                        </motion.div>

                        {/* Awards Section */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 sm:gap-6 md:gap-4 pt-6"
                        >
                            <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                                <Image
                                    src="/marketplace.webp"
                                    alt="Squarespace Marketplace Expert"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                                <Image
                                    src="/community.webp"
                                    alt="Squarespace Community Leader"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                                <Image
                                    src="/member.webp"
                                    alt="Squarespace Circle Member"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Image with Floating Badges */}
                    <motion.div
                        className="relative lg:w-[620px] xl:w-[680px]"
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/4] h-full w-full">
                            <Image
                                src="/resources/hero-img-web-design.webp"
                                alt="Squarespace Web Design Agency"
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
