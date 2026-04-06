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
    description: 'Best for early-stage products, MVPs, and focused development needs. You get experienced developers who can move fast while keeping the foundation clean and stable.',
    features: [
      'Dedicated mid-level engineers',
      'Web or backend development',
      'Clear task ownership and delivery',
      'Weekly progress updates',
      'Standard working hours',
      'Flexible month-to-month engagement'
    ],
    isDark: true
  },
  {
    name: 'Premium',
    price: '$6,000 / month',
    description: 'Designed for growing products that need senior ownership, better planning, and tighter execution. Ideal for AI-heavy builds, integrations, and systems that require careful decisions.',
    features: [
      'Senior engineers with 5+ years experience',
      'AI development or complex backend work',
      'Architecture input and technical planning',
      'Faster turnaround and deeper involvement',
      'Priority communication and reviews'
    ],
    isDark: true
  },
  {
    name: 'Enterprise',
    price: "Custom pricing",
    description: 'For companies building large systems or scaling existing products. This is our flagship model, offering full teams and long-term partnership.',
    features: [
      'Dedicated team or multiple roles',
      'AI, web, mobile, and DevOps combined',
      'Technical leadership and delivery oversight',
      'No fixed timeline caps',
      'Long-term roadmap support'
    ],
    isDark: false
  }
];

export default function PricingSection({
  badge = "Augmentation for everyone",
  title = " Flexible Engagement Models",
  description = "Choose a setup that fits your product stage, team size, and level of complexity",
  plans = DEFAULT_PLANS,
  containerClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
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
        <div className={`mx-auto bg-[#191819] rounded-[24px] p-2 sm:p-2 lg:p-4 ${containerClassName && containerClassName.includes('max-w-') ? containerClassName.match(/max-w-[^\s]+/)?.[0] : 'max-w-full'}`}>
          <div className={`grid ${containerClassName ? containerClassName.replace(/max-w-[^\s]+/g, '').replace('mx-auto', '').trim() : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-0`}>
            {/* Plan Cards */}
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
  const gradientStyle = {
    backgroundImage: 'linear-gradient(94.74deg, #fff .26%, #2B2A2B 118.16%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <motion.div
      className={`
        relative flex flex-col p-8 sm:p-12 lg:p-14 transition-all duration-300 h-full
        ${plan.isDark
          ? 'text-white bg-[#191819]'
          : 'bg-white rounded-[20px] text-[#191819] shadow-2xl shadow-black/40 lg:z-10'
        }
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Badge */}
      <div className="relative mb-12 inline-flex items-center justify-center min-w-[120px] h-[44px] self-start">
        {/* Decorative corner background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/square.png"
            alt=""
            fill
            className={`w-full h-full object-stretch ${!plan.isDark ? 'brightness-[1.1] saturate-[0.5] opacity-20' : 'opacity-40'}`}
          />
        </div>

        <div className={`relative z-10 px-6 font-aeonik text-sm font-medium tracking-wide ${plan.isDark ? 'text-white/90' : 'text-[#2B2A2B]'}`}>
          {plan.name}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-10 flex items-baseline gap-3">
        {plan.price !== "Custom pricing" ? (
          <>
            <span className={`text-base font-normal ${plan.isDark ? 'text-white/40' : 'text-[#2B2A2B]/60'}`}>From</span>
            <span
              className="font-aeonik text-4xl font-normal tracking-tight lg:text-4xl"
              style={gradientStyle}
            >
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className={`text-lg font-normal ${plan.isDark ? 'text-white/40' : 'text-[#2B2A2B]/60'}`}>
                {plan.priceSuffix}
              </span>
            )}
          </>
        ) : (
          <span
            className="font-aeonik text-4xl font-normal tracking-tight text-current lg:text-4xl"
          >
            {plan.price}
          </span>
        )}
      </div>

      {/* Description */}
      <p className={`mb-12 font-aeonik text-base leading-relaxed ${plan.isDark ? 'text-white' : 'text-[#2B2A2B]'}`}>
        {plan.description}
      </p>

      {/* Features Heading */}
      <h4
        className="mb-6 font-aeonik text-2xl font-normal"
        style={plan.isDark ? gradientStyle : {}}
      >
        What&apos;s Included
      </h4>

      {/* Features List */}
      <ul className="mb-12 space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-4">
            <IoCheckmarkCircle className={`mt-1 h-5 w-5 shrink-0 ${plan.isDark ? 'text-[#2B2A2B]' : 'text-[#2B2A2B]'}`} />
            <span className={`font-aeonik text-base leading-snug ${plan.isDark ? 'text-white/80' : 'text-[#191819]/80'}`}>
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
          flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-5 font-aeonik text-base font-medium transition-all duration-300
          ${plan.isDark
            ? 'border border-white/10 bg-[#2B2A2B] text-white hover:bg-[#607C93]'
            : 'bg-[#191819] text-white shadow-xl shadow-black/10 hover:bg-[#2A2D32]'
          }
        `}
      >
        Schedule a call
        <HiArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

