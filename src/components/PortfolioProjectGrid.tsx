'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge, Heading, Paragraph } from './atoms';

const PORTFOLIO_PROJECTS = [
    {
        tag: 'Security',
        title: 'Waltz',
        description: 'Waltz is a premium security platform designed to streamline access control and threat monitoring for modern enterprises. We built a system that combines real-time data visualization with robust backend security protocols.\n\nOur goal was to create a professional, user-friendly dashboard that builds trust and explains technical security metrics clearly to both engineers and stakeholders.',
        image: '/waltz.png',
        link: '#',
    },
    {
        tag: 'SaaS',
        title: 'Zappy',
        description: 'Zappy is a cloud-based SaaS solution focused on automating repetitive tasks for digital agencies. We designed a sleek, intuitive interface that simplifies complex workflows and improves team collaboration.\n\nOur team focused on building a scalable architecture that supports rapid deployment and provides deep analytical insights into workflow performance.',
        image: '/zappy.png',
        link: '#',
    },
    {
        tag: 'Tech',
        title: 'ZeroFill',
        description: 'ZeroFill is at the forefront of sustainable tech manufacturing, providing innovative recycling solutions for the electronics industry. We created a platform that tracks material lifecycle and optimizes resource allocation across global supply chains.\n\nThe project emphasized transparency and efficiency, helping B2B clients meet their sustainability goals through data-driven decisions.',
        image: '/zerofill.png',
        link: '#',
    },
    {
        tag: 'Education',
        title: 'Schole AI',
        description: 'Schole AI revolutionizes personalized learning by integrating advanced AI tutors into traditional educational frameworks. We developed a platform that adapts to individual student needs, offering real-time feedback and customized curriculum paths.\n\nThe focus was on building an accessible, engaging environment that enhances learning outcomes for students worldwide.',
        image: '/schole.png',
        link: '#',
    },
    {
        tag: 'Agency',
        title: 'Flow',
        description: 'Flow is a high-performance agency management tool that integrates project tracking, resource planning, and client communication into a single hub. We built a flexible system that adapts to various agency sizes and domains.\n\nThe goal was to minimize noise and maximize execution speed, ensuring that teams can ship projects on time and maintain high quality across all deliverables.',
        image: '/flow.png',
        link: '#',
    },
];

export default function PortfolioProjectGrid() {
    return (
        <section className="bg-[#F8FAFC] pb-16 pt-6 sm:pt-10 lg:pb-24 lg:pt-14">
            <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
                <header className="mb-12 max-w-2xl lg:mb-16">
                    <p className="font-aeonik text-xs font-medium uppercase tracking-[0.2em] text-[#64748B]">
                        Work
                    </p>
                    <h1 className="font-aeonik mt-3 text-3xl font-normal leading-tight tracking-tight text-[#1E293B] sm:text-4xl">
                        Our work
                    </h1>
                    <p className="font-aeonik mt-4 text-base leading-relaxed text-[#64748B]">
                        A catalog of projects we have shipped—web apps, mobile products, and AI-driven systems—each built for teams that need software they can run, maintain, and grow with confidence.
                    </p>
                </header>

                <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
                    {PORTFOLIO_PROJECTS.map((project, index) => (
                        <motion.article
                            key={index}
                            className="overflow-hidden rounded-2xl border border-[#E2E8F0]/90 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_40px_-20px_rgba(15,23,42,0.12)]"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div
                                className={`flex flex-col lg:min-h-0 lg:flex-row lg:items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div
                                    className={`flex min-h-0 flex-col border-b border-[#F1F5F9] p-5 sm:p-6 lg:w-[48%] lg:self-stretch lg:border-b-0 lg:border-[#F1F5F9] ${index % 2 === 0 ? 'lg:border-r' : 'lg:border-l'}`}
                                >
                                    <div
                                        className="relative mx-auto aspect-[4/3] min-h-[240px] w-full max-w-md overflow-hidden rounded-xl bg-[#F1F5F9] ring-1 ring-[#E2E8F0]/80 sm:max-w-lg lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-96 lg:flex-1 lg:self-stretch"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 1024px) 90vw, 480px"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start gap-4 p-6 sm:p-8 lg:w-[52%] lg:min-h-0 lg:px-10 lg:py-10 xl:px-12">
                                    <Badge
                                        variant="default"
                                        size="sm"
                                        className="w-fit border-0 bg-[#EDF2F6] text-[#64748B]"
                                    >
                                        {project.tag}
                                    </Badge>

                                    <Heading level={2} size="sm" className="text-[#1E293B]">
                                        {project.title}
                                    </Heading>

                                    <div className="space-y-3 border-t border-[#F1F5F9] pt-4">
                                        {project.description.split('\n\n').map((paragraph, i) => (
                                            <Paragraph
                                                key={i}
                                                size="md"
                                                className="text-[#64748B] leading-relaxed"
                                            >
                                                {paragraph}
                                            </Paragraph>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
