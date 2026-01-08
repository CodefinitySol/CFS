'use client';

import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';

const FAQS = [
  {
    question: "What is Squarespace, and why is it a popular choice for website design?",
    answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
  },
  {
    question: "How can a Squarespace web designer help my business?",
    answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
  },
  {
    question: "What is the process of working with a Squarespace web designer in the UK?",
    answer: "Squarespace is a website-building platform that allows users to create professional and visually appealing websites without needing coding skills. It features a user-friendly drag-and-drop interface called Fluid Engine, a wide selection of designer templates, and built-in tools like e-commerce and blogging."
  },
  {
    question: "Can I update and maintain my Squarespace website myself after it's built?",
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-18 sm:py-18">
      <div className="mx-auto max-w-[1500px] px-8 sm:px-16 lg:px-24">
        <div 
          className="relative bg-[#D0D6DC] rounded-[6px] p-8 sm:p-16 lg:px-24 lg:py-24"
        >
          {/* Corner Crosshairs */}
          <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center text-[#506C83] text-3xl -translate-x-1/2 -translate-y-1/2">+</div>
          <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-[#506C83] text-3xl translate-x-1/2 -translate-y-1/2">+</div>
          <div className="absolute bottom-0 left-0 w-8 h-8 flex items-center justify-center text-[#506C83] text-3xl -translate-x-1/2 translate-y-1/2">+</div>
          <div className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center text-[#506C83] text-3xl translate-x-1/2 translate-y-1/2">+</div>

          <div className="max-w-5xl mx-auto flex flex-col items-start relative z-10">
            <div className="w-full text-left">
              <span 
                className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-[#506C83] bg-[#AEB9C4]"
              >
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506C83]/40" />
                FAQS
              </span>
              
              <h2 className="mt-2 font-aeonik text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1D] leading-tight mb-6 text-left">
                Frequently Asked By People
              </h2>
            </div>

            <div className="space-y-0 w-full">
              {FAQS.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-[#BDC6CE] last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left group transition-all"
                  >
                    <span className="font-aeonik text-base sm:text-lg lg:text-xl font-normal text-[#181A1D]/80 group-hover:text-[#181A1D] transition-colors pr-8">
                      {faq.question}
                    </span>
                    <div 
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        openIndex === index ? 'bg-[#516C83] text-white' : 'bg-[#516C83]/80 text-white'
                      }`}
                    >
                      {openIndex === index ? (
                        <HiMinus className="h-6 w-6" />
                      ) : (
                        <HiPlus className="h-6 w-6" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-[1200px] mb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="font-aeonik text-sm sm:text-base text-[#181A1D]/60 leading-relaxed space-y-4">
                      <p>{faq.answer}</p>
                      
                      {openIndex === index && (
                        <div className="mt-4">
                          <p>Squarespace is a popular choice among creative professionals and web designers for several reasons:</p>
                          <ul className="list-disc pl-5 mt-4 space-y-3">
                            <li className="pl-2"><strong>Ease of Use:</strong> Squarespace offers a seamless and intuitive website-building experience, accessible to individuals without technical expertise.</li>
                            <li className="pl-2"><strong>Visually Stunning Templates:</strong> Users can customise beautiful templates to match their brand&apos;s identity, creating unique and professional-looking websites effortlessly.</li>
                            <li className="pl-2"><strong>Responsive Design:</strong> Squarespace ensures that websites look great on any device.</li>
                            <li className="pl-2"><strong>Built-In SEO Tools:</strong> These tools help websites rank higher in search engine results, increasing visibility.</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
