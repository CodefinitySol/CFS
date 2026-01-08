'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { MdVerified } from 'react-icons/md';

const TESTIMONIALS_ROW_1 = [
  {
    name: 'Jeff Smith',
    image: '/jim.jpeg',
    rating: 5,
    text: "Sam's attention to detail put him above the rest. I was traveling and the business was in the process of being acquired while we were building and it never slowed him or his team down!",
  },
  {
    name: 'Jack Schiavone',
    image: '/jim.jpeg',
    rating: 5,
    text: "Sam and the team gave me everything I was looking for with the website build. Alongside their attention to detail was the speed of their support. I couldn't recommend by Crawford more, especially for anyone who wants a website that converts leads into customers. Thanks!",
  },
  {
    name: 'Nathan Bethell',
    image: '/jim.jpeg',
    rating: 5,
    text: 'Sam is a top person to work with! No ego, no B/S, just high quality professionalism and delivery of sites and content that work. If you\'re in the market for a Squarespace site then you can\'t go wrong!',
  },
  {
    name: 'Elliot Napier',
    image: '/jim.jpeg',
    rating: 5,
    text: 'Exceptional communication throughout the process, very prompt updates to the site made it very easy to iterate & determine the final design, content & style. Really happy with the finished product, would highly recommend to anyone looking to get an excellent website to help their brand / product stand out.',
  },
  {
    name: 'Daniel Gordon',
    image: '/jim.jpeg',
    rating: 5,
    text: 'Sam is professional, friendly, personable and easy to work with. He took time to try and understand my requirements and was always relaxed and accommodating when I wanted to make revisions or changes. His design ideas are clean and work well. I recommend him without hesitation.',
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    name: 'Maria Wilson',
    image: '/jim.jpeg',
    rating: 5,
    text: 'Sam was an incredible resource for us when building a Squarespace membership site. His attention to detail, vast knowledge, and quick responses made the whole experience so easy. I highly recommend by Crawford and would be happy to work with him again should another project come up.',
  },
  {
    name: 'Gaurav Ahluwalia',
    image: '/jim.jpeg',
    rating: 5,
    text: 'by Crawford are great to work with - extremely quick to work with and improvements to our website are always made to a high standard. Highly recommend Sam\'s services!',
  },
  {
    name: 'Jim McVey',
    image: '/jim.jpeg',
    rating: 5,
    text: 'by Crawford is extremely professional and personable. We\'ve worked with Sam on multiple projects and highly recommend his services!',
  },
  {
    name: 'Sarah Johnson',
    image: '/jim.jpeg',
    rating: 5,
    text: 'Working with Sam was a fantastic experience. His expertise in Squarespace is unmatched, and the final result exceeded all expectations. Highly recommended!',
  },
  {
    name: 'Michael Chen',
    image: '/jim.jpeg',
    rating: 5,
    text: 'Outstanding work! Sam delivered exactly what we needed, on time and within budget. The website looks amazing and performs flawlessly.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-[#506C83]' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InfiniteCarousel({ testimonials, speed = 40 }: { testimonials: typeof TESTIMONIALS_ROW_1, speed?: number }) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 500 + 24;
  const totalWidth = testimonials.length * cardWidth;

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setOffset((prevOffset) => {
        const movement = (delta / 1000) * (cardWidth / speed);
        const newOffset = prevOffset + movement;
        
        if (newOffset >= totalWidth) {
          return newOffset - totalWidth;
        }
        return newOffset;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, totalWidth]);

  const displayItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <div
        className="flex items-stretch gap-6"
        style={{
          transform: `translateX(-${offset}px)`,
          willChange: 'transform',
        }}
      >
        {displayItems.map((testimonial, i) => (
          <div
            key={`${testimonial.name}-${i}`}
            className="group relative w-[500px] flex-shrink-0 overflow-hidden rounded-2xl border border-transparent bg-[#212325] p-8 transition-all duration-500 hover:border-[#506C83]/30"
          >
            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90.45deg, rgba(80, 108, 131, .4) -156%, rgba(80, 108, 131, .2) 96.13%, rgba(80, 108, 131, .4) 102.47%)',
              }}
            />

            <div className="relative z-10 flex h-full flex-col">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-600">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-aeonik text-lg font-medium text-white">
                      {testimonial.name}
                    </h3>
                    {/* Verified Icon */}
                    <MdVerified className="h-5 w-5 text-[#506C83]" />
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="font-aeonik text-base leading-relaxed text-white/70">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#181A1D] py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <span 
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-white/90"
              style={{
                background: 'linear-gradient(90deg, rgba(232, 236, 240, .3) 0%, rgba(80, 108, 131, .3) 100%)',
              }}
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Testimonials
            </span>
            <h2 
              className="mt-6 font-aeonik text-4xl font-normal sm:text-5xl lg:text-6xl"
              style={{
                backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Over 200+ Reviews
            </h2>
          </div>
          <button className="hidden rounded-full bg-[#506C83] px-6 py-3 font-aeonik text-sm font-medium text-white transition-all hover:bg-[#405669] lg:block">
            View all
          </button>
        </div>
      </div>

      {/* Scrolling Rows with Edge Fade */}
      <div className="relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 */}
        <InfiniteCarousel testimonials={TESTIMONIALS_ROW_1} speed={13} />
        
        {/* Row 2 */}
        <InfiniteCarousel testimonials={TESTIMONIALS_ROW_2} speed={16} />
      </div>

      {/* Footer CTA Pill */}
      <div className="mt-16 flex justify-center">
        <div 
          className="inline-flex items-center gap-6 rounded-full px-2 py-2 pl-4 bg-[#2A3640]"
          
        >
          {/* Avatar Stack */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#181A1D]">
                  <Image
                    src={`/jim.jpeg`}
                    alt="User avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="ml-4 font-aeonik text-sm text-white/70">
              +200 top rated reviews
            </span>
          </div>

          {/* Book a call Button */}
          <button 
            className="rounded-full bg-[#506C83] px-6 py-2.5 font-aeonik text-sm font-medium text-white transition-all hover:bg-[#405669]"
          >
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
