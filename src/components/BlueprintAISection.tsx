'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { LuSlidersHorizontal, LuFileText, LuPencilLine } from 'react-icons/lu';

const POINTS = [
  {
    title: 'Brand personalization',
    description: "Automatically adapt your site's style, fonts, and color palette to perfectly match your brand's tone, vibe, and identity.",
    icon: LuSlidersHorizontal,
  },
  {
    title: 'Pre-vetted content',
    description: 'Get AI-generated content tailored to your industry and goals—no writing needed, just ready-to-publish, high-converting copy.',
    icon: LuFileText,
  },
  {
    title: 'Tailored design recommendations',
    description: 'Receive intelligent design suggestions, including layout, color schemes, and typography, optimized to align with your brand\'s goals and audience preferences.',
    icon: LuPencilLine,
  },
];

export default function BlueprintAISection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const togglePoint = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 sm:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #2F3A44 0%, #232E38 55%, #1A242D 100%)'
      }}
    >
      <div className="mx-auto max-w-[1500px] px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_1.3fr] gap-16 lg:gap-32 items-center">

          {/* Left Side - Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span
                className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-white"
                style={{
                  background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                }}
              >
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                Squarespace Blueprint AI
              </span>

              <h2 className="mt-8 font-aeonik text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight max-w-2xl">
                <span
                  style={{
                    backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Get Started With
                </span>
                <br />
                <span className="relative inline-block px-4 py-1.5 sm:px-6 sm:py-2">
                  <span
                    className="relative z-10"
                    style={{
                      backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Squarespace Blueprint AI
                  </span>

                  {/* Blueprint Border Asset */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: "url('/squarespace-square.png')",
                      backgroundSize: '100% 100%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    aria-hidden="true"
                  />
                </span>
              </h2>

              <p
                className="mt-6 font-aeonik text-base lg:text-lg"
                style={{
                  backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Effortless Customization, Limitless Possibilities
              </p>
            </div>

            {/* Points Accordion */}
            <div className="mt-16 space-y-4">
              {POINTS.map((point, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-0"
                >
                  <button
                    onClick={() => togglePoint(index)}
                    className="w-full flex items-center justify-between py-6 text-left group transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                        <point.icon className="h-6 w-6 text-white opacity-80" />
                      </div>
                      <span
                        className="font-aeonik text-base lg:text-lg font-normal transition-opacity"
                        style={{
                          backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {point.title}
                      </span>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center">
                      <div className="relative h-6 w-6 flex items-center justify-center">
                        {/* Vertical line for + */}
                        <div className={`absolute h-4 w-0.5 bg-white/60 transition-transform duration-300 ${openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0'}`} />
                        {/* Horizontal line for +/- */}
                        <div className={`absolute h-0.5 w-4 bg-white/60 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="pl-[72px] font-aeonik text-sm sm:text-base leading-relaxed text-[#AFB1B3] max-w-md">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button
                className="flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-95 bg-[#516C83]"
              >
                Get started
                <HiArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative lg:ml-auto w-full max-w-[700px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative p-6">

              <div className="relative overflow-hidden rounded-[24px] aspect-[1.1]">
                <Image
                  src="/squarespace-blueprint.webp"
                  alt="Squarespace Blueprint AI Mockup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
