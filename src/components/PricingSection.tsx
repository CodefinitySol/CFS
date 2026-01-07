'use client';

import Image from 'next/image';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { HiArrowUpRight } from 'react-icons/hi2';

const PLANS = [
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

export default function PricingSection() {
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
            Pricing
          </span>
          <h2 className="mt-8 font-aeonik text-4xl font-normal tracking-tight text-[#181A1D] sm:text-5xl lg:text-7xl">
            Flexible Web Design Packages
          </h2>
          <p className="mt-6 font-aeonik text-lg text-[#506C83]/80">
            Find the Perfect Plan for Your Business
          </p>
        </div>

        {/* Pricing Container */}
        <div className="bg-[#17181B] rounded-[10px] p-2 sm:p-2 lg:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Plan Cards */}
            {PLANS.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} isLast={index === PLANS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, isLast }: { plan: typeof PLANS[0], isLast: boolean }) {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(94.74deg, #fff .26%, #506c83 118.16%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <div 
      className={`
        relative flex flex-col p-10 sm:p-14 
        ${plan.isDark ? 'text-white bg-[#17181B]' : 'bg-white rounded-[12px] text-[#181A1D] shadow-2xl shadow-black/10'}
        ${isLast ? 'lg:z-10' : ''}
      `}
    >
      {/* Badge with decorative background image */}
      <div className="relative mb-14 inline-flex items-center justify-center min-w-[120px] h-[44px] self-start">
        {/* Decorative corner background (square.png) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image 
            src="/square.png" 
            alt="" 
            fill
            className={`w-full h-full object-stretch ${!plan.isDark ? 'brightness-[1.8] saturate-[0.5]' : 'opacity-40'}`} 
          />
        </div>
        
        <div className={`relative z-10 px-6 font-aeonik text-sm font-normal tracking-wide ${plan.isDark ? 'text-white' : 'text-[#516C83]'}`}>
          {plan.name}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-10 flex items-baseline gap-2">
        {plan.name !== 'Enterprise' ? (
          <>
            <span className={`text-base font-normal ${plan.isDark ? 'text-white/40' : 'text-[#506C83]/60'}`}>From</span>
            <span 
              className="font-aeonik text-4xl font-normal tracking-tight lg:text-5xl"
              style={gradientStyle}
            >
              {plan.price}
            </span>
          </>
        ) : (
          <span 
            className="font-aeonik text-4xl font-normal tracking-tight text-black lg:text-5xl"
          >
            {plan.price}
          </span>
        )}
      </div>

      {/* Description */}
      <p className={`mb-12 font-aeonik text-base leading-relaxed ${plan.isDark ? 'text-white' : 'text-black'}`}>
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
      <ul className="mb-12 space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-4">
            <IoCheckmarkCircle className={`h-6 w-6 shrink-0 ${plan.isDark ? 'text-[#516C83]' : 'text-[#516C83]'}`} />
            <span className={`font-aeonik text-base ${plan.isDark ? 'text-white' : 'text-black'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button 
        className={`
          flex items-center justify-center gap-2 w-full py-4 rounded-full font-aeonik text-sm font-normal transition-all duration-300 cursor-pointer bg-[#516C83]
          ${plan.isDark 
            ? 'text-white border border-white/5' 
            : 'text-white'
          }
        `}
      >
        Schedule a call
        <HiArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
}
