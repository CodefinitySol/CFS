'use client';

import React from 'react';

export default function StartProjectSection() {
    return (
        <section className="bg-white py-12 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
            <div className="mx-auto max-w-[1920px]">

                {/* Main Card */}
                {/* Main Card */}
                <div className="rounded-[24px] bg-[#17181B] border-[12px] border-[#F3F4F6] p-10 sm:p-16 lg:p-24 xl:p-32">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 xl:gap-48">

                        {/* Left Column: Content */}
                        <div className="flex flex-col items-start gap-8 lg:w-1/2">
                            {/* Badge */}
                            <div className="inline-flex items-center rounded-full px-4 py-1.5"
                                style={{
                                    background: 'linear-gradient(90deg,rgba(232,236,240,.3) 0%,rgba(80,108,131,.3) 100%)'
                                }}
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                                <span className="font-aeonik text-xs font-medium text-white">Your dream site</span>
                            </div>

                            {/* Heading */}
                            <h2 className="font-aeonik text-4xl sm:text-4xl lg:text-5xl font-normal tracking-tight"
                                style={{
                                    backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                Start Your Project
                            </h2>

                            {/* Description */}
                            <p className="font-aeonik text-base sm:text-lg text-[#E8ECF0]/80 leading-relaxed max-w-md">
                                Join the ranks of businesses that trust my expertise. Start your project with a free discovery call and see how we can bring your vision to life.
                            </p>

                            {/* Schedule Call Button */}
                            <button className="inline-flex items-center gap-2 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: '#516C83' }}
                            >
                                <span className="font-aeonik text-sm font-medium text-white">Schedule a call</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:w-1/2 w-full">
                            <form className="flex flex-col gap-6">
                                {/* Name & Email Row */}
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Name */}
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="name" className="font-aeonik text-sm font-medium text-[#E8ECF0]">
                                            Name <span className="text-[#516C83]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter full name"
                                            className="w-full rounded-xl bg-[#232529] border border-gray-800 px-4 py-3 text-sm text-[#E8ECF0] placeholder-gray-500 focus:outline-none focus:border-[#516C83] transition-colors"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="email" className="font-aeonik text-sm font-medium text-[#E8ECF0]">
                                            Email <span className="text-[#516C83]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter email"
                                            className="w-full rounded-xl bg-[#232529] border border-gray-800 px-4 py-3 text-sm text-[#E8ECF0] placeholder-gray-500 focus:outline-none focus:border-[#516C83] transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="font-aeonik text-sm font-medium text-[#E8ECF0]">
                                        Subject <span className="text-[#516C83]">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            className="w-full appearance-none rounded-xl bg-[#232529] border border-gray-800 px-4 py-3 text-sm text-[#E8ECF0] placeholder-gray-500 focus:outline-none focus:border-[#516C83] transition-colors"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select one</option>
                                            <option value="web-design">Web Design</option>
                                            <option value="development">Development</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8ECF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="font-aeonik text-sm font-medium text-[#E8ECF0]">
                                        Message <span className="text-[#516C83]">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="How we can help you?"
                                        className="w-full rounded-xl bg-[#232529] border border-gray-800 px-4 py-3 text-sm text-[#E8ECF0] placeholder-gray-500 focus:outline-none focus:border-[#516C83] transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="w-full rounded-full py-4 mt-2 transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                                    style={{ backgroundColor: '#516C83' }}
                                >
                                    <span className="font-aeonik text-sm font-medium text-white">Submit</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
