'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'AI Systems and Automation',
    icon: '/services/Devices.webp',
    description: 'We build AI-powered systems that improve how products operate and how teams work.\n\nThis includes AI agents, LLM workflows, automation pipelines, and intelligent integrations. Whether it is embedding AI into an existing product or building AI-first systems from scratch, the focus is always on real use cases, not experiments.',
    image: '/services/custom.webp',
    link: '/services/ai-development',
    wide: true,
  },
  {
    title: 'Product Development',
    icon: '/services/HandGrabbing.webp',
    description: 'We design and build production-ready software products, from early-stage builds to full-scale systems.\n\nThis includes SaaS platforms, internal tools, customer-facing applications, and complex systems built for real-world usage. We handle architecture, backend systems, frontend, and everything required to take a product from idea to a stable, scalable system.',
    image: '/services/nocode.webp',
    link: '/services/website-application',
    wide: true,
  },
  {
    title: 'Dedicated Engineering Teams',
    icon: '/services/ArrowsClockwise.webp',
    description: 'We provide engineers and full teams that integrate directly into your workflow for long-term development.\n\nThis model works for companies building continuously, scaling products, or extending internal teams without the overhead of hiring internally. You get consistent delivery, ownership, and engineers who understand the product, not just isolated tasks.',
    image: '/services/squarespace-home-page.webp',
    link: '/services/augmentation',
    wide: true,
  },
  // {
  //   title: 'Website Management',
  //   icon: '/services/GearSix.webp',
  //   description: 'Even though Squarespace minimises maintenance, I’m here to help if you need support with updates or changes.\n\nProfessional website management services and Squarespace website maintenance. Comprehensive website management service, including updates, changes, and ongoing technical support.',
  //   image: '/services/squarespace.webp',
  //   link: '#',
  //   wide: true,
  // },
  // {
  //   title: 'E-Commerce Solutions',
  //   icon: '/services/ShoppingCart.webp',
  //   description: 'Ready to sell online? I’ll set up your Squarespace ecommerce store, so you can reach customers globally.\n\nExpert Squarespace ecommerce and ecommerce web design services. Trusted ecommerce website designers creating powerful ecommerce website design solutions for global reach.',
  //   image: '/services/product.webp',
  //   link: '#',
  //   wide: true,
  // },
  // {
  //   title: 'SEO Optimization',
  //   icon: '/services/MagnifyingGlass.webp',
  //   description: 'A beautiful website is useless if it’s not found. I lay the groundwork for your site to shine on Google with effective search engine optimization.\n\nSpecialized SEO optimization for Squarespace and website SEO optimization solutions. Comprehensive search engine optimization Squarespace strategies for maximum online visibility.',
  //   image: '/services/seo.webp',
  //   link: '#',
  //   wide: false,
  // },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#191819] py-18 sm:py-22">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-white/80"
              style={{
                background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(91, 83, 91, 0.3) 100%)'
              }}
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Our services
            </span>
            <h2
              className="mt-8 font-aeonik text-4xl font-normal leading-tight text-white lg:text-5xl lg:leading-[1.1]"
              style={{
                backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 .14%, #2B2A2B 153.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Built around real product execution, not generic development
            </h2>
            <p className="mt-6 font-aeonik text-lg text-white">
              We focus on a small set of core services that cover how modern software is actually built and scaled. Everything else is handled within these, without unnecessary fragmentation.
            </p>
          </div>
          <button className="rounded-full bg-[#2B2A2B] px-8 py-4 font-aeonik text-base font-medium text-white transition-all hover:bg-[#3A383A]">
            Explore services
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {/* Top row: 50/50 */}
          <ServiceCard service={SERVICES[0]} />
          <ServiceCard service={SERVICES[1]} />

          {/* Bottom row: full width */}
          <ServiceCard service={SERVICES[2]} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, className = '' }: { service: typeof SERVICES[0], className?: string }) {
  const isWide = service.wide;

  const hasImage = !!service.image;
  const isTopImage = hasImage && ['Product Development', 'Dedicated Engineering Teams', 'SEO Optimization'].includes(service.title);

  // Tailored positioning based on the specific mockup for each card
  const getImagePlacement = () => {
    if (!hasImage) return "";

    // Mobile-first classes
    if (service.title === 'SEO Optimization') return "w-[80%] h-[40%] right-[-5%] top-0 lg:w-[70%] lg:h-[35%] lg:right-[-2%] lg:top-0";

    switch (service.title) {
      case 'AI Systems and Automation':
        return "w-[85%] h-[50%] right-[-5%] bottom-0 lg:w-[55%] lg:h-[65%] lg:right-[-2%] lg:bottom-0";
      case 'Product Development':
        return "w-[90%] h-[55%] right-[-5%] top-0 lg:w-[55%] lg:h-[80%] lg:right-[-2%] lg:top-0";
      case 'Dedicated Engineering Teams':
        return "w-[90%] h-[55%] right-[-5%] top-[-5%] lg:w-[60%] lg:h-[70%] lg:right-[-5%] lg:top-[-5%]";
      case 'Website Management':
        return "w-[85%] h-[50%] right-[-5%] bottom-[-2%] lg:w-[60%] lg:h-[70%] lg:right-[-5%] lg:bottom-[-2%]";
      case 'E-Commerce Solutions':
        return "w-[85%] h-[50%] right-0 bottom-0 lg:w-[55%] lg:h-[70%] lg:right-0 lg:bottom-0";
      default:
        return "w-[60%] h-full right-0 top-0 lg:w-[60%] lg:h-full lg:right-0 lg:top-0";
    }
  };

  const imagePlacement = getImagePlacement();

  return (
    <motion.div
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-[#191819] transition-[border-color] duration-300 hover:border-white/25 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-[3] rounded-xl bg-gradient-to-br from-[#2B2A2B]/[0.18] via-[#2B2A2B]/[0.06] to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        aria-hidden
      />
      <div
        className={`relative z-10 flex flex-col p-8 sm:p-10 ${isWide ? 'lg:w-[60%]' : 'w-full'} 
        ${hasImage ? (isTopImage ? 'pt-64 sm:pt-80 lg:pt-10' : 'pb-64 sm:pb-80 lg:pb-10') : ''} 
        h-full ${hasImage ? 'min-h-[520px] sm:min-h-[580px]' : 'min-h-0'} lg:min-h-0`}
      >
        {/* Icon */}
        <div className="mb-8 h-12 w-12 sm:h-14 sm:w-14">
          <Image
            src={service.icon}
            alt={service.title}
            width={56}
            height={56}
            className="h-full w-full object-contain brightness-0 invert opacity-80"
          />
        </div>

        {/* Title */}
        <h3
          className="mb-6 font-aeonik text-2xl font-normal text-white sm:text-3xl"
          style={{
            backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 .14%, #2B2A2B 153.8%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <div className="mb-8 space-y-4 font-aeonik text-md text-white">
          {service.description.split('\n\n').map((para, i) => (
            <p key={i}>
              {para.split(/(\b(?:churches|real estate agents|medical companies|law firms|Squarespace|Squarespace web designer UK|WordPress)\b)/).map((part, j) => (
                <span
                  key={j}
                  className={part.match(/\b(?:churches|real estate agents|medical companies|law firms|Squarespace|Squarespace web designer UK|WordPress)\b/) ? "font-medium text-white/70" : ""}
                >
                  {part}
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* Link */}
        <div className="mt-auto">
          <Link
            href={service.link}
            className="inline-flex items-center text-sm font-medium text-white underline decoration-white/20 underline-offset-[10px] transition-colors hover:decoration-white/40"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Decorative Image */}
      {service.image && (
        <div
          className={`pointer-events-none absolute z-[2] ${imagePlacement}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={service.image}
              alt={`${service.title} visual`}
              fill
              className={`object-contain ${service.title === 'AI Systems and Automation' ? 'object-right-bottom' :
                service.title === 'Product Development' ? 'object-right-top' :
                  service.title === 'Dedicated Engineering Teams' ? 'object-right-top' :
                    'object-right-bottom'
                }`}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
