'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdVerified } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi2';
import BlogSection from '@/components/BlogSection';

const TESTIMONIALS = [
    {
        name: 'Jeff Smith',
        image: '/jim.jpeg',
        rating: 5,
        text: "Sam's attention to detail put him above the rest. I was traveling and the business was in the process of being acquired while we were building and it never slowed him or his team down!",
    },
    {
        name: 'Jack Schiavone',
        image: '/jim.jpeg',
        rating: 5,
        text: "Sam and the team gave me everything I was looking for with the website build. Alongside their attention to detail was the speed of their support. I couldn't recommend by Crawford more, especially for anyone who wants a website that converts leads into customers. Thanks!",
    },
    {
        name: 'Nathan Bethell',
        image: '/jim.jpeg',
        rating: 5,
        text: 'Sam is a top person to work with! No ego, no B/S, just high quality professionalism and delivery of sites and content that work. If you\'re in the market for a Squarespace site then you can\'t go wrong!',
    },
    {
        name: 'Blake Hampton',
        image: '/jim.jpeg',
        rating: 5,
        text: "Worked with them on some custom code for my squarespace site and I'm super happy with the result. Fast turnaround time, responsive communication and quality output!",
    },
    {
        name: 'Adriana Jamet',
        image: '/jim.jpeg',
        rating: 5,
        text: "Sam is exceptional. Here is why: he listens. Every meeting was effective and efficient; he asked all the right questions to answer the clients 'asks' and had a system where the process was seamless and projects were...",
    },
    {
        name: 'Marla Wilson',
        image: '/jim.jpeg',
        rating: 5,
        text: 'Sam was an incredible resource for us when building a Squarespace membership site. His attention to detail, vast knowledge, and quick responses made the whole experience so easy. I highly recommend by Crawford and would be happy to work with him again should another project come up.',
    },
    {
        name: 'Matt D\'Avella',
        image: '/jim.jpeg',
        rating: 5,
        text: 'Sam was an absolute game-changer when it came to building my Squarespace website. From start to finish, he was incredibly helpful and knowledgeable. The process was smooth and fast, but never rushed. Sam\'s attention to detail and design expertise made the site even better than I had envisioned. He was also a pleasure to work with, always professional, friendly, and proactive. I highly recommend Sam to anyone looking for a seamless and top-notch web design experience. 10/10!',
    },
    {
        name: 'Elliot Napier',
        image: '/jim.jpeg',
        rating: 5,
        text: 'Exceptional communication throughout the process, very prompt updates to the site made it very easy to iterate & determine the final design, content & style. Really happy with the finished product, would highly recommend to anyone looking to get an excellent website to help their brand / product stand out.',
    },
    {
        name: 'Daniel Gordon',
        image: '/jim.jpeg',
        rating: 5,
        text: 'Sam is professional, friendly, personable and easy to work with. He took time to try and understand my requirements and was always relaxed and accommodating when I wanted to make revisions or changes. His design ideas are clean and work well. I recommend him without hesitation.',
    },
];

function StarRating({ rating, isHovered }: { rating: number; isHovered: boolean }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-4 w-4 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#506C83]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header isLight={true} />

            {/* Hero Section */}
            <section className="bg-white lg:px-6 pt-6 pb-16 relative">
                <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 bg-[#BEC8D1] w-fit">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#516C83] mr-2"></span>
                                <span className="font-aeonik text-xs text-[#516C83] uppercase">All Testimonials</span>
                            </span>
                            <h1 className="font-aeonik text-4xl lg:text-5xl font-normal text-[#181A1D]">
                                Over 200+ Reviews
                            </h1>
                        </div>
                    </div>

                    {/* Testimonials Grid */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24 lg:mt-18">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div> */}
                </div>
            </section>

            <ContactSection />
            <BlogSection />
        </main>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-[12px] bg-[#E8ECF0] p-8 transition-all duration-300 hover:bg-[#516C83] flex flex-col h-full"
        >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className={`font-aeonik text-lg font-normal transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#181A1D]'}`}>
                            {testimonial.name}
                        </h3>
                        <MdVerified className={`h-4 w-4 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#506C83]'}`} />
                    </div>
                </div>
                <StarRating rating={testimonial.rating} isHovered={isHovered} />
            </div>

            {/* Text */}
            <p className={`font-aeonik text-[15px] leading-relaxed transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#516C83]'}`}>
                {testimonial.text}
            </p>
        </motion.div>
    );
}
