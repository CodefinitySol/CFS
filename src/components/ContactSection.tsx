'use client';

import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function ContactSection() {
  return (
    <section className="bg-white py-12 lg:px-4 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[20px] bg-[#17181B] p-8 sm:p-12 lg:p-20">
          {/* Dot Background Pattern */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: 'radial-gradient(#2B2C2F 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Side - Content */}
            <div className="flex flex-col">
              <div>
                <span 
                  className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-white"
                  style={{
                    background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                  }}
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                  Your dream site
                </span>
                <h2 
                  className="mt-8 font-aeonik text-4xl lg:text-7xl font-normal leading-tight"
                  style={{
                    backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Start Your Project
                </h2>
                <p className="mt-8 font-aeonik text-base lg:text-lg text-white leading-relaxed max-w-md opacity-90">
                  Join the ranks of businesses that trust my expertise. Start your project with a free discovery call and see how we can bring your vision to life.
                </p>
              </div>

              {/* Feature Icons Section */}
              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-6">
                  <Image src="/custom-design.svg" alt="Custom Design" width={30} height={30} />
                  <span className="font-aeonik text-base lg:text-lg text-white">Custom Design & Features</span>
                </div>

                <div className="flex items-center gap-6">
                  <Image src="/seo.svg" alt="Effective SEO" width={30} height={30} />
                  <span className="font-aeonik text-base lg:text-lg text-white">Effective SEO</span>
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
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/20 focus:border-[#516C83] focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter email"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/20 focus:border-[#516C83] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full appearance-none rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/20 focus:border-[#516C83] focus:outline-none transition-all"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="new-site">New Website Design</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="seo">SEO Services</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-white/40">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/20 focus:border-[#516C83] focus:outline-none transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full rounded-full py-5 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: '#516C83' }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
