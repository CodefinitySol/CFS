'use client';

import { useState, useRef, useEffect } from 'react';
import { FiCheck, FiChevronDown } from 'react-icons/fi';

const SUBJECT_OPTIONS = [
  { label: 'New product development', value: 'new-product-development' },
  { label: 'Web or mobile application', value: 'web-or-mobile-application' },
  { label: 'AI or automation', value: 'ai-or-automation' },
  { label: 'Dedicated team or augmentation', value: 'dedicated-team-or-augmentation' },
  { label: 'Ongoing support', value: 'ongoing-support' },
  { label: 'Something else', value: 'something-else' },
];

export default function ContactForm() {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
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
                id="circle-path-form"
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
                  href="#circle-path-form"
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
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex w-full items-center justify-between rounded-xl border border-gray-200 bg-[#f8f9fa] px-5 py-4 font-aeonik text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 ${isDropdownOpen ? 'border-gray-300 bg-white ring-2 ring-gray-100' : 'hover:border-gray-300 hover:bg-[#f3f4f6]'
                }`}
            >
              <span className={formData.subject ? 'text-gray-900' : 'text-gray-400'}>
                {SUBJECT_OPTIONS.find(o => o.value === formData.subject)?.label || 'Select one'}
              </span>
              <FiChevronDown
                className={`h-5 w-5 text-[#475569] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Hidden native select for form accessibility/validation if needed */}
            <select
              name="subject"
              value={formData.subject}
              onChange={(e) => handleSubjectSelect(e.target.value)}
              required
              className="sr-only"
              aria-hidden="true"
            >
              <option value="">Select one</option>
              {SUBJECT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Custom Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full z-[100] mt-2 w-full origin-top animate-dropdown-enter">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                  <div className="py-1">
                    {SUBJECT_OPTIONS.map((option) => {
                      const isSelected = formData.subject === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSubjectSelect(option.value)}
                          className={`flex w-full items-center justify-between px-5 py-3.5 text-left font-aeonik text-base transition-all duration-200 ${isSelected
                            ? 'bg-gray-50 text-gray-900 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                          <span>{option.label}</span>
                          {isSelected && <FiCheck className="h-4 w-4 text-[#475569]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
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
            placeholder="Tell us a little about your project, timeline, or goals."
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
  );
}
