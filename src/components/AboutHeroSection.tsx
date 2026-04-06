'use client';

import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#181A1D] py-10 overflow-hidden flex flex-col justify-center">

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
              background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white mr-1"></span>
            <span className="font-aeonik text-xs font-medium text-white">About me</span>
          </div>

          <h1 className="font-aeonik text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-10 tracking-tight text-white"
            style={{
              backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            <span className="relative inline-block px-5 py-2 mx-1 rounded-xl border border-white/15 bg-white/[0.06]">
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
            </span>{' '}
            Software That Teams Can Rely On
          </h1>

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

          <button className="px-10 py-4 rounded-full text-white text-sm transition-all hover:scale-105 hover:shadow-lg mb-8"
            style={{ backgroundColor: '#516C83' }}
          >
            Get in touch
          </button>

        </div>
      </motion.div>

    </section>
  );
}
