'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SUBJECT_OPTIONS = [
  { label: 'New product development', value: 'new-product-development' },
  { label: 'AI or automation', value: 'ai-automation' },
  { label: 'Dedicated team or augmentation', value: 'dedicated-team' },
  { label: 'Ongoing support', value: 'ongoing-support' },
  { label: 'Something else', value: 'something-else' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-12 lg:px-4 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        <div className="rounded-[22px] bg-[#ECECEC] p-2">
          <div className="relative overflow-hidden rounded-[16px] bg-[#17181B] p-8 sm:p-12 lg:p-20">
            {/* Dot Background Pattern */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-50"
              style={{
                backgroundImage: 'radial-gradient(#2B2C2F 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left Side - Content */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <span
                    className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-white"
                    style={{
                      background:
                        'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)',
                    }}
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                    Start a conversation
                  </span>
                  <h2
                    className="mt-8 font-aeonik text-4xl font-normal lg:text-5xl"
                    style={{
                      backgroundImage:
                        'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Start Your Project
                  </h2>
                  <div className="mt-8 max-w-md font-aeonik text-base leading-relaxed text-white opacity-90 lg:text-lg">
                    <p>
                      If you are planning a new product, improving an existing
                      system, or need a reliable team to support ongoing
                      development, we are happy to talk.
                    </p>
                    <br />
                    <p>
                      Start with a short discovery call. We will listen, ask the
                      right questions, and help you figure out the next practical
                      step. No pressure. No commitment.
                    </p>
                  </div>
                </div>

                {/* Feature Icons Section */}
                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/custom-design.svg"
                      alt="Custom Design"
                      width={50}
                      height={60}
                    />
                    <span className="font-aeonik text-base text-white lg:text-lg">
                      Product focused engineering
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src="/seo.svg"
                      alt="Effective SEO"
                      width={50}
                      height={60}
                    />
                    <span className="font-aeonik text-base text-white lg:text-lg">
                      AI, web, and mobile development
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src="/custom-design.svg"
                      alt="Custom Design"
                      width={50}
                      height={60}
                    />
                    <span className="font-aeonik text-base text-white lg:text-lg">
                      Clear communication and ownership
                    </span>
                  </div>
                </div>

                <div className="mt-16">
                  <button
                    className="flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-95"
                    style={{ backgroundColor: '#516C83' }}
                  >
                    Schedule a call
                    <HiArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <label className="ml-1 text-sm font-medium text-white/60">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all placeholder:text-white/20 focus:border-[#516C83] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="ml-1 text-sm font-medium text-white/60">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all placeholder:text-white/20 focus:border-[#516C83] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="ml-1 text-sm font-medium text-white/60">
                    Subject
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex w-full items-center justify-between rounded-2xl border bg-white/5 px-6 py-4 text-left transition-all duration-200 focus:outline-none ${isDropdownOpen
                        ? 'border-[#516C83] ring-1 ring-[#516C83]'
                        : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <span
                        className={formData.subject ? 'text-white' : 'text-white/20'}
                      >
                        {SUBJECT_OPTIONS.find((o) => o.value === formData.subject)
                          ?.label || 'Select one'}
                      </span>
                      <FiChevronDown
                        className={`h-5 w-5 text-white/40 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => handleSubjectSelect(e.target.value)}
                      required
                      className="sr-only"
                      aria-hidden="true"
                    >
                      <option value="">Select one</option>
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    {/* Custom Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="animate-dropdown-enter absolute left-0 top-full z-[100] mt-2 w-full origin-top">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1e1f22] shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                          <div className="py-2">
                            {SUBJECT_OPTIONS.map((option) => {
                              const isSelected = formData.subject === option.value;
                              return (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => handleSubjectSelect(option.value)}
                                  className={`flex w-full items-center justify-between px-6 py-3.5 text-left font-aeonik text-base transition-all duration-200 ${isSelected
                                    ? 'bg-white/5 font-medium text-white'
                                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                  <span>{option.label}</span>
                                  {isSelected && (
                                    <FiCheck className="h-4 w-4 text-[#516C83]" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="ml-1 text-sm font-medium text-white/60">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your project, goals, or timeline."
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all placeholder:text-white/20 focus:border-[#516C83] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full py-4 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: '#516C83' }}
                >
                  Submit
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
