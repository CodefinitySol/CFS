'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: 'Discovery and Planning',
    description:
      'We start by understanding the problem, not just the feature list. This includes business goals, users, constraints, and existing systems. We define scope, architecture direction, timelines, and risks upfront so there is clarity before any build starts.',
    image: '/onboarding.webp',
  },
  {
    number: '02',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: 'Build, Iterate, and Validate',
    description:
      'We build in structured phases with fast iterations and tight feedback loops. Every release is testable and production-focused. Whether it is AI systems or full platforms, we focus on clean implementation, performance, and long-term maintainability.',
    image: '/development.webp',
  },
  {
    number: '03',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Launch, Support, and Scale',
    description:
      'We handle deployment, handover, and documentation, then stay involved as the product grows. This includes fixes, improvements, and scaling the system as usage increases and requirements evolve.',
    image: '/onboarding.webp',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center rounded-full bg-[#2B2A2B4D] bg-opacity-10 px-4 py-1.5 text-sm font-medium text-[#2B2A2B]">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#2B2A2B]" />
            Smooth and efficient process
          </span>
          <h2 className="mt-4 font-aeonik text-4xl font-normal text-[#191819] sm:text-5xl lg:text-6xl">
            How we take a product from idea to production
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-[#2B2A2B] hover:bg-[#2B2A2B] hover:shadow-xl min-h-[640px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Background Number */}
              <div className="absolute left-[-18] top-0 font-aeonik text-[180px] font-bold leading-none text-[#2B2A2B] opacity-[0.08] transition-colors group-hover:text-white group-hover:opacity-10">
                {step.number}
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-1 flex-col pb-44 lg:pb-60">
                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[#191819] transition-colors group-hover:bg-white/10 group-hover:text-white">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mb-4 font-aeonik text-2xl font-normal text-[#191819] transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(94.13deg,#e8ecf0_.14%,#2B2A2B_153.8%)] sm:text-3xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-12 font-aeonik text-base text-black transition-colors group-hover:text-white">
                  {step.description}
                </p>

              </div>

              {/* Image Area */}
              <div className="absolute -bottom-2 -right-2 h-72 w-[90%] overflow-hidden pointer-events-none">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
