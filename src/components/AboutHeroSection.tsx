'use client';

import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#181A1D] py-20 overflow-hidden flex flex-col justify-center">

      {/* Container */}
      <div className="w-full relative z-10 grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 items-center">

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
          <div className="mb-10 inline-flex items-center rounded-full border border-white/10 px-6 py-2"
            style={{
              background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
            }}
          >
            <span className="h-2 w-2 rounded-full bg-white mr-3"></span>
            <span className="font-aeonik text-sm font-medium text-white">About me</span>
          </div>

          {/* Heading */}
          <h1 className="font-aeonik text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-normal leading-[1.1] mb-10 tracking-tight text-white"
            style={{
              backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Hi, I’m Sam.
            <br />
            A{' '}
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
                Squarespace
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
            Expert.
          </h1>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="font-aeonik text-base sm:text-lg text-gray-300 leading-relaxed">
              I’m your go-to guy for crafting captivating digital experiences on Squarespace and teaching others how to do the same. As an official Squarespace Expert, Partner, and Community Leader, I bring unparalleled expertise to the table. With a track record of delivering over 700 websites, I’m not just a designer—I’m a strategist, educator, and <span className="underline decoration-white/30 underline-offset-4">mentor to a thriving community</span> of 200+ Squarespace designers worldwide.
            </p>
          </div>

          {/* CTA Button */}
          <button className="px-10 py-5 rounded-full text-white font-medium text-lg transition-all hover:scale-105 hover:shadow-lg mb-16"
            style={{ backgroundColor: '#465D71' }}
          >
            Get in touch
          </button>

          {/* Awards */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
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

      </div>
      {/* Floating Element Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[280px] h-[140px] hidden xl:block rounded-lg overflow-hidden">
        <Image src="/about-us/hero-about-3.webp" alt="Detail" fill className="object-cover" />
      </div>
      {/* Floating Element Bottom Right */}
      <div className="absolute bottom-0 right-[20px] w-[280px] h-[200px] hidden xl:block rounded-lg overflow-hidden">
        <Image src="/about-us/hero-about-4.webp" alt="Detail" fill className="object-cover" />
      </div>

    </section>
  );
}
