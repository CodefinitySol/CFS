'use client';

import Image from 'next/image';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { HiArrowUpRight } from 'react-icons/hi2';

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
    price: '$4,500',
    description: 'Perfect for lean builds and fast turnarounds. Built directly in Squarespace—no code, no fuss. A sleek, functional design that reflects your brand’s ambitions.',
    features: [
      'Up to 4 pages',
      'No-code build',
      '1 round of revisions',
      '2-week timeline cap',
      'Direct-to-Squarespace design'
    ],
    isDark: true
  },
  {
    name: 'Premium',
    price: '$9,500',
    description: 'For businesses that need more flexibility and finesse. A hybrid approach for extra polish and performance that helps your organisation scale quickly.',
    features: [
      'Up to 7 pages',
      'Custom styling (CSS)',
      '2 rounds of revisions',
      '5-week timeline cap',
      'Hybrid build'
    ],
    isDark: true
  },
  {
    name: 'Enterprise',
    price: "Let's Talk",
    description: 'Our flagship offer for high-level organisations that demand excellence. A bespoke solution combining strategy, innovation, and cutting-edge design. Best for complex builds.',
    features: [
      'Unlimited pages',
      'Unlimited code',
      'Unlimited revisions',
      'No timeline cap',
      'Dedicated design phase'
    ],
    isDark: false
  }
];

export default function PricingSection({
  badge = "Pricing",
  title = "Flexible Web Design Packages",
  description = "Find the Perfect Plan for Your Business",
  plans = DEFAULT_PLANS,
  containerClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
}: PricingSectionProps) {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83]"
            style={{
              background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.4) 0%, rgba(80, 108, 131, 0.2) 100%)'
            }}
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
            {badge}
          </span>
          <h2 className="mt-8 font-aeonik text-4xl font-normal tracking-tight text-[#181A1D] sm:text-5xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-6 font-aeonik text-lg text-[#506C83]/80">
            {description}
          </p>
        </div>

        {/* Pricing Container */}
        <div className={`mx-auto bg-[#17181B] rounded-[24px] p-2 sm:p-2 lg:p-4 ${containerClassName && containerClassName.includes('max-w-') ? containerClassName.match(/max-w-[^\s]+/)?.[0] : 'max-w-full'}`}>
          <div className={`grid ${containerClassName ? containerClassName.replace(/max-w-[^\s]+/g, '').replace('mx-auto', '').trim() : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-0`}>
            {/* Plan Cards */}
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} isLast={index === plans.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, isLast }: { plan: PricingPlan, isLast: boolean }) {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(94.74deg, #fff .26%, #506c83 118.16%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <div
      className={`
        relative flex flex-col p-8 sm:p-12 lg:p-14 transition-all duration-300 h-full
        ${plan.isDark
          ? 'text-white bg-[#17181B]'
          : 'bg-white rounded-[20px] text-[#181A1D] shadow-2xl shadow-black/40 lg:z-10'
        }
      `}
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

        <div className={`relative z-10 px-6 font-aeonik text-sm font-medium tracking-wide ${plan.isDark ? 'text-white/90' : 'text-[#506C83]'}`}>
          {plan.name}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-10 flex items-baseline gap-3">
        {plan.price !== "Let's Talk" ? (
          <>
            <span className={`text-base font-normal ${plan.isDark ? 'text-white/40' : 'text-[#506C83]/60'}`}>From</span>
            <span
              className="font-aeonik text-5xl font-normal tracking-tight lg:text-5xl"
              style={gradientStyle}
            >
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className={`text-lg font-normal ${plan.isDark ? 'text-white/40' : 'text-[#506C83]/60'}`}>
                {plan.priceSuffix}
              </span>
            )}
          </>
        ) : (
          <span
            className="font-aeonik text-5xl font-normal tracking-tight text-current lg:text-5xl"
          >
            {plan.price}
          </span>
        )}
      </div>

      {/* Description */}
      <p className={`mb-12 font-aeonik text-base leading-relaxed ${plan.isDark ? 'text-white/60' : 'text-[#506C83]/80'}`}>
        {plan.description}
      </p>

      {/* Features Heading */}
      <h4
        className="mb-8 font-aeonik text-xl font-normal"
        style={plan.isDark ? gradientStyle : {}}
      >
        What&apos;s Included
      </h4>

      {/* Features List */}
      <ul className="mb-12 space-y-4 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-4">
            <IoCheckmarkCircle className={`mt-1 h-5 w-5 shrink-0 ${plan.isDark ? 'text-[#506C83]' : 'text-[#506C83]'}`} />
            <span className={`font-aeonik text-base leading-snug ${plan.isDark ? 'text-white/80' : 'text-[#181A1D]/80'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`
          flex items-center justify-center gap-2 w-full py-5 rounded-full font-aeonik text-base font-medium transition-all duration-300 cursor-pointer
          ${plan.isDark
            ? 'bg-[#506C83] text-white hover:bg-[#607C93] border border-white/10'
            : 'bg-[#181A1D] text-white hover:bg-[#2A2D32] shadow-xl shadow-black/10'
          }
        `}
      >
        Schedule a call
        <HiArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
}

