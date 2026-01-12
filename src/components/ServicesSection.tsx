'use client';

import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'AI Development and Automation',
    icon: '/services/Devices.webp',
    description: 'We design and build AI-powered systems that solve real problems. This includes AI agents, LLM-based workflows, model training, and intelligent automation tailored to your product or internal operations.\n\n Our team works deeply with Python-based stacks and modern AI frameworks, handling everything from architecture and experimentation to production deployment and monitoring.',
    image: '/services/custom.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'Web Application Development',
    icon: '/services/HandGrabbing.webp',
    description: 'We build robust web applications using modern stacks like MERN and Python. Many of our products are AI-native by design, while others focus on performance, reliability, and clean user experience.\n\n Whether it is a customer-facing platform, internal tool, or SaaS product, we build systems that are easy to maintain and ready to scale.',
    image: '/services/nocode.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'Mobile Application Development',
    icon: '/services/Code.webp',
    description: 'We develop mobile applications that integrate seamlessly with your backend systems and business logic. From MVPs to production-ready apps, we focus on stability, performance, and long-term usability rather than quick demos.',
    link: '#',
  },
  {
    title: 'No-Code and Workflow Automation',
    icon: '/services/GraduationCap.webp',
    description: 'For teams that need speed without unnecessary complexity, we offer no-code and low-code solutions using tools like n8n, CMS platforms, and modern automation stacks.\n\n This is ideal for internal tools, integrations, dashboards, and rapid launches where efficiency matters more than custom code everywhere.',
    link: '#',
  },
  {
    title: 'DevOps and Infrastructure',
    icon: '/services/File.webp',
    description: 'We handle deployment, cloud setup, CI pipelines, monitoring, and scaling. Our goal is simple: your product should be stable, observable, and easy to operate as usage grows.\n\n We support both new infrastructure setups and improvements to existing systems.',
    link: '#',
  },
  {
    title: 'Dedicated Teams and Augmentation',
    icon: '/services/ArrowsClockwise.webp',
    description: 'We provide dedicated engineers and full teams who integrate directly into your workflow. This model works well for companies that need long-term ownership without the overhead of hiring internally.\n\n You get experienced developers, clear communication, and consistent delivery.',
    image: '/services/squarespace-home-page.webp',
    link: '#',
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
    <section className="bg-[#181A1D] py-18 sm:py-22">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span 
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-white/80"
              style={{
                background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(80, 108, 131, 0.3) 100%)'
              }}
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Our services
            </span>
            <h2 
              className="mt-8 font-aeonik text-4xl font-normal leading-tight text-white lg:text-5xl lg:leading-[1.1]"
              style={{
                backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
               Built Around Real Product Needs
            </h2>
            <p className="mt-6 font-aeonik text-lg text-white/60">
              We offer a focused set of services covering the full lifecycle of modern software products. From AI-driven systems to web and mobile applications, we build what is needed, cut what is not, and stay involved long after launch.
            </p>
          </div>
          <button className="rounded-full bg-[#506C83] px-8 py-4 font-aeonik text-base font-medium text-white transition-all hover:bg-[#405669]">
            Explore services
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {/* Row 1: 2 large cards */}
          <ServiceCard service={SERVICES[0]} className="lg:col-span-3" />
          <ServiceCard service={SERVICES[1]} className="lg:col-span-3" />

          {/* Row 2: 3 cards */}
          <ServiceCard service={SERVICES[2]} className="lg:col-span-2" />
          <ServiceCard service={SERVICES[3]} className="lg:col-span-2" />
          <ServiceCard service={SERVICES[4]} className="lg:col-span-2" />

          {/* Row 3: 2 large cards */}
          <ServiceCard service={SERVICES[5]} className="lg:col-span-6" />
          {/* <ServiceCard service={SERVICES[6]} className="lg:col-span-3" /> */}

          {/* Row 4: 2 cards (One wide, one normal) */}
          {/* <ServiceCard service={SERVICES[7]} className="lg:col-span-3" /> */}
          {/* <ServiceCard service={SERVICES[8]} className="lg:col-span-3" /> */}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, className = '' }: { service: typeof SERVICES[0], className?: string }) {
  const isWide = service.wide;

  const hasImage = !!service.image;
  const isTopImage = hasImage && ['Web Application Development, Hassle-Free Design', 'Dedicated Teams and Augmentation', 'SEO Optimization'].includes(service.title);

  // Tailored positioning based on the specific mockup for each card
  const getImagePlacement = () => {
    if (!hasImage) return "";
    
    // Mobile-first classes
    if (service.title === 'SEO Optimization') return "w-[80%] h-[40%] right-[-5%] top-0 lg:w-[70%] lg:h-[35%] lg:right-[-2%] lg:top-0";
    
    switch (service.title) {
      case 'AI Development and Automation':
        return "w-[85%] h-[50%] right-[-5%] bottom-0 lg:w-[55%] lg:h-[65%] lg:right-[-2%] lg:bottom-0";
      case 'Web Application Development':
        return "w-[90%] h-[55%] right-[-5%] top-0 lg:w-[55%] lg:h-[80%] lg:right-[-2%] lg:top-0";
      case 'Dedicated Teams and Augmentation':
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
    <div 
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-[#181a1d] transition-all duration-500 hover:bg-[#1c1f22] border border-white/5 h-full ${className}`}
    >
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
        <h3 className="mb-6 font-aeonik text-2xl font-normal text-white sm:text-3xl">
          {service.title}
        </h3>

        {/* Description */}
        <div className="mb-8 space-y-4 font-aeonik text-base leading-relaxed text-white/50">
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
            className="inline-flex items-center text-sm font-medium text-white underline decoration-white/20 underline-offset-[10px] transition-all hover:decoration-white"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Decorative Image */}
      {service.image && (
        <div 
          className={`absolute pointer-events-none ${imagePlacement}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={service.image}
              alt={`${service.title} visual`}
              fill
              className={`object-contain ${
                service.title === 'AI Development and Automation' ? 'object-right-bottom' : 
                service.title === 'Web Application Development' ? 'object-right-top' :
                service.title === 'Dedicated Teams and Augmentation' ? 'object-right-top' :
                'object-right-bottom'
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
