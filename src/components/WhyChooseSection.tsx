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

interface REASONSTYPE {
  title: string;
  description: string;
  image: string;
}

export default function WhyChooseSection({ badgeText, title, description, REASONS, isPricing }: { badgeText?: string; title?: string; description?: string; REASONS?: REASONSTYPE[]; isPricing?: boolean }) {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="relative bg-white overflow-hidden py-18 sm:py-24">
      {/* Background Split */}
      <div className="absolute top-0 left-0 right-0 h-[55%] bg-[#E8ECF0]" />

      <div className={`relative z-10 mx-auto max-w-[1500px] ${isPricing ? 'px-6 lg:px-12' : 'px-6 lg:px-8'}`}>
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
              {badgeText}
            </span>
            <h2 className={`mt-6 font-aeonik font-normal tracking-tight text-[#181A1D] ${isPricing ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}>
              {title}
            </h2>
            <p className="mt-6 font-aeonik text-md text-[#506C83] leading-relaxed max-w-xl">
              {description}
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
          >
            {REASONS && REASONS.map((item: REASONSTYPE, index: number) => (
              <SwiperSlide key={index}>
                <div className={`relative p-5 overflow-hidden rounded-[12px] rounded-bl-none bg-[#17181B] flex flex-col lg:flex-row items-stretch ${isPricing ? 'pt-0 pr-8 sm:pr-10 lg:pr-14 pb-0 pl-0 gap-8 lg:gap-58' : 'pt-20 gap-10 lg:gap-20'}`}>
                  {/* Image Side */}
                  <div className="relative w-full lg:w-[46%] min-h-[400px] lg:min-h-[500px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-fit"
                      priority={index === 0}
                    />
                  </div>

                  {/* Text Side */}
                  <div className={`flex-1 flex flex-col justify-start ${isPricing ? 'pt-12 lg:pt-16 lg:max-w-sm' : 'pt-2 lg:pt-4'}`}>
                    <h3
                      className={`font-aeonik font-normal leading-tight mb-6 ${isPricing ? 'text-4xl lg:text-3xl' : 'text-5xl lg:text-[52px]'}`}
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
                        <p key={i} className={`font-aeonik text-white ${isPricing ? 'text-base lg:text-md' : 'text-lg lg:text-xl'}`}>
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
