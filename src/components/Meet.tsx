'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    icon: 'behance',
    href: '#',
    path: 'M22 7h-7v-2h7v2zm1.726 10c-.09 1.97-1.427 3.036-3.465 3.036-2.502 0-3.92-1.74-3.92-3.87 0-2.399 1.638-3.957 4.145-3.957 1.838 0 3.033.86 3.033 2.768h-4.99c.061 1.25.961 1.693 1.957 1.693.811 0 1.579-.29 1.802-1.05h1.439v-.62zm-3.26-1.95c-.061-1.12-1.056-1.503-1.809-1.503-.78 0-1.637.38-1.747 1.503h3.556zm-11.239-2.903c1.082.52 1.838 1.48 1.838 2.508 0 1.65-1.59 2.508-3.237 2.508h-2.908v-4.103h2.32c.969 0 1.579.444 1.987 1.087zm.156-4.59c.79.35 1.56 1.09 1.56 2.06 0 1.42-1.448 2.12-2.736 2.12h-3.207v-3.7h2.512c.9 0 1.29.13 1.871-.48zm-6.383 13.443h6.39c2.03 0 3.66-1 4.54-2.22.99-1.37.75-3.53-.78-4.63.95-.82 1.47-1.91 1.47-2.94 0-2.03-1.41-3.69-4.2-3.69h-7.42v13.48z',
  },
  {
    icon: 'dribbble',
    href: '#',
    path: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.387 14.88c-.686-2.023-2.126-3.766-3.832-5.056.284-.112.571-.22.862-.323 1.246 1.769 2.193 3.682 2.97 5.379zm-1.882-8.318c-1.285 1.034-2.88 1.634-4.505 1.634-.418 0-.829-.041-1.23-.117.291-.707.545-1.442.756-2.197 2.083.153 3.868-.276 4.979.68zm-4.505-1.762c-3.159 0-5.891 1.885-7.143 4.606 1.285.556 2.759.814 4.093.814 1.524 0 2.915-.312 4.015-.74-1.04-1.93-1.071-3.525-1.071-3.765-.308-.432-.676-.8-1.127-1.055-.383.085-.794.14-1.217.14h.45zm-1.552 9.074c-1.385 0-2.951-.194-4.503-.68.618 2.502 2.507 4.543 4.953 5.322-.164-1.426-.269-2.983-.45-4.642zm1.531 4.793c2.404-.627 4.316-2.43 5.163-4.757-.168-.707-.291-1.397-.373-2.064-.99.539-2.31 1.075-3.884 1.237.319 1.824.505 3.62.505 5.57 0 .005 0 .01-.001.014h-1.41z',
  },
  {
    icon: 'linkedin',
    href: '#',
    path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
  },
  {
    icon: 'youtube',
    href: '#',
    path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z',
  },
  {
    icon: 'email',
    href: '#',
    path: 'M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z',
  },
];

const STATS = [
  { label: 'Products shipped and actively running', value: 52, suffix: '+' },
  { label: 'Years of hands-on delivery experience', value: 3, prefix: '0' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

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
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

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

      // Ease out quart
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
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function MeetSam() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#506C834D] px-4 py-1.5 text-sm font-medium text-[#475569]">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#64748B]" />
              Who we are
            </span>

            <h2 className="font-aeonik text-3xl font-normal leading-[1.1] text-[#1E293B] sm:text-4xl md:text-5xl">
              Meet Codefinity Solutions
            </h2>

            <div className="space-y-6 font-aeonik text-sm leading-relaxed text-[#64748B] md:text-base">
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
              {/* <p>
                Ready to unlock the full potential of your online presence?
                Let&apos;s work together to craft a modern, impactful Squarespace
                website for your brand.{' '}
                <a
                  href="#"
                  className="font-medium text-[#1E293B] underline decoration-1 underline-offset-4"
                >
                  Contact me today!
                </a>
              </p> */}
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.icon}
                  href={link.href}
                  className="flex h-12 w-15 items-center justify-center rounded-full bg-[#B0B1B1] text-white transition-colors hover:bg-[#516C83]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="relative mx-auto w-full max-w-[600px] lg:mr-0 lg:max-w-none"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100">
              {/* Image Placeholder */}
              <Image
                src="/person.webp"
                alt="Sam Crawford"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Stats Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 mb-4">
                <div className="grid grid-cols-3 divide-x divide-white/20 rounded-2xl bg-white/10 p-5 text-white backdrop-blur-xl">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="px-2 text-center sm:px-4">
                      <div className="font-aeonik text-2xl font-bold sm:text-3xl md:text-4xl">
                        <Counter
                          target={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </div>
                      <div className="mt-1 text-[10px] font-medium uppercase tracking-wide opacity-80 sm:text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
