'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const BLOG_POSTS = [
  {
    category: 'Anchor Links',
    title: 'How to Link Buttons to Sections in Squarespace (Anchor Link Guide)',
    description: 'Learn how to create anchor links on your Squarespace site.',
    image: '/blog-1.webp',
    link: '#'
  },
  {
    category: 'Mobile',
    title: 'Design a Mobile-Friendly Menu on Squarespace',
    description: 'Delve into the often overlooked aspect of mobile optimization on Squarespace sites, focusing specifically on the mobile menu.',
    image: '/blog-2.webp',
    link: '#'
  },
  {
    category: 'SEO',
    title: 'Using Beacon AI to Optimize Your Site SEO on Squarespace',
    description: 'Explore the newly launched Beacon AI by Squarespace, a tool designed to simplify and enhance SEO for your website.',
    image: '/blog-3.webp',
    link: '#'
  },
  {
    category: 'Design',
    title: 'Top 10 Squarespace Design Trends for 2024',
    description: 'Stay ahead of the competition with these cutting-edge design trends tailored for the Squarespace platform.',
    image: '/blog-4.webp',
    link: '#'
  },
  {
    category: 'Business',
    title: 'How to Grow Your Agency Using Squarespace',
    description: 'Practical tips and strategies for scaling your creative agency with Squarespace as your core platform.',
    image: '/blog-5.webp',
    link: '#'
  }
];

export default function BlogSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-5xl">
            <span 
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83] bg-[#CFD6DC]"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
              Blogs
            </span>
            <h2 className="mt-8 font-aeonik text-5xl font-normal tracking-tight text-[#181A1D] sm:text-6xl leading-tight">
              Insights From the Work We Do
            </h2>
            <p className="mt-8 font-aeonik text-lg text-[#506C83]/80 leading-relaxed">
              Our blog shares lessons from building and running real software products. We write about AI systems, web and mobile development, architecture decisions, automation, and the tradeoffs teams face as products grow.
            </p>
            <p className="mt-8 font-aeonik text-lg text-[#506C83]/80 leading-relaxed">
              The goal is not to promote tools or trends, but to explain what works, what breaks, and how to think through technical decisions before they become expensive problems.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => swiper?.slidePrev()}
              className="flex h-12 w-16 items-center justify-center rounded-full bg-[#516C83]/20 text-[#506C83] cursor-pointer transition-all hover:bg-[#516C83] hover:text-white"
              aria-label="Previous slide"
            >
              <HiArrowLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => swiper?.slideNext()}
              className="flex h-12 w-16 items-center justify-center rounded-full bg-[#516C83]/20 text-[#506C83] cursor-pointer transition-all hover:bg-[#516C83] hover:text-white"
              aria-label="Next slide"
            >
              <HiArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Blog Carousel */}
        <div className="blog-swiper-container [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:items-stretch">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {BLOG_POSTS.map((post, index) => (
              <SwiperSlide key={index} className="!h-auto !flex">
                <div className="group flex w-full flex-col rounded-[18px] bg-[#E8ECF0]/50 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8 h-full">
                    <div className="mb-6">
                      <span className="inline-flex items-center rounded-full bg-[#CFD6DC]/40 px-3 py-1.5 text-xs font-medium text-[#506C83]">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-aeonik text-2xl font-normal text-[#181A1D] mb-4 group-hover:text-[#506C83] transition-colors leading-snug line-clamp-2">
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <div className="mt-auto">
                      <p className="font-aeonik text-base text-[#506C83]/70 leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
