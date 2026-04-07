'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';

const PROJECTS = [
  {
    tag: 'Security',
    title: 'Waltz',
    summary: 'Enterprise security platform for real-time access control and threat monitoring',
    image: '/waltz.png',
  },
  {
    tag: 'SaaS',
    title: 'Zappy',
    summary: 'SaaS platform automating agency workflows and improving team efficiency',
    image: '/zappy.png',
  },
  {
    tag: 'Tech',
    title: 'ZeroFill',
    summary: 'Sustainable tech platform optimizing global supply chain resource tracking',
    image: '/zerofill.png',
  },
  {
    tag: 'Education',
    title: 'Schole AI',
    summary: 'AI-powered learning platform delivering personalized education at scale',
    image: '/schole.png',
  },
  {
    tag: 'Agency',
    title: 'Flow',
    summary: 'Agency management system for project tracking, resource planning, and client collaboration',
    image: '/flow.png',
  },
];

export default function LatestWork() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(to_bottom,#E8ECF0_80%,#ffffff_80%)] py-18 sm:py-20">
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        <motion.div
          className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl space-y-5">
            <span className="inline-flex items-center rounded-full bg-[#2B2A2B4D] px-4 py-1.5 text-sm font-medium text-[#4D494D]">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#2B2A2B]" />
              Recent work
            </span>
            <h2 className="font-aeonik text-4xl font-normal leading-tight text-[#191819] sm:text-4xl md:text-5xl">
              Products built for real-world usage at scale
            </h2>
            <p className="font-aeonik text-base text-[#6D656D] md:text-lg">
              We have designed and delivered products across early-stage builds and full-scale systems handling real users. This includes AI platforms, internal tools, SaaS products, and customer-facing web and mobile applications.
            </p>
            <p className="font-aeonik text-base text-[#6D656D] md:text-lg">
              Every product is built with a clear focus on performance, scalability, and long-term reliability. We prioritize architecture and execution from day one so teams can operate with confidence and grow without rebuilding.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-[#2B2A2B] px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105"
          >
            View all work
          </Link>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <motion.div
        className="mt-16 sm:mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          spaceBetween={38}
          slidesPerView="auto"
          grabCursor={true}
          loop={true}
          className="!w-full !overflow-visible !pl-6 sm:!pl-8 lg:!pl-12"
          breakpoints={{
            640: {
              spaceBetween: 32,
            },
          }}
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <Link
                href="/portfolio"
                aria-label={`${project.title}, view on Work`}
                className="group relative block w-[min(88vw,360px)] select-none overflow-hidden rounded-3xl border-[6px] border-[#eaf0f6] bg-white px-7 pt-8 pb-7 shadow-sm transition-all hover:shadow-xl sm:w-[420px] sm:px-9 sm:pt-9 sm:pb-8"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-block shrink-0 rounded-full bg-[#E7E2E7] px-4 py-0.5 text-sm font-medium text-[#4D494D] sm:px-5 sm:text-base">
                      {project.tag}
                    </span>
                    <span
                      className="flex h-11 w-12 shrink-0 items-center justify-center rounded-full bg-[#2B2A2B] text-white transition-colors group-hover:bg-[#8B9CAB] sm:h-12 sm:w-14"
                      aria-hidden
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>

                  <h3 className="font-aeonik text-xl font-normal text-[#191819] sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="font-aeonik text-sm leading-relaxed text-[#6D656D] sm:text-[15px]">
                    {project.summary}
                  </p>

                  <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F1F5F9] ring-1 ring-[#E7E2E7]/80 sm:mt-3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 88vw, 420px"
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      draggable={false}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
