'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#181A1D] py-10 overflow-hidden flex flex-col justify-center">

      {/* Container */}
      <motion.div
        className="w-full relative z-10 grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* Left Image (Tall) */}
        <div className="block col-span-1 lg:col-span-3 order-2 lg:order-none relative h-[300px] lg:h-[600px] rounded-lg lg:-translate-y-26 mt-8 lg:mt-0">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/about-us/hero-about-1.webp"
              alt="Sam Crawford Speaking"
              fill
              className="object-cover lg:object-contain"
              priority
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="col-span-2 lg:col-span-6 order-1 lg:order-none flex flex-col items-center text-center px-4 md:px-8">

          {/* Badge */}
          <div className="mb-10 inline-flex items-center rounded-full border border-white/10 px-3 py-1"
            style={{
              background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white mr-1"></span>
            <span className="font-aeonik text-xs font-medium text-white">About me</span>
          </div>

          {/* Heading */}
          <h1 className="font-aeonik text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-10 tracking-tight text-white"
            style={{
              backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            <span className="relative inline-block px-6 py-2 mx-2">
              <span
                className="relative z-10"
                style={{
                  backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We Build
              </span>
              <span className="absolute inset-0 z-0 w-full h-full">
                <Image
                  src="/about-us/square-about-1.png"
                  alt="border"
                  fill
                  className="object-fill"
                  quality={100}
                />
              </span>
            </span>{' '}
            Software That Teams Can Rely On
          </h1>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-6">
            <p className="font-aeonik text-base sm:text-md text-white leading-relaxed">
              Codefinity Solutions is a product focused software development company built by engineers who care about how software holds up after launch.
              <br />
              <br />
              We started small and grew quickly by doing the work properly. Clear planning. Strong execution. Ownership at every stage. Today, our team builds web, mobile, and AI driven products for companies that want systems they can trust, scale, and improve over time.
              <br />
              <br />
              We are not tied to trends or templates. We focus on understanding the problem, choosing the right tools, and building software that works in real conditions with real users.
            </p>
          </div>

          {/* CTA Button */}
          <button className="px-10 py-4 rounded-full text-white text-sm transition-all hover:scale-105 hover:shadow-lg mb-12"
            style={{ backgroundColor: '#516C83' }}
          >
            Get in touch
          </button>

          {/* Awards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-6 items-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image src="/marketplace.webp" alt="Squarespace Marketplace Expert" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image src="/community.webp" alt="Squarespace Community Leader" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image src="/member.webp" alt="Squarespace Circle Member" fill className="object-contain" />
            </div>
          </div>

        </div>

        {/* Right Image (Tall with overlay) */}
        <div className="block col-span-1 lg:col-span-3 order-3 lg:order-none relative h-[300px] lg:h-[600px] rounded-lg lg:-translate-y-56 mt-8 lg:mt-0">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/about-us/hero-about-2.webp"
              alt="Sam Crawford Working"
              fill
              className="object-contain lg:object-contain"
            />
          </div>
        </div>

      </motion.div>
      {/* Floating Element Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[280px] h-[140px] hidden xl:block rounded-lg overflow-hidden">
        <Image src="/about-us/hero-about-3.webp" alt="Detail" fill className="object-cover" />
      </div>
      {/* Floating Element Bottom Right */}
      <div className="absolute bottom-0 right-[20px] w-[280px] h-[200px] hidden xl:block rounded-lg overflow-hidden">
        <Image src="/about-us/hero-about-2.png" alt="Detail" fill className="object-cover" />
      </div>

    </section>
  );
}
