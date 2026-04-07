'use client';

import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#191819] py-10 overflow-hidden flex flex-col justify-center">

      <motion.div
        className="w-full relative z-10 mx-auto max-w-4xl px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center">

          <div className="mb-10 inline-flex items-center rounded-full border border-white/10 px-3 py-1"
            style={{
              background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(91,83,91,.3) 100%)'
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white mr-1"></span>
            <span className="font-aeonik text-xs font-medium text-white">About us</span>
          </div>

          <h1 className="font-aeonik text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-10 tracking-tight text-white"
            style={{
              backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            <span className="relative inline-block px-5 py-2 mx-1 rounded-xl border border-white/15 bg-white/[0.06]">
              <span
                className="relative z-10"
                style={{
                  backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We build
              </span>
            </span>{' '}
            software that holds up in production
          </h1>

          <div className="max-w-2xl mx-auto mb-6">
            <p className="font-aeonik text-base sm:text-md text-white leading-relaxed">
              Codefinity Solutions is a product engineering team focused on building systems that are stable, scalable, and ready for real-world use.
              <br />
              <br />
              We work with founders and companies to design and deliver production-ready software across web, mobile, and AI systems. The focus is always the same - build it right, so it works reliably as the product grows.
              <br />
              <br />
              Our approach is straightforward. Understand the problem, make the right technical decisions early, and execute without unnecessary complexity. No overengineering, no shortcuts, no fragile systems that break under real usage.
            </p>
          </div>

          <button className="px-10 py-4 rounded-full text-white text-sm transition-all hover:scale-105 hover:shadow-lg mb-8"
            style={{ backgroundColor: '#2B2A2B' }}
          >
            Get in touch
          </button>

        </div>
      </motion.div>

    </section>
  );
}
