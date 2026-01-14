'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const REASONS = [
  {
    title: 'Built for Real Products, Not Just Demos',
    description: "We focus on software that runs in production and stays there. Our team builds systems that are stable, maintainable, and designed for real users, not one time launches.\n\n From early MVPs to mature platforms, we think through architecture, data flow, and long term usage before writing code. That is why the products we ship continue to run, evolve, and scale.",
    image: '/item-1.png'
  },
  {
    title: 'Strong Engineering, Clear Ownership',
    description: "Every project has clear technical ownership. You work directly with engineers who understand the system end to end and take responsibility for decisions.\n\n This reduces miscommunication, rework, and delays. You get steady progress, realistic timelines, and honest answers when tradeoffs are needed.",
    image: '/item-2.webp'
  },
  {
    title: 'AI Where It Makes Sense, Not Everywhere',
    description: "We work deeply with AI systems, agents, and automation, but we apply them carefully. AI is used when it adds value, not because it sounds impressive.\n\n Whether it is an AI powered workflow or a traditional application, the goal stays the same. Solve the problem cleanly and keep the system understandable for the team running it.",
    image: '/item-3.webp'
  },
  {
    title: 'Flexible Teams That Fit Your Stage',
    description: "Our engagement models are designed to adapt as your needs change. Start lean, scale up, or bring in senior engineers when complexity increases.\n\n Many teams work with us long term because the setup stays flexible without losing quality or continuity.",
    image: '/item-2.webp'
  },
];

export default function WhyChooseSection() {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="bg-[#E8ECF0] py-18 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        {/* Header with Navigation */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl text-left">
            <span
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83] bg-[#BEC8D1]"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
              Why Codefinity Solutions
            </span>
            <h2 className="mt-6 font-aeonik text-4xl font-normal tracking-tight text-[#181A1D] sm:text-5xl">
              Why Teams Choose CFS
            </h2>
            <p className="mt-6 font-aeonik text-md text-[#506C83] leading-relaxed max-w-xl">
              You are not just hiring developers. You are choosing how your product is built, maintained, and scaled. Here is what working with Codefinity Solutions actually looks like.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex w-full items-center justify-between md:w-auto md:justify-end md:gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-12 w-16 items-center justify-center rounded-full bg-[#506C83] text-white transition-all hover:bg-[#405669] cursor-pointer"
              aria-label="Previous slide"
            >
              <HiArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-12 w-16 items-center justify-center rounded-full bg-[#506C83] text-white transition-all hover:bg-[#405669] cursor-pointer"
              aria-label="Next slide"
            >
              <HiArrowRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>

        {/* Swiper Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            onSwiper={(swiper) => {
              (swiperRef as any).current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
            }}
            className="rounded-[18px]"
          >
            {REASONS.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-[18px] bg-[#17181B] min-h-[500px] lg:min-h-[640px] flex flex-col lg:flex-row items-stretch">
                  {/* Image Side */}
                  <div className="relative w-full lg:w-[48%] min-h-[400px] lg:min-h-full">
                    {/* The Image Wrapper pinned to left and bottom */}
                    <div className="absolute left-0 bottom-0 right-0 top-12 lg:top-16 rounded-tr-[32px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                      />

                      {/* Glassmorphic Badges from the mockup */}
                      <div className="absolute left-6 top-6 z-20 rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                        <div className="flex items-baseline gap-2">
                          <span className="font-aeonik text-xl font-bold text-white">120+</span>
                          <span className="font-aeonik text-[10px] text-white/70 uppercase tracking-wider">Clients Worldwide</span>
                        </div>
                      </div>

                      <div className="absolute right-6 bottom-6 z-20 rounded-lg border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md text-right">
                        <div className="font-aeonik text-xl font-bold text-white">700+</div>
                        <div className="font-aeonik text-[10px] uppercase tracking-wider text-white/70">Successful websites</div>
                      </div>

                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-[52%] p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
                    <h3
                      className="font-aeonik text-4xl lg:text-5xl font-normal leading-tight mb-8"
                      style={{
                        backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {item.title}
                    </h3>

                    <div className="space-y-6">
                      {item.description.split('\n\n').map((para, i) => (
                        <p key={i} className="font-aeonik text-base lg:text-lg text-white leading-relaxed opacity-90">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Pagination Indicators */}
        <div className="custom-pagination mt-12 flex justify-center gap-3 [&_.custom-bullet]:h-2 [&_.custom-bullet]:w-2 [&_.custom-bullet]:bg-[#506C83]/30 [&_.custom-bullet]:rounded-full [&_.custom-bullet]:transition-all [&_.custom-bullet]:duration-300 [&_.custom-bullet]:duration-300 [&_.custom-bullet]:cursor-pointer [&_.custom-bullet-active]:w-12 [&_.custom-bullet-active]:bg-[#506C83]" />
      </div>
    </section>
  );
}
