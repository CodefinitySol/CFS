'use client';

import { useState } from 'react';
import { Input, Textarea, Button, Select } from '@/components/atoms';

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
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
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter full name"
            label={
              <>
                Name <span className="text-[#6b7280]">*</span>
              </>
            }
            required
          />

          {/* Email Field */}
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            label={
              <>
                Email <span className="text-[#6b7280]">*</span>
              </>
            }
            required
          />
        </div>

        {/* Subject Field */}
        <Select
          name="subject"
          options={SUBJECT_OPTIONS}
          value={formData.subject}
          onChange={handleSubjectChange}
          placeholder="Select one"
          label={
            <>
              Subject <span className="text-[#6b7280]">*</span>
            </>
          }
          required
        />

        {/* Message Field */}
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us a little about your project, timeline, or goals."
          label={
            <>
              Message <span className="text-[#6b7280]">*</span>
            </>
          }
          required
          rows={7}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full !bg-[#475569] hover:!bg-[#334155] shadow-lg hover:shadow-xl"
        >
          Submit enquiry
        </Button>
      </form>
    </div>
  );
}
