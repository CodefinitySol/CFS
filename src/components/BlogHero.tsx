'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

const HERO_BLOGS = [
    {
        category: 'Ecommerce',
        title: 'Should You Use Squarespace for Your Ecommerce Brand?',
        description: 'Discover wether Squarespace is the right website builder for Ecommerce websites',
        image: '/resources/hero-img-1.webp',
    },
    {
        category: 'Branding',
        title: "Using Squarespace's Brand Identity Tool",
        description: 'Delve into an often-overlooked feature on Squarespace that allows you to generate a brand identity for your business.',
        image: '/resources/hero-img-2.webp',
    },
    {
        category: 'Pricing',
        title: 'How Much Should You Pay for a Squarespace Website?',
        description: 'Find out how much you can expect to pay for a Squarespace website designed by by Crawford.',
        image: '/resources/hero-img-3.webp',
    },
];

const DURATION = 6000;

export default function BlogHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const startTimeRef = useRef(0);
    const timerRef = useRef<number | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % HERO_BLOGS.length);
        setProgress(0);
        startTimeRef.current = Date.now();
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + HERO_BLOGS.length) % HERO_BLOGS.length);
        setProgress(0);
        startTimeRef.current = Date.now();
    };

    useEffect(() => {
        startTimeRef.current = Date.now();
        const updateProgress = () => {
            const elapsed = Date.now() - startTimeRef.current;
            const newProgress = Math.min((elapsed / DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                nextSlide();
            } else {
                timerRef.current = requestAnimationFrame(updateProgress);
            }
        };

        timerRef.current = requestAnimationFrame(updateProgress);

        return () => {
            if (timerRef.current) cancelAnimationFrame(timerRef.current);
        };
    }, [currentIndex]);

    return (
        <section className="bg-white px-8 pt-12 sm:pt-6 pb-24 relative">
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
                {/* Top Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 bg-[#BEC8D1] w-fit">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-[#2B2A2B] tracking-wide">Resources</span>
                        </span>
                        <h1 className="font-aeonik text-4xl sm:text-6xl font-normal text-[#191819]">
                            Trending Blogs & News
                        </h1>
                    </div>
                    <p className="font-aeonik text-md text-black max-w-md">
                        Insights to help you stay ahead and make the most of every opportunity. In-depth articles, curated tips, and inspiration for curious minds.
                    </p>
                </div>

                {/* Hero Card Container */}
                <div className="relative aspect-[16/11] lg:aspect-[21/10] w-full bg-[#191819] rounded-[32px] overflow-hidden group border-[12px] border-[#EBEBEB]">
                    {/* Background Images with Crossfade */}
                    <div className="absolute inset-0">
                        {HERO_BLOGS.map((blog, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black/60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Text Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-start px-8 lg:px-10 pt-10 lg:pt-20">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-aeonik text-xs mb-2 border border-white/10 uppercase">
                                {HERO_BLOGS[currentIndex].category}
                            </span>
                            <h2
                                className="font-aeonik text-3xl lg:text-4xl font-normal mb-2 max-w-md text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: 'linear-gradient(94.74deg, #fff .26%, #2B2A2B 118.16%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {HERO_BLOGS[currentIndex].title}
                            </h2>
                            <p className="font-aeonik text-lg text-white/70 max-w-xl leading-relaxed">
                                {HERO_BLOGS[currentIndex].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom Navigation & Progress Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16 lg:p-16 flex flex-col lg:flex-row items-end justify-between gap-10">
                        {/* Progress Indicators */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 w-full lg:max-w-5xl">
                            {HERO_BLOGS.map((blog, idx) => (
                                <div
                                    key={idx}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setCurrentIndex(idx);
                                        startTimeRef.current = Date.now();
                                        setProgress(0);
                                    }}
                                >
                                    <div className="h-[2px] w-full bg-white/20 relative mb-6 overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-white"
                                            style={{
                                                width: idx === currentIndex ? `${progress}%` : (idx < currentIndex ? '100%' : '0%')
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <span className={`block font-aeonik text-sm mb-3 ${idx === currentIndex ? 'text-white' : 'text-white/50'}`}>0{idx + 1}</span>
                                        <h4 className={`font-aeonik text-sm font-light leading-snug transition-colors duration-300 ${idx === currentIndex ? 'text-white' : 'text-white/60'}`}>
                                            {blog.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-14 h-11 rounded-full border border-white/20 bg-black backdrop-blur-xl flex items-center justify-center text-white cursor-pointer"
                            >
                                <HiArrowLeft className="w-4 h-4 transition-transform" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-14 h-11 rounded-full border border-white/20 bg-black backdrop-blur-xl flex items-center justify-center text-white cursor-pointer"
                            >
                                <HiArrowRight className="w-4 h-4 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
