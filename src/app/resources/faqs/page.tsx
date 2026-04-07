'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import FAQItem from '@/components/FAQItem';
const FAQS = [
    {
        question: "What makes Squarespace different from other website building platforms?",
        answer: "Squarespace is an all-in-one platform that combines best-in-class design with powerful built-in features. Unlike many other platforms, Squarespace doesn't require third-party plugins for core functionality, leading to better security, faster performance, and a more seamless user experience. Its Fluid Engine editor allows for unmatched design flexibility while maintaining structural integrity."
    },
    {
        question: "How can a custom Squarespace web designer benefit my business?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "What is the typical process when working with a Squarespace website designer in the UK?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "Can I update and maintain my Squarespace website after it's built?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "How much does it cost to hire someone to build a website on Squarespace?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "What does a Squarespace designer do?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "Can I hire someone to design my Squarespace site?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "Is Squarespace good for web designers?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "Can you have a course on Squarespace?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    },
    {
        question: "Is Squarespace or Wix better?",
        answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white">
            <Header isLight={true} />

            {/* FAQ Hero/Header */}
            <section className="bg-white lg:px-6 pt-10 pb-16 relative">
                <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 bg-[#BEC8D1] w-fit">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2B2A2B] mr-2"></span>
                                <span className="font-aeonik text-xs font-medium text-[#2B2A2B] tracking-wide uppercase">Faqs</span>
                            </span>
                            <h1 className="font-aeonik text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-[#191819]">
                                Ask Us Anything
                            </h1>
                        </div>
                        <p className="font-aeonik text-md text-black max-w-sm mb-4">
                            All of your Squarespace website design questions, answered by the industry leaders.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="max-w-full mx-auto pb-24">
                        <div className="space-y-0 border-b border-[#E8ECF0]">
                            {FAQS.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                    buttonClassName="py-8"
                                    questionClassName="text-xl sm:text-xl lg:text-2xl font-aeonik font-normal text-[#191819] transition-colors pr-20"
                                    answerClassName="text-lg text-[#191819]/60 w-full"
                                    borderClassName="border-[#E8ECF0]"
                                    iconContainerClassName={`w-14 h-11 bg-[#2B2A2B] text-white flex-shrink-0 cursor-pointer`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
