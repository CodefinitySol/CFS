'use client';

import Image from 'next/image';
import ContactForm from './molecules/ContactForm';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:bg-white sm:py-16 md:py-20"
      style={{
        background: 'linear-gradient(180deg, rgba(80, 108, 131, 0.3) 0%, rgba(80, 108, 131, 0.12) 100%)'
      }}
    >
      {/* Container to restore white background on desktop, while section carries gradient for mobile */}
      <div className="absolute inset-0 hidden bg-white sm:block" />
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.2
        }}
      />

      {/* Main Colored Background Container (Framed by the plus signs) - Desktop only */}
      <div
        className="absolute inset-6 z-1 hidden sm:inset-8 sm:block md:inset-12"
        style={{
          background: 'linear-gradient(180deg, rgba(80, 108, 131, .3) 0%, rgba(80, 108, 131, .12) 100%)'
        }}
      />

      {/* Decorative Crosses at corners of the colored container - Desktop only */}
      <div className="absolute left-6 top-6 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-[#506C83] sm:left-8 sm:top-8 sm:block md:left-12 md:top-12">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>
      <div className="absolute right-6 top-6 z-20 hidden translate-x-1/2 -translate-y-1/2 text-[#506C83] sm:right-8 sm:top-8 sm:block md:right-12 md:top-12">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>
      <div className="absolute left-6 bottom-6 z-20 hidden -translate-x-1/2 translate-y-1/2 text-[#506C83] sm:left-8 sm:bottom-8 sm:block md:left-12 md:bottom-12">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>
      <div className="absolute right-6 bottom-6 z-20 hidden translate-x-1/2 translate-y-1/2 text-[#506C83] sm:right-8 sm:bottom-8 sm:block md:right-12 md:bottom-12">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 py-16 sm:px-12 sm:py-20 lg:px-32 lg:py-24 xl:px-44">
        <div className="flex flex-col gap-22 lg:flex-row lg:items-start">
          {/* Left Content */}
          <motion.div
            className="max-w-2xl flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-[#597589] bg-[#AEBAC5]"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#516C83]" />
              Your dream site
            </span>

            <h2
              className="mt-4 font-aeonik text-2xl font-normal leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl"
              style={{
                backgroundImage: 'linear-gradient(94.13deg, #1e293b .14%, #506883 153.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Start Your Project
            </h2>

            <p className="mt-4 font-aeonik text-base leading-relaxed text-slate-600 sm:text-lg">
              Join the ranks of businesses that trust my expertise. Start your
              project with a free discovery call and see how we can bring your
              vision to life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <button
                className="group flex items-center gap-2 rounded-full bg-[#506C83] px-7 py-3.5 font-aeonik text-base font-medium text-white transition-all hover:bg-[#405669] hover:shadow-xl"
              >
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

              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                      <Image
                        src={`/jim.jpeg`}
                        alt="User avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="font-aeonik text-sm font-medium text-slate-900">700+ people</div>
                  <div className="font-aeonik text-xs text-slate-500">loved working with Sam</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            className="relative w-full lg:w-[580px] lg:shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
