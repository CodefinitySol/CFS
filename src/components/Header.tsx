'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

type NavItem = {
  label: string;
  href?: string;
  dropdownItems?: {
    title: string;
    desc: string;
    iconPath: string;
    href?: string;
  }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    dropdownItems: [
      {
        title: 'AI Systems & Automation',
        desc: 'Production-ready AI systems for real products',
        iconPath:
          'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
        href: '/services/ai-development',
      },
      {
        title: 'Product development',
        desc: 'Real products, not prototypes',
        iconPath:
          'M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 2v10h12V8H6z',
        href: '/services/website-application',
      },
      {
        title: 'Augmentation',
        desc: 'Schedule as per needed',
        iconPath:
          'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        href: '/services/augmentation',
      },
      {
        title: 'Automation systems',
        desc: 'Operational workflows without manual work',
        iconPath:
          'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        href: '/services/no-code-automation',
      },
      {
        title: 'Infrastructure',
        desc: 'Stable systems at scale',
        iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
        href: '/services/devops',
      },
    ],
  },
  { label: 'Work', href: '/portfolio' },
  // { label: 'Pricing', href: '/pricing' },
  // {
  //   label: 'Resources',
  //   dropdownItems: [
  //     {
  //       title: 'Read Our Blog',
  //       desc: 'Squarespace website design insights.',
  //       iconPath:
  //         'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  //       href: '/resources/blog',
  //     },
  //     {
  //       title: 'Design on Demand',
  //       desc: 'Our graphic design division.',
  //       iconPath:
  //         'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  //     },
  //     {
  //       title: 'FAQS',
  //       desc: 'Your questions, answered.',
  //       iconPath:
  //         'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  //       href: '/resources/faqs',
  //     },
  //     {
  //       title: 'Squarespace Web Design Agency',
  //       desc: 'Learn more about the company.',
  //       iconPath:
  //         'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  //       href: '/resources/agency',
  //     },
  //     {
  //       title: 'Testimonials',
  //       desc: 'A reputation of excellence.',
  //       iconPath:
  //         'M5 13l4 4L19 7',
  //       href: '/resources/testimonials',
  //     },
  //   ],
  // },
  { label: 'Contact', href: '/contact' },
];

interface HeaderProps {
  isLight?: boolean;
}

export default function Header({ isLight = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Reset menu state when closing the mobile menu completely
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    // Reset after animation
    setTimeout(() => {
      setSubmenuVisible(false);
      setActiveSubmenu(null);
    }, 500);
  };

  const openSubmenu = (label: string) => {
    setActiveSubmenu(label);
    requestAnimationFrame(() => {
      setSubmenuVisible(true);
    });
  };

  const closeSubmenu = () => {
    setSubmenuVisible(false);
  };

  return (
    <header className="relative z-50 overflow-visible px-6 py-6 sm:px-10 sm:py-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 items-center lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        {/* Logo: left column; mirrors CTA inset on the right */}
        <Link
          href="/"
          className="z-50 col-start-1 row-start-1 flex items-center justify-self-start self-center overflow-visible transition-all duration-300 hover:opacity-80"
        >
          {/* Layout box stays h-12 / sm:h-16 so header height unchanged; scale draws larger */}
          <div className="relative h-12 w-40 shrink-0 origin-left scale-[1.2] sm:h-16 sm:w-52 sm:scale-[1.14]">
            <Image
              src="/codefinity-logo-white.png"
              alt="Codefinity Solutions"
              fill
              className={`object-contain object-left ${isLight ? 'invert' : ''}`}
              priority
            />
          </div>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="group col-start-2 row-start-1 flex h-12 w-12 flex-col items-end justify-center justify-self-end self-center gap-1.5 rounded-full bg-transparent p-2 lg:hidden"
          aria-label="Open menu"
        >
          <span className={`h-0.5 w-6 transition-transform group-hover:w-8 ${isLight ? 'bg-[#191819]' : 'bg-white'}`} />
          <span className={`h-0.5 w-8 ${isLight ? 'bg-[#191819]' : 'bg-white'}`} />
          <span className={`h-0.5 w-4 transition-transform group-hover:w-8 ${isLight ? 'bg-[#191819]' : 'bg-white'}`} />
        </button>

        {/* Desktop nav: center column */}
        <nav
          className="col-start-2 row-start-1 hidden justify-self-center self-center rounded-[100px] px-1 py-2 backdrop-blur-[4px] transition-all duration-300 ease-out lg:block"
          style={{
            background: isLight
              ? '#F1F4F6'
              : 'linear-gradient(180deg, rgba(255, 255, 255, .05) 0%, rgba(255, 255, 255, .01) 100%)',
            border: isLight ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}
        >
          <ul className="flex items-center justify-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative flex items-center">
                {item.dropdownItems ? (
                  <>
                    <button className={`flex items-center rounded-full px-5 py-2.5 font-aeonik text-sm font-medium transition-colors ${isLight ? 'text-[#191819] hover:bg-black/[0.03]' : 'text-white hover:bg-white/[0.05]'}`}>
                      <span className={`h-1.5 w-0 rounded-full opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-1.5 group-hover:opacity-100 ${isLight ? 'bg-[#191819]' : 'bg-white'}`} />
                      <span className="flex items-center gap-1.5">
                        {item.label}
                        <svg
                          className={`h-3 w-3 transition-transform group-hover:rotate-180 ${isLight ? 'opacity-40' : 'opacity-60'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:mt-4 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#343538] p-2 shadow-2xl backdrop-blur-xl">
                        <div className="space-y-1">
                          {item.dropdownItems.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href ?? '/'}
                              className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-[#2B2A2B]"
                            >
                              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 text-white">
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1.5}
                                >
                                  <path d={subItem.iconPath} />
                                </svg>
                              </div>
                              <div>
                                <div
                                  className="text-sm font-medium"
                                  style={{
                                    backgroundImage: 'linear-gradient(94.13deg, rgb(232, 236, 240) 0.14%, rgb(91, 83, 91) 153.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                  }}
                                >
                                  {subItem.title}
                                </div>
                                <div className="text-[11px] leading-relaxed text-white/40">
                                  {subItem.desc}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`group flex items-center rounded-full px-5 py-2.5 font-aeonik text-sm font-medium transition-colors ${isLight
                      ? 'text-[#191819] hover:bg-black/[0.03]'
                      : 'text-white hover:bg-white/[0.05]'
                      }`}
                  >
                    <span className={`h-1.5 w-0 rounded-full opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-1.5 group-hover:opacity-100 ${isLight ? 'bg-[#191819]' : 'bg-white'}`} />
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA: right column, symmetric to logo */}
        <Link
          href={CALENDLY_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-3 row-start-1 hidden shrink-0 cursor-pointer items-center justify-center gap-1.5 justify-self-end self-center rounded-full bg-[#2B2A2B] px-6 py-4 font-aeonik text-sm font-medium leading-none text-white transition-all hover:bg-[#3A383A] hover:shadow-lg lg:flex"
        >
          <span className="whitespace-nowrap">Schedule a call</span>
          <svg
            className="h-3.5 w-3.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19L19 5M19 5H9M19 5V15"
            />
          </svg>
        </Link>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[60] flex flex-col bg-white transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
            <Link href="/" onClick={handleCloseMenu} className="block">
              <div className="relative h-10 w-36">
                <Image
                  src="/codefinity-logo-white.png"
                  alt="Codefinity Solutions"
                  fill
                  className="object-contain invert"
                />
              </div>
            </Link>
            <button
              onClick={handleCloseMenu}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-[#191819]"
            >
              <svg
                className="h-8 w-8 transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Sliding Container */}
          <div className="relative w-full flex-1 overflow-hidden">
            <div
              className={`flex h-full w-[200%] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${submenuVisible ? '-translate-x-1/2' : 'translate-x-0'
                }`}
            >
              {/* Main Menu Pane (Left Half) */}
              <div className="flex w-1/2 flex-col items-center overflow-y-auto px-6 pb-20">
                <nav className="my-auto flex flex-col items-center gap-6 text-center">
                  {NAV_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="group flex flex-col items-center"
                    >
                      {item.dropdownItems ? (
                        <button
                          onClick={() => openSubmenu(item.label)}
                          className="flex items-center gap-2 font-aeonik text-3xl font-medium text-[#191819] transition-colors hover:text-[#2B2A2B]"
                        >
                          {item.label}
                          <svg
                            className="h-5 w-5 text-[#9A929A]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="font-aeonik text-3xl font-medium text-[#191819] transition-colors hover:text-[#2B2A2B]"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                  <Link
                    href={CALENDLY_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#2B2A2B] px-8 py-4 font-aeonik text-base font-medium text-white transition-all hover:bg-[#3A383A]"
                  >
                    Schedule a call
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 19L19 5M19 5H9M19 5V15"
                      />
                    </svg>
                  </Link>
                </nav>
              </div>

              {/* Submenu Pane (Right Half) */}
              <div className="flex w-1/2 flex-col items-center overflow-y-auto px-6 pb-20">
                <div className="my-auto flex w-full flex-col items-center">
                  <button
                    onClick={closeSubmenu}
                    className="mb-8 flex items-center gap-2 font-aeonik text-lg text-[#9A929A] transition-colors hover:text-[#191819]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back
                  </button>
                  <div className="flex flex-col gap-6 text-center">
                    {NAV_ITEMS.find(
                      (item) => item.label === activeSubmenu
                    )?.dropdownItems?.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href ?? '/'}
                        className="font-aeonik text-2xl font-medium text-[#191819] transition-colors hover:text-[#2B2A2B]"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
