'use client';

import Image from 'next/image';
import Header from './Header';
import ContactForm from './ContactForm';

export default function HeroSection() {

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080c14] pb-24 sm:pb-32 lg:pb-40">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-gradient.webp"
          alt="Background Gradient"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20 xl:gap-24">
          {/* Left Section - Hero Content */}
          <div className="flex-1 space-y-5 lg:space-y-8">
            {/* Top Badge Group */}
            <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-1 backdrop-blur-md">
              <div
                className="flex items-center gap-2 rounded-full px-4 py-1.5 transition-transform hover:scale-[1.02]"
                style={{
                  background:
                    'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="font-aeonik text-xs font-medium text-white">
                  Available for work
                </span>
              </div>
              <button className="px-5 font-aeonik text-xs font-medium text-white/60 transition-colors hover:text-white">
                Get in touch now
              </button>
            </div>

            {/* Main Heading */}
            <h1
              className="font-aeonik text-2xl font-normal leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              <span className="relative inline-block px-4 py-2">
                <span
                  className="relative z-10 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  Codefinity Solutions:
                </span>
                <span
                  className="absolute inset-0 z-0 bg-[url('/squareborder.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
                  aria-hidden="true"
                />
              </span>
              Software<br /> Built to Scale, Not Just Ship
            </h1>

            {/* Description */}
            <p className="glass-text max-w-2xl font-aeonik text-xs leading-[1.6] text-white/90 sm:text-sm md:text-base">
              We design and build reliable software products from web and mobile applications to complex systems that grow with your business. Our team works across modern stacks, AI-driven workflows, and cloud infrastructure to turn ideas into products that are stable, maintainable, and ready for real users. Clear communication. Thoughtful engineering. No shortcuts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-full border border-white/90 bg-white px-7 py-3.5 font-aeonik text-base font-medium text-gray-900 transition-all hover:border-white hover:shadow-lg cursor-pointer">
                Schedule a call
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="rounded-full bg-[#374151] px-7 py-3.5 font-aeonik text-base font-medium text-white transition-all hover:bg-[#4b5563] cursor-pointer">
                See how we work
              </button>
            </div>

            {/* Awards Section */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/marketplace.webp"
                  alt="Squarespace Marketplace Expert"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/community.webp"
                  alt="Squarespace Community Leader"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/member.webp"
                  alt="Squarespace Circle Member"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="relative w-full lg:w-[520px] lg:flex-shrink-0">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Floating CTA Button removed - moved to global layout */}
    </section>
  );
}
