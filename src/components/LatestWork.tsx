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
              <div className="group relative h-[500px] w-[380px] select-none overflow-hidden rounded-3xl border-[6px] border-[#eaf0f6] bg-white px-10 pt-10 transition-all hover:shadow-xl sm:h-[650px] sm:w-[550px]">
                <div className="flex h-full flex-col gap-2">
                  {/* Card Header: Tag & Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-[#E2E8F0] px-5 py-0.5 text-md font-medium text-[#475569]">
                      {project.tag}
                    </span>
                    <button className="flex h-12 w-14 items-center justify-center rounded-full bg-[#516C83] text-white hover:bg-[#8B9CAB] cursor-pointer">
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

                  {/* Title */}
                  <div className='flex items-center justify-between'>
                    <h3 className="font-aeonik text-2xl font-normal text-[#1E293B]">
                      {project.title}
                    </h3>
                  </div>

                  {/* Image Area */}
                  <div className="relative flex-1 overflow-hidden rounded-t-lg bg-gray-100 mt-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fit transition-transform duration-700 group-hover:scale-105 cursor-pointer"
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
