'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSearch, HiOutlineClock } from 'react-icons/hi';
import { IoChevronDownOutline } from 'react-icons/io5';

const BLOG_POSTS = [
    {
        category: 'Ecommerce',
        readTime: '8 mins',
        title: 'Should You Use Squarespace For Your Ecommerce Brand?',
        description: 'Discover wether Squarespace is the right website builder for Ecommerce websites',
        image: '/resources/hero-img-1.webp',
    },
    {
        category: 'Branding',
        readTime: '8 mins',
        title: "Using Squarespace's Brand Identity Tool",
        description: 'Delve into an often-looked feature on Squarespace that allows you to generate a brand identity for your business.',
        image: '/resources/hero-img-2.webp',
    },
    {
        category: 'Pricing',
        readTime: '6 mins',
        title: 'How Much Should You Pay For A Squarespace Website?',
        description: 'Find out how much you can expect to pay for a Squarespace website designed by by Crawford.',
        image: '/resources/hero-img-3.webp',
    },
    {
        category: 'Links',
        readTime: '6 mins',
        title: 'Fixing Broken Links In Squarespace',
        description: 'Discover how to identify and fix broken links on your Squarespace website.',
        image: '/blog-1.webp',
    },
    {
        category: 'Galleries',
        readTime: '6 mins',
        title: 'Add A Lightbox Gallery In Squarespace',
        description: 'Learn how to easily turn your Squarespace gallery into a lightbox.',
        image: '/blog-2.webp',
    },
    {
        category: 'Anchor Links',
        readTime: '6 mins',
        title: 'How To Link Buttons To Sections In Squarespace (Anchor Link Guide)',
        description: 'Learn how to create anchor links on your Squarespace site.',
        image: '/blog-3.webp',
    },
    {
        category: 'Mobile',
        readTime: '7 mins',
        title: 'Design A Mobile-Friendly Menu On Squarespace',
        description: 'Delve into the often overlooked aspect of mobile optimization on Squarespace sites, focusing specifically on the mobile menu.',
        image: '/blog-4.webp',
    },
    {
        category: 'SEO',
        readTime: '8 mins',
        title: 'Using Beacon AI To Optimize Your Site SEO On Squarespace',
        description: 'Explore the newly launched Beacon AI by Squarespace, a tool designed to simplify and enhance SEO for your website.',
        image: '/blog-5.webp',
    }
];

export default function BlogGrid() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isOpen, setIsOpen] = useState(false);
    const categories = ['All', 'Ecommerce', 'Branding', 'Pricing', 'SEO'];

    return (
        <section className="bg-white py-12 px-8">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-aeonik text-4xl lg:text-5xl text-[#191819] font-normal leading-tight mb-12">
                        From The Squarespace<br />Website Design Blog
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                        {/* Search Input */}
                        <div className="relative w-full sm:w-80">
                            <HiOutlineSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for anything"
                                className="w-full bg-white border border-[#E8ECF0] rounded-full py-4 pl-14 pr-6 font-aeonik text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#2B2A2B] transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Custom Dropdown */}
                        <div className="relative w-full sm:w-64">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full bg-white border border-[#E8ECF0] rounded-full py-4 px-8 font-aeonik text-sm text-black flex items-center justify-between transition-colors hover:border-[#2B2A2B]"
                            >
                                <span>Category : {selectedCategory}</span>
                                <IoChevronDownOutline className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <>
                                        {/* Click away overlay */}
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() => setIsOpen(false)}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute top-full left-0 right-0 mt-2 z-20 bg-[#4A4A4A] rounded-2xl p-2 shadow-2xl border border-white/10"
                                        >
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => {
                                                        setSelectedCategory(cat);
                                                        setIsOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2.5 rounded-xl font-aeonik text-sm transition-all duration-200 flex items-center gap-2
                                                        ${selectedCategory === cat
                                                            ? 'bg-[#2B2A2B] text-white'
                                                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                                                        }`}
                                                >
                                                    {selectedCategory === cat && (
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                    <span className={selectedCategory === cat ? '' : 'ml-5.5'}>
                                                        {cat === 'All' ? 'Category : All' : cat}
                                                    </span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link
                                href="/resources/blog"
                                className="relative flex h-full flex-col overflow-hidden rounded-[12px] bg-[#E8ECF0] transition-colors duration-300 group-hover:bg-[#2B2A2B]"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-[rgba(91,83,91,.1)] backdrop-blur-md border border-black/5 px-2 py-1 rounded-full text-sm font-aeonik text-[#2B2A2B] transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10">
                                            {post.category}
                                        </span>
                                        <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1.5 text-[#2B2A2B]">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span className="text-sm font-aeonik">{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="font-aeonik text-2xl font-normal leading-tight mb-4 transition-all duration-300 text-[#191819] group-hover:bg-[linear-gradient(94.74deg,#fff_.26%,#2B2A2B_118.16%)] group-hover:bg-clip-text group-hover:text-transparent">
                                        {post.title}
                                    </h3>

                                    <p className="font-aeonik text-[15px] text-black transition-colors duration-300 group-hover:text-white max-w-[90%]">
                                        {post.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
