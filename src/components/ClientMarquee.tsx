'use client';

import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';

/** Mixed order: portfolio case studies (see LatestWork / PortfolioProjectGrid) + partner names + Brello */
const CLIENTS = [
    'Zappy',
    'AshGrove',
    'Flow',
    'ChangeLab',
    'Brello',
    'Dame Kelly Holmes Trust',
    'Waltz',
    'CP',
    'Schole AI',
    'Escuela de Artes',
    'ZeroFill',
    'Acuity Scheduling',
    'SME Matters',
    'SCO Space',
    'LOOMIA',
    'Lineslip',
    'The Communications Network',
    'Reformer Pilates',
] as const;

const SCROLL_STYLE = { '--animation-duration': '100s' } as CSSProperties;

export default function ClientMarquee() {
    const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

    return (
        <section
            className="relative w-full overflow-hidden border-t border-[#E8ECF0] bg-white py-8 sm:py-10"
            aria-label="Our clients"
        >
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
                <motion.h2
                    className="mb-8 text-center font-aeonik text-xl font-normal text-[#191819] sm:mb-10 sm:text-2xl lg:text-3xl"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our clients
                </motion.h2>

                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div
                        className="animate-scroll flex w-max items-center gap-x-10 sm:gap-x-12 lg:gap-x-14"
                        style={SCROLL_STYLE}
                    >
                        {loop.map((name, i) => (
                            <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-x-10 sm:gap-x-12 lg:gap-x-14">
                                <span className="whitespace-nowrap font-aeonik text-base font-medium tracking-tight text-[#4B474B] transition-colors duration-300 hover:text-[#191819] sm:text-lg lg:text-xl">
                                    {name}
                                </span>
                                <span
                                    className="hidden h-1 w-1 shrink-0 rounded-full bg-[#2B2A2B]/25 sm:block"
                                    aria-hidden
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
