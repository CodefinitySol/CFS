'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const reviews = [
    {
        id: 1,
        name: 'Blake Hampton',
        review: "Worked with them on some custom code for my squarespace site and I'm super happy with the result. Fast turnaround time, responsive communication and quality output!",
        image: '/about-us/review-1.webp',
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        review: "Absolutely transformed our website. The attention to detail and design aesthetics were exactly what we needed to elevate our brand.",
        image: '/about-us/review-2.webp',
    },
    {
        id: 3,
        name: 'Michael Torres',
        review: "Professional, skilled, and easy to work with. They understood our vision immediately and delivered a site that exceeded our expectations.",
        image: '/about-us/review-3.webp',
    },
];

export default function ClientReviewsSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="bg-[#181A1D] py-10 lg:py-20 px-6 lg:px-8 xl:px-12 overflow-hidden">
            <div className="mx-auto max-w-[1600px]">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 lg:mb-24">
                    <div className="flex flex-col items-start gap-6">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5"
                            style={{
                                background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                            }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                            <span className="font-aeonik text-xs font-medium text-white">Your dream site</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight"
                            style={{
                                backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            What Clients Are Saying
                        </h2>
                    </div>

                    {/* Button */}
                    <button className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-white transition-all hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#516C83' }}
                    >
                        <span className="font-aeonik text-base font-medium">View all reviews</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </button>
                </div>

                {/* Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={32}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 1.2,
                            }
                        }}
                        className="!overflow-visible"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="bg-[#1D222A] border border-white/5 rounded-[20px] p-6 lg:p-10 flex flex-col md:flex-row gap-6 lg:gap-10 min-h-[280px]">
                                    {/* Image Placeholder */}
                                    {/* Client Image */}
                                    <div className="w-full md:w-[280px] lg:w-[320px] h-[240px] md:h-auto bg-gray-800 rounded-2xl flex-shrink-0 relative overflow-hidden">
                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center flex-grow py-4">
                                        <p className="font-aeonik text-base sm:text-lg text-white leading-relaxed mb-8">
                                            {review.review}
                                        </p>

                                        <div className="flex items-center gap-4 mt-auto">
                                            {/* Quotation Icon */}
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                <Image
                                                    src="/about-us/inverted-qoma.webp"
                                                    alt="Quote"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            {/* Name */}
                                            <span className="font-aeonik text-lg text-[#9CA3AF]">
                                                {review.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="flex items-center justify-end gap-4 mt-12 pb-4">
                        <button ref={prevRef} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button ref={nextRef} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
