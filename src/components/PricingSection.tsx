'use client';

import Image from 'next/image';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { HiArrowUpRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

export interface PricingPlan {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  isDark: boolean;
}

interface PricingSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  plans?: PricingPlan[];
  containerClassName?: string;
}

const DEFAULT_PLANS: PricingPlan[] = [
  {
    name: 'Essentials',
    price: '$3,000 / month',
    description: 'Best for early-stage builds and focused development needs where speed matters but the foundation still needs to be done right',
    features: [
      'Dedicated engineers',
      'Product-focused development',
      'Clear ownership and delivery',
      'Weekly progress updates',
      'Direct communication',
      'Flexible monthly engagement'
    ],
    isDark: true
  },
  {
    name: 'Premium',
    price: '$6,000 / month',
    description: 'For growing products that need stronger ownership, better planning, and engineers who can handle complexity without constant oversight',
    features: [
      'Senior engineers with real product experience',
      'AI systems and backend-heavy work',
      'Architecture input and technical direction',
      'Faster execution with deeper involvement',
      'Priority communication'
    ],
    isDark: true
  },
  {
    name: 'Enterprise',
    price: "Custom pricing",
    description: 'For companies building large systems or scaling existing products with long-term roadmap ownership',
    features: [
      'Dedicated team across roles',
      'Product, AI, web, and infrastructure combined',
      'Technical leadership and delivery ownership',
      'No fixed timeline constraints',
      'Long-term product and scaling support'
    ],
    isDark: false
  }
];

export default function PricingSection({
  badge = "Augmentation for teams that need real execution",
  title = "Flexible engagement models based on how you build",
  description = "Choose a setup based on your product stage, complexity, and how involved you need us to be",
  plans = DEFAULT_PLANS,
  containerClassName = 'grid-cols-1 md:grid-cols-3'
}: PricingSectionProps) {
  return (
    <section className="bg-white pb-4 sm:pb-4 pt-22 sm:pt-22 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#2B2A2B]"
            style={{
              background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.4) 0%, rgba(91, 83, 91, 0.2) 100%)'
            }}
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#2B2A2B]/40" />
            {badge}
          </span>
          <h2 className="mt-8 font-aeonik text-4xl font-normal tracking-tight text-[#191819] sm:text-5xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-6 font-aeonik text-lg text-[#2B2A2B]/80">
            {description}
          </p>
        </motion.div>

        {/* Pricing Container */}
        <div className={`${containerClassName && containerClassName.includes('max-w-') ? containerClassName.match(/max-w-[^\s]+/)?.[0] : 'max-w-full'} mx-auto`}>
          <div className={`grid ${containerClassName ? containerClassName.replace(/max-w-[^\s]+/g, '').replace('mx-auto', '').trim() : 'grid-cols-1 md:grid-cols-3'} gap-3 sm:gap-4 md:gap-4 lg:gap-6`}>
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan, index: number }) {

  return (
    <motion.div
      className={`
        group relative flex h-full min-w-0 flex-col rounded-2xl bg-white p-8 text-[#191819] shadow-[0_1px_0_rgba(25,24,25,0.05),0_10px_30px_-18px_rgba(25,24,25,0.22)] transition-all duration-300 hover:bg-[#191819]
        sm:p-12 md:p-5 lg:rounded-[20px] lg:p-14
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Badge */}
      <div className="relative mb-6 inline-flex h-9 min-w-[96px] items-center justify-center self-start sm:mb-7 sm:h-10 sm:min-w-[108px] md:mb-6 lg:mb-12 lg:h-[44px] lg:min-w-[120px]">
        {/* Decorative corner background */}
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <Image
            src="/square.png"
            alt=""
            fill
            className="h-full w-full object-stretch opacity-20 transition-opacity duration-300 group-hover:opacity-35"
          />
        </div>

        <div className="relative z-10 px-4 font-aeonik text-xs font-medium tracking-wide text-[#2B2A2B] transition-colors duration-300 group-hover:text-white/90 sm:text-sm lg:px-6 lg:text-sm">
          {plan.name}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:mb-6 md:mb-5 lg:mb-10 lg:gap-3">
        {plan.price !== "Custom pricing" ? (
          <>
            <span className="text-xs font-normal text-[#2B2A2B]/60 transition-colors duration-300 group-hover:text-white/50 sm:text-sm lg:text-base">
              From
            </span>
            <span
              className="font-aeonik text-2xl font-normal tracking-tight text-[#191819] transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl"
            >
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className="text-sm font-normal text-[#2B2A2B]/60 transition-colors duration-300 group-hover:text-white/50 lg:text-lg">
                {plan.priceSuffix}
              </span>
            )}
          </>
        ) : (
          <span
            className="font-aeonik text-2xl font-normal tracking-tight text-[#191819] transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl"
          >
            {plan.price}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 font-aeonik text-sm leading-relaxed text-[#2B2A2B] transition-colors duration-300 group-hover:text-white sm:mb-7 sm:text-[15px] md:mb-6 lg:mb-12 lg:text-base">
        {plan.description}
      </p>

      {/* Features Heading */}
      <h4 className="mb-3 font-aeonik text-lg font-normal text-[#191819] transition-colors duration-300 group-hover:text-white sm:text-xl md:mb-3 lg:mb-6 lg:text-2xl">
        What&apos;s included
      </h4>

      {/* Features List */}
      <ul className="mb-6 space-y-2 flex-1 sm:mb-7 md:mb-6 lg:mb-12 lg:space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 sm:gap-3 lg:gap-4">
            <IoCheckmarkCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2B2A2B] transition-colors duration-300 group-hover:text-white sm:h-[18px] sm:w-[18px] lg:mt-1 lg:h-5 lg:w-5" />
            <span className="font-aeonik text-sm leading-snug text-[#191819]/80 transition-colors duration-300 group-hover:text-white/85 lg:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA: book via Calendly */}
      <a
        href={CALENDLY_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          mt-auto flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full py-3.5 font-aeonik text-sm font-medium transition-all duration-300
          border border-[#E7E2E7] bg-[#2B2A2B] text-white hover:bg-[#3A383A] sm:py-4 sm:text-[15px] lg:gap-2 lg:py-5 lg:text-base
        `}
      >
        Discuss your project
        <HiArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

