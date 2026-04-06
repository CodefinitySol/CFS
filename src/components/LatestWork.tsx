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
    image: '/waltz.png',
    link: '#',
  },
  {
    tag: 'SaaS',
    title: 'Zappy',
    image: '/zappy.png',
    link: '#',
  },
  {
    tag: 'Tech',
    title: 'ZeroFill',
    image: '/zerofill.png',
    link: '#',
  },
  {
    tag: 'Education',
    title: 'Schole AI',
    image: '/schole.png',
    link: '#',
  },
  {
    tag: 'Agency',
    title: 'Flow',
    image: '/flow.png',
    link: '#',
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
            <span className="inline-flex items-center rounded-full bg-[#506C834D] px-4 py-1.5 text-sm font-medium text-[#475569]">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#506c83]" />
              Recent work
            </span>
            <h2 className="font-aeonik text-4xl font-normal leading-tight text-[#1E293B] sm:text-4xl md:text-5xl">
              Products Built for Real Use
            </h2>
            <p className="font-aeonik text-base text-[#64748B] md:text-lg">
              We have worked on products across different stages, from early MVPs to systems supporting thousands of users. Some are AI-driven platforms. Others are ecommerce applications, internal tools, or customer-facing web and mobile apps. What they all share is a focus on reliability, clarity, and long-term use.
            </p>
            <p className="font-aeonik text-base text-[#64748B] md:text-lg">
              Each project starts with understanding the problem, not just the feature list. We design the architecture, choose the right stack, and build with scale and maintenance in mind. The result is software that teams can run confidently, improve over time, and depend on in production.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#516C83] px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105"
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
              <div className="group relative w-[min(88vw,360px)] select-none overflow-hidden rounded-3xl border-[6px] border-[#eaf0f6] bg-white px-7 pt-8 pb-7 shadow-sm transition-all hover:shadow-xl sm:w-[420px] sm:px-9 sm:pt-9 sm:pb-8">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-block shrink-0 rounded-full bg-[#E2E8F0] px-4 py-0.5 text-sm font-medium text-[#475569] sm:px-5 sm:text-base">
                      {project.tag}
                    </span>
                    <button
                      type="button"
                      className="flex h-11 w-12 shrink-0 items-center justify-center rounded-full bg-[#516C83] text-white transition-colors hover:bg-[#8B9CAB] cursor-pointer sm:h-12 sm:w-14"
                      aria-label={`Open ${project.title}`}
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
                    </button>
                  </div>

                  <h3 className="font-aeonik text-xl font-normal text-[#1E293B] sm:text-2xl">
                    {project.title}
                  </h3>

                  <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F1F5F9] ring-1 ring-[#E2E8F0]/80 sm:mt-3">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
