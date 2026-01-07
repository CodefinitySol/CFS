'use client';

import Image from 'next/image';

export default function IntegrationsSection() {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#506C83 0.8px, transparent 0.8px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 flex flex-col items-center text-center">
          <span 
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83] bg-[#CFD6DC]"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
            Integrations
          </span>
          <h2 className="mt-8 font-aeonik text-4xl font-normal leading-tight text-[#181A1D] sm:text-5xl lg:text-7xl">
            We Handle All Integrations
          </h2>
          <p className="mt-4 font-aeonik text-base sm:text-lg text-[#506C83]/80 max-w-3xl">
            From intricate challenges to seamless execution, We&apos;ll integrate all your marketing tools and automations with your website
          </p>
        </div>

        {/* Integration Visual */}
        <div className="relative w-full max-w-7xl mx-auto h-[500px] sm:h-[550px] lg:h-[750px] mt-0">
          <Image
            src="/integrations.webp"
            alt="Marketing and automation tools integrations"
            fill
            className="object-contain transition-transform duration-500 sm:rotate-0 rotate-90 scale-125 sm:scale-100"
            priority
          />
        </div>
      </div>
    </section>
  );
}
