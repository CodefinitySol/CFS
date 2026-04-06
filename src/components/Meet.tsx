'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { COMPANY_EMAIL_MAILTO } from '@/constants/contact';
import { IoMailOutline } from 'react-icons/io5';

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/company/codefinity-solutions/',
    label: 'LinkedIn',
    external: true,
    icon: <FaLinkedinIn className="h-5 w-5" aria-hidden />,
  },
  {
    href: 'https://www.instagram.com/codefinitysol/',
    label: 'Instagram',
    external: true,
    icon: <FaInstagram className="h-5 w-5" aria-hidden />,
  },
  {
    href: COMPANY_EMAIL_MAILTO,
    label: 'Email',
    external: false,
    icon: <IoMailOutline className="h-5 w-5" aria-hidden />,
  },
] as const;

const STATS = [
  {
    label: 'Products shipped',
    value: 52,
    suffix: '+',
    prefix: '',
  },
  {
    label: 'Years of delivery experience',
    value: 3,
    prefix: '0',
    suffix: '',
  },
  {
    label: 'Client satisfaction',
    value: 100,
    prefix: '',
    suffix: '%',
  },
] as const;

function Counter({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.35 }
    );

    const node = elementRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 4);

      setCount(Math.floor(target * ease));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums tracking-tight">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function MeetSam() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-22">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-[#2B2A2B4D] px-4 py-1.5 text-sm font-medium text-[#4D494D]">
                <span className="mr-2 h-2 w-2 rounded-full bg-[#6D656D]" />
                Who we are
              </span>
              <h2 className="font-aeonik text-3xl font-normal leading-[1.1] text-[#191819] sm:text-4xl md:text-5xl">
                Meet Codefinity Solutions
              </h2>
            </div>

            <div className="space-y-3 font-aeonik text-md leading-relaxed text-black">
              <p>
                Codefinity Solutions is a product-focused software development team built around one idea: good software comes from clear thinking, strong execution, and people who care about the outcome.
              </p>
              <p>
                We work with founders, product teams, and growing businesses to design and build web and mobile applications that are reliable from day one and flexible enough to grow over time. Our work spans modern web stacks, cloud infrastructure, AI-driven systems, and practical automation. Always with an emphasis on maintainability, performance, and real-world use.
              </p>
              <p>
                What sets us apart is how we work. We stay close to the problem, ask the right questions early, and make technical decisions with long-term impact in mind. No overengineering. No rushed shortcuts. Just thoughtful development backed by experience.
              </p>
              <p>
                We started as a small team and grew quickly by delivering results and earning trust. Today, we continue to scale carefully, building strong partnerships and products that teams are proud to ship.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={link.label}
                  className="flex h-12 w-15 items-center justify-center rounded-full bg-[#ACA5AC] text-white transition-colors hover:bg-[#2B2A2B]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: stats stack (replaces photo) */}
          <motion.div
            className="relative mx-auto w-full max-w-[500px] lg:mr-0 lg:max-w-[520px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex aspect-[4/5] w-full flex-col gap-3 sm:gap-4">
                {STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-[#E7E2E7]/90 bg-white/90 px-5 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-[#2B2A2B] hover:bg-[#2B2A2B] hover:shadow-[0_12px_40px_-16px_rgba(91,83,91,0.45)] sm:px-7 sm:py-6"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(100% 100% at 20% 0%, rgba(255,255,255,0.14), transparent 55%)',
                      }}
                    />
                    <div className="absolute bottom-0 left-0 top-0 z-0 w-1 rounded-full bg-[#2B2A2B] transition-[width,background-color] duration-300 ease-out group-hover:w-1.5 group-hover:bg-white/45" />
                    <div className="relative z-10">
                      <p className="font-aeonik text-[clamp(2.5rem,8vw,3.75rem)] font-medium leading-none text-[#191819] transition-[color,transform] duration-300 ease-out group-hover:text-white group-hover:translate-x-0.5">
                        <Counter
                          target={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </p>
                      <p className="mt-3 max-w-[20ch] font-aeonik text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#6D656D] transition-[color] duration-300 ease-out group-hover:text-white/95 sm:text-xs sm:tracking-[0.22em]">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
