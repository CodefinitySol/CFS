'use client';

import { useState } from 'react';
import FAQItem from '@/components/FAQItem';

const SERVICE_FAQS = [
    {
        question: "What makes a custom website design different from using templates?",
        answer: "Unlike off-the-shelf templates, a custom website is built from the ground up to align with your specific brand identity, business goals, and user needs. Every pixel and interaction is intentionally designed to convert your visitors into customers, ensuring you stand out in a crowded market."
    },
    {
        question: "How much input will I have in the custom website design process?",
        answer: "Collaboration is at the heart of our process. You'll be involved in key stages, from the initial discovery call to design approvals and the final walkthrough. Your insights into your business combined with our design expertise create the best results."
    },
    {
        question: "Can a custom website design incorporate my existing brand elements?",
        answer: "Absolutely. We seamlessly integrate your existing logo, color palette, typography, and any other brand assets to ensure your new Squarespace website is a perfect extension of your existing brand identity."
    },
    {
        question: "Does custom website design include mobile responsiveness?",
        answer: "Yes, 100%. Every website we build is fully responsive, meaning it will look and perform beautifully on smartphone, tablet, laptop, and desktop. We test across multiple screen sizes to ensure a flawless user experience."
    },
    {
        question: "How long does it take to complete a custom website design?",
        answer: "Timelines typically range from 2 to 5 weeks depending on the complexity of the project and the package you choose. We'll provide a clear schedule during our discovery call so you know exactly what to expect."
    },
    {
        question: "What's the difference between the various custom website design packages offered?",
        answer: "Our packages range from lean 'Essentials' builds (best for fast launches) to comprehensive 'Enterprise' solutions (best for complex, deep-strategy builds). Each varies in the number of pages, custom features, and design phase depth."
    },
    {
        question: "Will my custom website design be optimized for search engines?",
        answer: "Every site we build includes fundamental SEO setup: clean heading structure, mobile optimization, fast loading speeds, and meta tag implementation. For deeper SEO needs, we offer dedicated SEO services as well."
    },
    {
        question: "Can I update my custom-designed website myself after it's completed?",
        answer: "Yes! Squarespace is incredibly user-friendly. Once launched, we provide a personalized walkthrough or recorded tutorials to show you how to easily update text, images, and content yourself."
    },
    {
        question: "How does a custom website design benefit my business compared to DIY solutions?",
        answer: "A professional custom build eliminates the 'amateur' look and technical limitations of DIY efforts. It builds instant trust with high-tier clients, improves conversion rates, and saves you dozens of hours of frustration, letting you focus on running your business."
    },
    {
        question: "Do you create custom website designs for specific industries or niches?",
        answer: "While we work with a wide range of industries, our expertise lies in modern, clean, and strategic design that works for service-providers, creative agencies, high-level organizations, and e-commerce brands."
    }
];

interface ServiceFAQSectionProps {
    items?: { question: string; answer: string }[];
}

export default function ServiceFAQSection({ items = SERVICE_FAQS }: ServiceFAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-8 xl:px-12">

                {/* Header */}
                <div className="flex flex-col items-center text-center lg:mb-24">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full px-4 py-1.5 backdrop-blur-sm mb-8"
                        style={{
                            background: 'linear-gradient(90deg, rgba(232, 236, 240, 0.4) 0%, rgba(80, 108, 131, 0.2) 100%)'
                        }}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#506C83]/60 mr-2"></span>
                        <span className="font-aeonik text-xs font-medium text-[#506C83] tracking-wide">FAQS</span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1D] tracking-tight">
                        Ask Us Anything
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="mx-4 lg:mx-20">
                    {items.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
