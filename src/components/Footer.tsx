'use client';

import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import NewsletterSection from './NewsletterSection';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';
import { COMPANY_EMAIL_MAILTO } from '@/constants/contact';

const SOCIAL_LINKS = [
  {
    icon: <FaLinkedinIn className="h-5 w-5" aria-hidden />,
    href: 'https://www.linkedin.com/company/codefinity-solutions/',
    external: true,
    label: 'LinkedIn',
  },
  {
    icon: <FaInstagram className="h-5 w-5" aria-hidden />,
    href: 'https://www.instagram.com/codefinitysol/',
    external: true,
    label: 'Instagram',
  },
  {
    icon: <HiMail className="h-5 w-5" aria-hidden />,
    href: COMPANY_EMAIL_MAILTO,
    external: false,
    label: 'Email',
  },
] as const;

const EXPLORE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a call', href: CALENDLY_BOOKING_URL },
];

export default function Footer() {
  return (
    <footer className="relative overflow-x-hidden bg-[#191819] pb-8">


      <div className="relative z-10">
        <NewsletterSection />
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">

          {/* Top Section: CTA & Explore */}
          <div className="mb-20 flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-14 xl:gap-20">

            {/* Left: CTA */}
            <div className="flex max-w-2xl flex-col items-start pt-4 lg:max-w-xl xl:max-w-2xl">
              <h2
                className="mb-6 font-aeonik text-3xl font-normal leading-tight sm:text-3xl lg:text-5xl"
                style={{
                  backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Have a project in mind?
              </h2>
              <div className="space-y-6 mb-10 max-w-2xl">
                <p className="font-aeonik text-lg leading-relaxed text-white/70">
                  If you are building a new product, scaling an existing system, or need a reliable engineering team, we are open to a conversation.
                </p>
                <p className="font-aeonik text-lg leading-relaxed text-white/70">
                  We work best with teams that value clarity, ownership, and long-term thinking. If that sounds like you, let&apos;s talk through your goals and see if there is a fit.
                </p>
              </div>
              <Link
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#2B2A2B] px-8 py-4 text-base font-medium text-white transition-all hover:brightness-110 active:scale-95"
              >
                Schedule a call
                <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* Explore */}
            <div className="w-full shrink-0 pt-4 lg:w-48 lg:min-w-[12rem]">
              <h3
                className="font-aeonik text-xl font-normal lg:text-2xl"
                style={{
                  backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Explore
              </h3>
              <ul className="mt-4 space-y-3 sm:space-y-4">
                {EXPLORE_LINKS.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-aeonik text-base text-white transition-colors hover:text-white/80"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-aeonik text-base text-white transition-colors hover:text-white/80"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Section: Copyright & Socials */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
            <p className="text-[#848586] font-aeonik text-sm">
              © codefinitysolutions.com. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  {...(social.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/10 hover:text-white hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
