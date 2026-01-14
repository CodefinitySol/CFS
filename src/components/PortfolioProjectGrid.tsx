'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge, Heading, Paragraph, Button } from './atoms';

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
        <section className="bg-white py-8 lg:py-16">
            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
                {PORTFOLIO_PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-1.5 sm:p-2 bg-[#ECECEC] overflow-hidden group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[480px]">
                            {/* Image Section */}
                            <div className="lg:flex-[3] relative min-h-[300px] lg:min-h-0">
                                <div className="absolute inset-6 sm:inset-8 rounded-[16px] overflow-hidden border border-[#ECECEC] shadow-sm">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:flex-[4] p-6 sm:p-10 lg:p-12 flex flex-col items-start justify-center gap-3">
                                <Badge variant='default' size='sm' className="bg-[#EDF2F6] text-[#64748B] border-none">
                                    {project.tag}
                                </Badge>

                                <Heading level={2} size='lg' className="text-[#1E293B]">
                                    {project.title}
                                </Heading>

                                <div className="space-y-3">
                                    {project.description.split('\n\n').map((paragraph, i) => (
                                        <Paragraph key={i} size='md' className="text-[#64748B] leading-relaxed">
                                            {paragraph}
                                        </Paragraph>
                                    ))}
                                </div>

                                <div className="mt-2">
                                    <Button
                                        variant='cta'
                                        size='md'
                                        className="!bg-[#506c83] hover:!bg-[#405669]"
                                        icon={<svg className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>}
                                    >
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
