'use client';

import Image from 'next/image';
import Header from './Header';
import ContactForm from './molecules/ContactForm';
import { motion } from 'framer-motion';
import { Badge, Heading, Paragraph, Button } from '@/components/atoms';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080c14] pb-16 sm:pb-10 lg:pb-34">
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
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-10 xl:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20 xl:gap-24">
          {/* Left Section - Hero Content */}
          <motion.div
            className="flex-1 space-y-5 lg:space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Top Badge Group */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-1 backdrop-blur-md"
            >
              <Badge
                variant="gradient"
                size="sm"
                icon={<span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.8)]" />}
                className="transition-transform hover:scale-[1.02]"
              >
                Available for work
              </Badge>
              <button className="px-5 font-aeonik text-xs font-medium text-white/60 transition-colors hover:text-white">
                Get in touch now
              </button>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <Heading
                level={1}
                variant="gradient"
                size="xl"
                className="leading-[1.2]"
              >
                Software Built to Scale, <br /> Not{' '}
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
                    Just Ship
                  </span>
                  <span
                    className="absolute inset-0 z-0 bg-[url('/squareborder.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
                    aria-hidden="true"
                  />
                </span>
              </Heading>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <Paragraph size="md" variant="light" className="max-w-2xl">
                We design and build reliable software products from web and mobile applications to complex systems that grow with your business. Our team works across modern stacks, AI-driven workflows, and cloud infrastructure to turn ideas into products that are stable, maintainable, and ready for real users. Clear communication. Thoughtful engineering. No shortcuts.
              </Paragraph>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-12"
            >
              <Button
                variant="primary"
                size="md"
                icon={
                  <svg
                    className="h-4 w-4"
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
                }
              >
                Schedule a call
              </Button>

              <Button variant="secondary" size="md">
                See how we work
              </Button>
            </motion.div>

            {/* Awards Section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
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
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="relative w-full lg:w-[520px] lg:flex-shrink-0"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
