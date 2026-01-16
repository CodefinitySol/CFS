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

export default function ContactForm({ isAugmentation, isContactPage }: { isAugmentation?: boolean; isContactPage?: boolean }) {
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
    <div className={(isAugmentation || isContactPage) ? "rounded-[18px] bg-[#DDE3E7] p-2" : ""}>
      <div className={`relative rounded-[16px] bg-white p-10 sm:p-12 ${(isAugmentation || isContactPage) ? '' : 'rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]'}`}>
        {/* START A PROJECT Circle */}
        <div className={`absolute z-20 ${(isAugmentation || isContactPage) ? 'h-20 w-20 -left-10 -top-10 sm:h-24 sm:w-24 sm:-left-12 sm:-top-12' : 'h-16 w-16 -left-6 -top-6 sm:h-20 sm:w-20 sm:-left-7 sm:-top-7'}`}>
          <div className={`relative h-full w-full rounded-full border border-white/10 backdrop-blur-md ${(isAugmentation || isContactPage) ? 'bg-[#F2F4F6]/60' : 'bg-[#1e293b]/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'}`}>
            {/* Inner Glass Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/10" />

            {/* Sharp Rim Highlight */}
            <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]" />

            {/* Center Plus */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`font-aeonik text-xl font-light ${(isAugmentation || isContactPage) ? 'text-[#536F85]' : 'text-white/90'}`}>
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
                  fill={(isAugmentation || isContactPage) ? '#536F85' : 'white'}
                  fontSize="7.5"
                  fontWeight="1000"
                  fontFamily="Aeonik, sans-serif"
                  className="uppercase tracking-[0.3em]"
                  style={{ textShadow: (isAugmentation || isContactPage) ? '0 1px 2px rgba(0,0,0,0.2)' : 'none' }}
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
            size="md"
            className="w-full !bg-[#516C83] hover:!bg-[#334155] shadow-lg hover:shadow-xl"
          >
            Submit enquiry
          </Button>
        </form>
      </div>
    </div>
  );
}
