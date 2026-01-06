'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from './Header';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080c14] pb-24 sm:pb-32 lg:pb-40">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-gradient.webp"
          alt="Background Gradient"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20 xl:gap-24">
          {/* Left Section - Hero Content */}
          <div className="flex-1 space-y-5 lg:space-y-8">
            {/* Top Badge Group */}
            <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-1 backdrop-blur-md">
              <div
                className="flex items-center gap-2 rounded-full px-4 py-1.5 transition-transform hover:scale-[1.02]"
                style={{
                  background:
                    'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="font-aeonik text-xs font-medium text-white">
                  Available for work
                </span>
              </div>
              <button className="px-5 font-aeonik text-xs font-medium text-white/60 transition-colors hover:text-white">
                Get in touch now
              </button>
            </div>

            {/* Main Heading */}
            <h1
              className="font-aeonik text-2xl font-normal leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Sam Crawford: Your Award-
              <br />
              Winning{' '}
              <span className="relative inline-block px-4 py-2">
                <span
                  className="relative z-10 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(94.13deg, #e8ecf0 .14%, #506c83 153.8%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  Squarespace
                </span>
                <span
                  className="absolute inset-0 z-0 bg-[url('/squareborder.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
                  aria-hidden="true"
                />
              </span>
              <br />
              Website Designer
            </h1>

            {/* Description */}
            <p className="glass-text max-w-2xl font-aeonik text-xs leading-[1.6] text-white/90 sm:text-sm md:text-base">
              Sam Crawford has helped launch over 700 Squarespace websites for
              clients worldwide, from local startups to global brands. Every
              site is crafted for speed, mobile performance, and search
              visibility. As a Squarespace Expert, and Enterprise Partner,
              Sam&apos;s known for clear, thoughtful design and the kind of
              results that speak for themselves.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-full border border-white/90 bg-white px-7 py-3.5 font-aeonik text-base font-medium text-gray-900 transition-all hover:border-white hover:shadow-lg cursor-pointer">
                Schedule a call
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="rounded-full bg-[#374151] px-7 py-3.5 font-aeonik text-base font-medium text-white transition-all hover:bg-[#4b5563] cursor-pointer">
                Get in touch
              </button>
            </div>

            {/* Awards Section */}
            {/* Awards Section */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/marketplace.webp"
                  alt="Squarespace Marketplace Expert"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/community.webp"
                  alt="Squarespace Community Leader"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/member.webp"
                  alt="Squarespace Circle Member"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="relative w-full lg:w-[520px] lg:flex-shrink-0">
            {/* Form Card */}
            <div className="relative rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-12">
              {/* START A PROJECT Circle */}
              <div className="absolute -left-6 -top-6 z-20 h-16 w-16 sm:-left-7 sm:-top-7 sm:h-20 sm:w-20">
                <div className="relative h-full w-full rounded-full border border-white/10 bg-[#1e293b]/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
                  {/* Inner Glass Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/20" />

                  {/* Sharp Rim Highlight */}
                  <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]" />

                  {/* Center Plus */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-aeonik text-xl font-light text-white/90">
                      +
                    </span>
                  </div>

                  <div className="absolute inset-0">
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="circle-path"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text
                        fill="white"
                        fontSize="7.5"
                        fontWeight="1000"
                        fontFamily="Aeonik, sans-serif"
                        className="uppercase tracking-[0.3em]"
                        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
                      >
                        <textPath
                          href="#circle-path"
                          startOffset="0%"
                        >
                          Start a project • Start a project •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block font-aeonik text-base font-normal text-[#475569]"
                    >
                      Name <span className="text-[#6b7280]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#f8f9fa] px-5 py-4 font-aeonik text-base text-gray-900 placeholder-gray-400 transition-all focus:border-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-100"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block font-aeonik text-base font-normal text-[#475569]"
                    >
                      Email <span className="text-[#6b7280]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#f8f9fa] px-5 py-4 font-aeonik text-base text-gray-900 placeholder-gray-400 transition-all focus:border-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-100"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-3 block font-aeonik text-base font-normal text-[#475569]"
                  >
                    Subject <span className="text-[#6b7280]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-[#f8f9fa] px-5 py-4 pr-12 font-aeonik text-base text-gray-900 transition-all focus:border-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-100"
                    >
                      <option value="">Select one</option>
                      <option value="website-design">Website Design</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="h-5 w-5 text-[#475569]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block font-aeonik text-base font-normal text-[#475569]"
                  >
                    Message <span className="text-[#6b7280]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How we can help you?"
                    required
                    rows={7}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#f8f9fa] px-5 py-4 font-aeonik text-base text-gray-900 placeholder-gray-400 transition-all focus:border-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-100"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#475569] px-6 py-4 font-aeonik text-lg font-medium text-white shadow-lg transition-all hover:bg-[#334155] hover:shadow-xl cursor-pointer"
                >
                  Submit enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-3 rounded-full bg-[#1a1f2e] px-6 py-4 font-aeonik text-base font-medium text-white shadow-2xl transition-transform hover:scale-105 hover:bg-[#252b3d] cursor-pointer">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Book a free call
        </button>
      </div>
    </section>
  );
}
