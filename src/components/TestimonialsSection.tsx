'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';
import { useEffect, useRef, useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { motion } from 'framer-motion';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
};

const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    name: 'Michelle Choruri',
    role: 'Founder',
    company: 'Zappy Ltd',
    rating: 5,
    text: 'Codefinity is a team of Avengers.',
  },
  {
    name: 'Tyler',
    role: 'Founder',
    company: 'ZeroFill LLC',
    rating: 5,
    text: 'I appreciate the high-quality work. I needed a quick delivery without overcomplicating things, and the CFS team provided exactly that.',
  },
  {
    name: 'Joshua Dennis',
    role: 'CTO',
    company: 'Ask Trevor',
    rating: 5,
    text: 'Teams like Codefinity come around once in a while. They do not shy away from calls, they make sure requirements are met, and the work gets delivered.',
  },
  {
    name: 'Johnny Slionski',
    role: 'Founder',
    company: 'Design Me Marketing',
    rating: 5,
    text: 'They cleaned up the mess created by the previous team. Nothing but respect for these guys.',
  },
  {
    name: 'GEO',
    role: 'Product Lead',
    company: 'Waltz AI LLC',
    rating: 5,
    text: 'We hired 14 people through them, and not a single resource was a bad fit. Waltz happened because of them.',
  },
];

const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    name: 'Claire Thompson',
    role: 'VP Engineering',
    company: 'ChangeLab Ltd',
    rating: 5,
    text: 'We brought Codefinity in to shape an AI workflow that was still fuzzy in our heads. They helped us define the use case, cut the noise, and ship something practical that our team now uses every week.',
  },
  {
    name: 'Marcus Lee',
    role: 'Head of Product',
    company: 'Flow Agency LLC',
    rating: 5,
    text: 'Our MERN stack product needed senior people who could move fast without breaking the foundation. Codefinity came in, organized the backend properly, cleaned up the frontend, and made the whole app feel stable again.',
  },
  {
    name: 'Nina',
    role: 'Founder',
    company: 'Colored Caramel LLC',
    rating: 5,
    text: 'The mobile app work felt very collaborative from day one. They were thoughtful about edge cases, performance, and handoff details, and the final product felt polished instead of rushed.',
  },
  {
    name: 'David Romero',
    role: 'Technical Director',
    company: 'Schole AI LLC',
    rating: 5,
    text: 'What stood out for me was the consulting mindset. They did not just say yes to every request. They pushed back when needed, explained trade-offs clearly, and helped us make better product decisions.',
  },
  {
    name: 'Hannah Cole',
    role: 'Product Lead',
    company: 'LOOMIA GmbH',
    rating: 5,
    text: 'We asked Codefinity to help us evaluate an AI feature before committing a larger budget. They gave us honest guidance, built a lean proof of concept, and saved us from spending months in the wrong direction.',
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-[#E8ECF0]' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InfiniteCarousel({ testimonials, speed = 40 }: { testimonials: Testimonial[]; speed?: number }) {
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
  }, [speed, totalWidth, cardWidth]);

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
            className="group relative w-[500px] flex-shrink-0 overflow-hidden rounded-xl border border-white/5 bg-[#191819] p-8 transition-[border-color] duration-300 hover:border-white/25"
          >
            <div
              className="pointer-events-none absolute inset-0 z-[2] rounded-xl bg-gradient-to-br from-[#2B2A2B]/[0.18] via-[#2B2A2B]/[0.06] to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 ring-1 ring-white/5">
                    <span className="font-aeonik text-sm font-medium uppercase tracking-[0.12em] text-white/85">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <h3 className="font-aeonik text-lg font-medium text-white transition-colors group-hover:text-white/90">
                        {testimonial.name}
                      </h3>
                      <p className="font-aeonik text-xs uppercase tracking-[0.12em] text-white/55">
                        {testimonial.role}
                      </p>
                      <p className="mt-1 font-aeonik text-xs leading-snug text-white/45">
                        {testimonial.company}
                      </p>
                    </div>
                    <MdVerified className="h-5 w-5 shrink-0 text-white/50" aria-hidden />
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              <p className="font-aeonik text-base leading-relaxed text-white/75">
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
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-[#191819] py-18 sm:py-22">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <motion.div
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-white/80"
            style={{
              background:
                'linear-gradient(90deg, rgba(232, 236, 240, 0.3) 0%, rgba(91, 83, 91, 0.3) 100%)',
            }}
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/60" />
            Testimonials
          </span>
          <h2
            className="mt-8 font-aeonik text-4xl font-normal leading-tight lg:text-5xl lg:leading-[1.1]"
            style={{
              backgroundImage: 'linear-gradient(94.13deg, #e8ecf0 .14%, #2B2A2B 153.8%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Over 200+ reviews
          </h2>
          <p className="mt-6 font-aeonik text-lg text-white">
            Trusted by founders and teams building real products
          </p>
          <p className="mt-4 max-w-3xl font-aeonik text-base leading-relaxed text-white/75">
            Codefinity Solutions has worked with startups, product teams, and growing companies across AI, SaaS, and custom software development. Our clients rely on us for speed, clarity, and systems that actually hold up in production.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <InfiniteCarousel testimonials={TESTIMONIALS_ROW_1} speed={13} />
        <InfiniteCarousel testimonials={TESTIMONIALS_ROW_2} speed={16} />
      </motion.div>

      <motion.div
        className="mt-14 flex justify-center px-6 sm:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Mobile: social proof in pill, CTA below; sm+: single pill with both */}
        <div className="flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 sm:rounded-full sm:border sm:border-white/10 sm:bg-[#191819] sm:py-2 sm:pl-3 sm:pr-2 sm:pl-4">
          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-[#191819] py-2 pl-3 pr-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:py-0 sm:pl-0 sm:pr-0">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#191819]">
                  <Image src={`/about-us/review-${i}.webp`} alt="Client" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="min-w-0">
              <p className="font-aeonik text-sm font-bold text-white">132+ people</p>
              <p className="font-aeonik text-xs leading-snug text-white/70">
                Satisfied working with Codefinity Solutions
              </p>
            </div>
          </div>
          <Link
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-[#2B2A2B] px-5 py-3 text-center font-aeonik text-sm font-medium text-white transition-all hover:bg-[#3A383A] sm:w-auto sm:py-2.5"
          >
            Book a call
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
