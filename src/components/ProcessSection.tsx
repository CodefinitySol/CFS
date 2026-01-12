'use client';

import Image from 'next/image';

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
      "We start by understanding what you are trying to build and why. This includes your goals, users, constraints, and existing systems. From there, we define scope, architecture direction, timelines, and risks early. You get clarity on what will be built, how it will be built, and what success looks like before any code is written.",
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
      'Development happens in clear phases with regular check-ins. We ship in small, testable increments and keep feedback loops tight. Whether it is an AI workflow, a web platform, or a mobile app, we focus on clean implementation, performance, and maintainability. Changes are expected and handled without derailing the project.',
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
      "Once the product is ready, we handle deployment, handover, and documentation. We stay involved after launch to support fixes, improvements, and scaling needs. Many clients continue with us long term as their product grows, users increase, and requirements evolve.",
    image: '/handover.webp',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#506C834D] bg-opacity-10 px-4 py-1.5 text-sm font-medium text-[#506C83]">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506c83]" />
            Smooth and efficient process
          </span>
          <h2 className="mt-6 font-aeonik text-4xl font-normal leading-tight text-[#1E293B] sm:text-5xl lg:text-6xl">
            How We Take a Product From Idea to Production
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-[#506C83] hover:bg-[#506C83] hover:shadow-xl"
            >
              {/* Background Number */}
              <div className="absolute left-[-18] top-0 font-aeonik text-[180px] font-bold leading-none text-[#506C83] opacity-[0.08] transition-colors group-hover:text-white group-hover:opacity-10">
                {step.number}
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-1 flex-col">
                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[#1E293B] transition-colors group-hover:bg-white/10 group-hover:text-white">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mb-4 font-aeonik text-2xl font-normal text-[#1E293B] transition-colors group-hover:text-white sm:text-3xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-12 font-aeonik text-base leading-relaxed text-[#64748B] transition-colors group-hover:text-white/80">
                  {step.description}
                </p>

                {/* Image */}
                <div className="relative mt-auto aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
