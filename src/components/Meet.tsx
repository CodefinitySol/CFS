'use client';

import { useEffect, useState, useRef } from 'react';
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
              <span className="inline-flex items-center rounded-full bg-[#506C834D] px-4 py-1.5 text-sm font-medium text-[#475569]">
                <span className="mr-2 h-2 w-2 rounded-full bg-[#64748B]" />
                Who we are
              </span>
              <h2 className="font-aeonik text-3xl font-normal leading-[1.1] text-[#1E293B] sm:text-4xl md:text-5xl">
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
                    className="group relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-[#E2E8F0]/90 bg-white/90 px-5 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-[#526c83] hover:bg-[#526c83] hover:shadow-[0_12px_40px_-16px_rgba(82,108,131,0.45)] sm:px-7 sm:py-6"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(100% 100% at 20% 0%, rgba(255,255,255,0.14), transparent 55%)',
                      }}
                    />
                    <div className="absolute bottom-0 left-0 top-0 z-0 w-1 rounded-full bg-[#516C83] transition-[width,background-color] duration-300 ease-out group-hover:w-1.5 group-hover:bg-white/45" />
                    <div className="relative z-10">
                      <p className="font-aeonik text-[clamp(2.5rem,8vw,3.75rem)] font-medium leading-none text-[#1E293B] transition-[color,transform] duration-300 ease-out group-hover:text-white group-hover:translate-x-0.5">
                        <Counter
                          target={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </p>
                      <p className="mt-3 max-w-[20ch] font-aeonik text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#64748B] transition-[color] duration-300 ease-out group-hover:text-white/95 sm:text-xs sm:tracking-[0.22em]">
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
