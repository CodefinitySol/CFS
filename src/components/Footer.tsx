'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaBehance, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiGlobeAlt, HiMail } from 'react-icons/hi';
import NewsletterSection from './NewsletterSection';

const SOCIAL_LINKS = [
  { icon: <FaBehance className="h-5 w-5" />, href: '#' },
  { icon: <HiGlobeAlt className="h-5 w-5" />, href: '#' },
  { icon: <FaLinkedinIn className="h-5 w-5" />, href: '#' },
  { icon: <FaYoutube className="h-5 w-5" />, href: '#' },
  { icon: <HiMail className="h-5 w-5" />, href: '#' },
];

const EXPLORE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Work', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Book a call', href: '#' },
];

const RESOURCE_LINKS = [
  { label: 'Blog', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Sitemap', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#181A1D] pb-8 overflow-hidden">


      <div className="relative z-10">
        <NewsletterSection />
        <div className="mx-auto max-w-[1500px] px-4 sm:px-4 lg:px-8">

          {/* Top Section: CTA & Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

            {/* Left: CTA */}
            <div className="flex flex-col items-start pt-4">
              <h2
                className="font-aeonik text-3xl sm:text-3xl lg:text-5xl font-normal leading-tight mb-8"
                style={{
                  backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
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
              <button
                className="group flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white border border-white/10 bg-[#516C83] cursor-pointer transition-all hover:brightness-110 active:scale-95"
              >
                Schedule a call
                <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Right: Navigation Links */}
            <div className="grid grid-cols-2 gap-2 pt-4">
              {/* Explore Column */}
              <div className="flex flex-col space-y-4">
                <h3
                  className="font-aeonik text-xl lg:text-2xl font-normal"
                  style={{
                    backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Explore
                </h3>
                <ul className="space-y-4">
                  {EXPLORE_LINKS.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="font-aeonik text-base text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="flex flex-col space-y-4">
                <h3
                  className="font-aeonik text-xl lg:text-2xl font-normal"
                  style={{
                    backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Resources
                </h3>
                <ul className="space-y-4">
                  {RESOURCE_LINKS.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="font-aeonik text-base text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/10 hover:text-white hover:scale-110"
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
