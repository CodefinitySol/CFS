'use client';

import Image from 'next/image';
import { HiOutlineSquaresPlus, HiOutlineDevicePhoneMobile, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { LuLayoutTemplate } from 'react-icons/lu';

const FEATURES = [
  {
    title: 'Custom Design',
    description: "Need a website that perfectly aligns with your unique brand? I'll create a tailored template featuring your logo, fonts, colours, and layout. By working closely with you, I bring your vision to life, incorporating extras like the Lightbox feature for a truly custom experience.",
    icon: <LuLayoutTemplate className="h-8 w-8 text-[#181A1D] group-hover:text-white transition-colors" />,
    hoverImage: '/item-1-hover.webp',
    hoverStyles: {
      height: 'h-[120px]',
      top: 'top-0',
      imageClass: 'object-cover object-top scale-110 translate-y-[-10%]'
    }
  },
  {
    title: 'Enhanced Features',
    description: "Want to take advantage of Squarespace's powerful features but need help setting them up? As one of only two official Squarespace partners in the UK, I can enable and configure features such as e-commerce, blogs, email campaigns, and analytics. I also integrate third-party tools and extensions to enhance your site's functionality.",
    icon: <HiOutlineSquaresPlus className="h-8 w-8 text-[#181A1D] group-hover:text-white transition-colors" />,
    hoverImage: '/item-2-hover.webp',
    hoverStyles: {
      height: 'h-[140px]',
      top: 'top-8',
      imageClass: 'object-contain'
    }
  },
  {
    title: 'Mobile Optimization',
    description: "With more users accessing websites via mobile devices, optimizing for mobile is crucial. I ensure your site is fully responsive and looks beautiful on any device. As an award-winning lead Squarespace web designer at by Crawford, my goal is to deliver custom mobile versions of your site for an exceptional user experience.",
    icon: <HiOutlineDevicePhoneMobile className="h-8 w-8 text-[#181A1D] group-hover:text-white transition-colors" />,
    hoverImage: '/item-3-hover.webp',
    hoverStyles: {
      height: 'h-[160px]',
      top: 'top-4',
      imageClass: 'object-contain'
    }
  },
  {
    title: 'Effective Squarespace SEO',
    description: "A great design means nothing if it can't be found. I employ proven Squarespace SEO strategies to boost your site's visibility in search rankings. From optimizing target keywords in page titles to using high-quality images and custom CSS, I help you climb higher in search results.",
    icon: <HiOutlineMagnifyingGlass className="h-8 w-8 text-[#181A1D] group-hover:text-white transition-colors" />,
    hoverImage: '/item-4-hover.webp',
    hoverStyles: {
      height: 'h-[130px]',
      top: 'top-10',
      imageClass: 'object-contain'
    }
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span 
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83] bg-[#CFD6DC]"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
            Features
          </span>
          <h2 className="mt-8 font-aeonik text-4xl font-normal tracking-tight text-[#181A1D] sm:text-5xl lg:text-7xl">
            Squarespace Design Services You Can Trust
          </h2>
          <p className="mt-6 font-aeonik text-lg text-[#506C83]/80 max-w-2xl">
            At by Crawford, we offer a range of Squarespace web design services to help you create a stunning website that effectively showcases your brand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-start p-10 rounded-[20px] border border-gray-100 bg-[#516C83] lg:bg-white transition-all duration-500 lg:hover:bg-[#516C83] min-h-[560px]"
            >
              {/* Hover Image Area */}
              <div 
                className={`absolute left-0 w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 overflow-hidden ${feature.hoverStyles.height} ${feature.hoverStyles.top}`}
              >
                <Image 
                  src={feature.hoverImage}
                  alt={feature.title}
                  fill
                  className={`opacity-90 transition-transform duration-700 ${feature.hoverStyles.imageClass}`}
                />
                <div className="absolute inset-0 bg-[#516C83]/5" />
              </div>

              {/* Icon */}
              <div className="relative z-20 mb-10 transition-all duration-300 opacity-0 lg:opacity-100 lg:group-hover:opacity-0 lg:group-hover:pointer-events-none">
                <div className="text-[#181A1D] transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-aeonik text-2xl font-normal text-white lg:text-[#181A1D] lg:group-hover:text-white transition-colors mb-6">
                  {feature.title}
                </h3>
                <p className="font-aeonik text-base text-white/80 lg:text-[#181A1D]/60 lg:group-hover:text-white/80 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
