'use client';

import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'Custom Website Design',
    icon: '/services/Devices.webp',
    description: 'Catering to all industries, from churches, real estate agents, medical companies, to law firms ensuring your website reflects your unique brand.\n\nSpecializing in custom website design and Squarespace custom website designing, I create bespoke sites that capture your brand and convert visitors into customers.',
    image: '/services/custom.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'No-Code, Hassle-Free Design',
    icon: '/services/HandGrabbing.webp',
    description: 'Enjoy exceptional design without the need for complex code, saving you time and money on maintenance.\n\nProfessional no-code website design using Squarespace’s intuitive platform. Get stunning, hassle-free websites without technical complexity or ongoing maintenance headaches.',
    image: '/services/nocode.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'Coding Support',
    icon: '/services/Code.webp',
    description: 'Need something unique? I offer custom coding services to push the boundaries of what’s possible on Squarespace.\n\nCustom code Squarespace expertise, and tailored code support service. I create unique website functionality through advanced coding that exceeds platform limitations.',
    link: '#',
  },
  {
    title: 'Online Course Platforms',
    icon: '/services/GraduationCap.webp',
    description: 'Want to monetize your expertise? I can help you set up a course platform to share your knowledge and generate income.\n\nAs a leading Squarespace web designer UK, I specialize in Squarespace online course design and custom Squarespace course website development for educational entrepreneurs.',
    link: '#',
  },
  {
    title: 'Accessibility Audits',
    icon: '/services/File.webp',
    description: 'Make sure your site is accessible to everyone. I can conduct an accessibility audit to ensure compliance.\n\nProfessional website accessibility audits and compliance assessments. Ensure your Squarespace site meets WCAG standards, creating inclusive experiences for all users.',
    link: '#',
  },
  {
    title: 'Website Migration',
    icon: '/services/ArrowsClockwise.webp',
    description: 'Switching platforms? I’ll ensure a smooth transition to Squarespace, making the process effortless for you.\n\nSpecialized website migration service for migrate WordPress to Squarespace projects. Professional migration of website content, design, and functionality without complications.',
    image: '/services/squarespace-home-page.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'Website Management',
    icon: '/services/GearSix.webp',
    description: 'Even though Squarespace minimises maintenance, I’m here to help if you need support with updates or changes.\n\nProfessional website management services and Squarespace website maintenance. Comprehensive website management service, including updates, changes, and ongoing technical support.',
    image: '/services/squarespace.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'E-Commerce Solutions',
    icon: '/services/ShoppingCart.webp',
    description: 'Ready to sell online? I’ll set up your Squarespace ecommerce store, so you can reach customers globally.\n\nExpert Squarespace ecommerce and ecommerce web design services. Trusted ecommerce website designers creating powerful ecommerce website design solutions for global reach.',
    image: '/services/product.webp',
    link: '#',
    wide: true,
  },
  {
    title: 'SEO Optimization',
    icon: '/services/MagnifyingGlass.webp',
    description: 'A beautiful website is useless if it’s not found. I lay the groundwork for your site to shine on Google with effective search engine optimization.\n\nSpecialized SEO optimization for Squarespace and website SEO optimization solutions. Comprehensive search engine optimization Squarespace strategies for maximum online visibility.',
    image: '/services/seo.webp',
    link: '#',
    wide: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#181A1D] py-24 sm:py-32">
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
              Want To Save Time And Money By <br className="hidden md:block" /> Working With A Squarespace Expert?
            </h2>
            <p className="mt-6 font-aeonik text-lg text-white/60">
              Our services can be purchased individually or bundled together for a comprehensive solution. This flexibility allows you to get exactly what you need, without paying for features you don't.
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
          <ServiceCard service={SERVICES[5]} className="lg:col-span-3" />
          <ServiceCard service={SERVICES[6]} className="lg:col-span-3" />

          {/* Row 4: 2 cards (One wide, one normal) */}
          <ServiceCard service={SERVICES[7]} className="lg:col-span-3" />
          <ServiceCard service={SERVICES[8]} className="lg:col-span-3" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, className = '' }: { service: typeof SERVICES[0], className?: string }) {
  const isWide = service.wide;

  const hasImage = !!service.image;
  const isTopImage = hasImage && ['No-Code, Hassle-Free Design', 'Website Migration', 'SEO Optimization'].includes(service.title);

  // Tailored positioning based on the specific mockup for each card
  const getImagePlacement = () => {
    if (!hasImage) return "";
    
    // Mobile-first classes
    if (service.title === 'SEO Optimization') return "w-[80%] h-[40%] right-[-5%] top-0 lg:w-[70%] lg:h-[35%] lg:right-[-2%] lg:top-0";
    
    switch (service.title) {
      case 'Custom Website Design':
        return "w-[85%] h-[50%] right-[-5%] bottom-0 lg:w-[55%] lg:h-[65%] lg:right-[-2%] lg:bottom-0";
      case 'No-Code, Hassle-Free Design':
        return "w-[90%] h-[55%] right-[-5%] top-0 lg:w-[55%] lg:h-[80%] lg:right-[-2%] lg:top-0";
      case 'Website Migration':
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
                service.title === 'Custom Website Design' ? 'object-right-bottom' : 
                service.title === 'No-Code, Hassle-Free Design' ? 'object-right-top' :
                service.title === 'Website Migration' ? 'object-right-top' :
                'object-right-bottom'
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
