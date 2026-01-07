'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const REASONS = [
  {
    title: 'Mobile-Friendly And Responsive Designs',
    description: "While Squarespace allows you to create beautiful sites without coding, a professional Squarespace designer elevates your website to new heights. With over five years of experience and 700+ custom websites built, I leverage Squarespace's features to maximise your brand's impact.\n\nMy web design business designs ensure your site looks stunning on any device and stays current with Squarespace's latest updates and tools, enhancing your visibility on search engines and social media without custom code.",
    image: '/item-1.png'
  },
  {
    title: 'Expert Squarespace Development',
    description: "Beyond basic templates, I provide deep technical expertise in Squarespace's platform. Whether it's complex integrations, custom CSS, or advanced functionality, your site will be built with the highest standards of performance and reliability.\n\nI focus on creating a backend that is as easy for you to manage as it is beautiful for your visitors to browse, ensuring long-term success for your digital presence.",
    image: '/item-2.webp'
  },
  {
    title: 'Strategic Design & SEO Optimization',
    description: "A beautiful website is only effective if it's found by your target audience. I integrate SEO best practices from the ground up, ensuring your site is structured for maximum visibility on search engines.\n\nEvery design decision is made with conversion in mind, turning your passive visitors into active clients through strategic user journeys and compelling call-to-actions.",
    image: '/item-3.webp'
  }
];

export default function WhyChooseSection() {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="bg-[#E8ECF0] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl text-left">
            <span 
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83] bg-[#BEC8D1]"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
              Why choose me as your Squarespace web designer?
            </span>
            <h2 className="mt-8 font-aeonik text-5xl font-normal tracking-tight text-[#181A1D] sm:text-6xl">
              Why by Crawford?
            </h2>
            <p className="mt-8 font-aeonik text-lg text-[#506C83]/80 leading-relaxed max-w-2xl">
              You need more than just a Squarespace web designer; you need a partner who creates websites that convert, transforming your site into your most valuable sales asset.
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
        </div>

        {/* Swiper Content Card */}
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
          className="rounded-[32px]"
        >
          {REASONS.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-[32px] bg-[#17181B] p-6 sm:p-12 min-h-[600px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
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

        {/* Custom Pagination Indicators */}
        <div className="custom-pagination mt-12 flex justify-center gap-3 [&_.custom-bullet]:h-2 [&_.custom-bullet]:w-2 [&_.custom-bullet]:bg-[#506C83]/30 [&_.custom-bullet]:rounded-full [&_.custom-bullet]:transition-all [&_.custom-bullet]:duration-300 [&_.custom-bullet]:duration-300 [&_.custom-bullet]:cursor-pointer [&_.custom-bullet-active]:w-12 [&_.custom-bullet-active]:bg-[#506C83]" />
      </div>
    </section>
  );
}
