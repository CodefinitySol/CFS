'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
    OFFICE_MAP_VIEWBOX,
    useOfficeWorldMap,
    WorldMapOfficesSvg,
} from '@/components/WorldMapOffices';

type Office = {
    id: 'pakistan' | 'usa';
    label: string;
    country: string;
    address: string[];
    phone?: string;
    lngLat: [number, number];
    align: 'left' | 'right';
};

const OFFICES: Office[] = [
    {
        id: 'usa',
        label: 'Houston',
        country: 'United States',
        address: ['13038 Mills Creek Meadow', 'Houston, TX'],
        phone: '+1 346 419 9952',
        lngLat: [-95.3698, 29.7604],
        align: 'left',
    },
    {
        id: 'pakistan',
        label: 'Lahore',
        country: 'Pakistan',
        address: ['F76G+746, 330 Block R,', 'Phase 2 Johar Town, Lahore'],
        lngLat: [74.3587, 31.5204],
        align: 'right',
    },
];

function OfficeLocationCard({ office }: { office: Office }) {
    return (
        <>
            <p className="font-aeonik text-[11px] uppercase tracking-[0.24em] text-[#6E6A6E]">
                {office.country}
            </p>
            <h3 className="mt-2 font-aeonik text-2xl text-[#191819]">{office.label}</h3>
            <div className="mt-4 space-y-1 font-aeonik text-sm leading-relaxed text-[#4B474B]">
                {office.address.map((line) => (
                    <p key={line}>{line}</p>
                ))}
            </div>
            {office.phone ? (
                <p className="mt-4 font-aeonik text-sm text-[#191819]">{office.phone}</p>
            ) : null}
        </>
    );
}

function MapPin({
    office,
    pinLeftPct,
    pinTopPct,
    isActive,
    onActivate,
    onToggle,
}: {
    office: Office;
    pinLeftPct: number;
    pinTopPct: number;
    isActive: boolean;
    onActivate: () => void;
    onToggle: () => void;
}) {
    const cardDesktopPositionClass =
        office.align === 'left'
            ? 'lg:left-1/2 lg:ml-5 lg:-translate-y-1/2'
            : 'lg:left-auto lg:right-1/2 lg:mr-5 lg:-translate-y-1/2';

    return (
        <div
            className={`absolute ${isActive ? 'z-30' : 'z-20'}`}
            style={{
                left: `${pinLeftPct}%`,
                top: `${pinTopPct}%`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <button
                type="button"
                onMouseEnter={onActivate}
                onFocus={onActivate}
                onClick={(e) => {
                    e.stopPropagation();
                    // Touch / tap-first devices: toggle; fine-pointer + hover: click still selects
                    if (window.matchMedia('(hover: none)').matches) {
                        onToggle();
                    } else {
                        onActivate();
                    }
                }}
                aria-expanded={isActive}
                aria-label={`${office.label}, ${office.country}`}
                className="group relative flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center"
            >
                <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2B2A2B]/10 blur-md transition duration-300 group-hover:scale-110" />
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#2B2A2B] shadow-[0_12px_28px_rgba(25,24,25,0.18)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="absolute left-1/2 top-[18px] h-4 w-[2px] -translate-x-1/2 rounded-full bg-[#2B2A2B]" />
                <span className="absolute left-1/2 top-[29px] h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[2px] bg-[#2B2A2B]" />
            </button>

            {/* lg+: card beside pin; mobile/tablet uses centered card in map (see parent) */}
            <div
                aria-hidden={!isActive}
                onClick={(e) => e.stopPropagation()}
                className={`pointer-events-none invisible absolute opacity-0 transition duration-200 max-lg:hidden lg:top-1/2 lg:z-30 lg:min-w-[260px] lg:rounded-[20px] lg:border lg:border-[#E7E2E7] lg:bg-white lg:p-5 lg:text-left lg:shadow-[0_18px_60px_rgba(25,24,25,0.12)] ${cardDesktopPositionClass} ${
                    isActive ? 'lg:visible lg:opacity-100' : ''
                }`}
            >
                <OfficeLocationCard office={office} />
            </div>
        </div>
    );
}

export default function OurOfficesSection() {
    const [activeOffice, setActiveOffice] = useState<Office['id'] | null>(null);
    const { landPaths, project } = useOfficeWorldMap();

    const pinPositions = useMemo(() => {
        return OFFICES.map((office) => {
            const [x, y] = project(office.lngLat);
            return {
                id: office.id,
                leftPct: (x / OFFICE_MAP_VIEWBOX.width) * 100,
                topPct: (y / OFFICE_MAP_VIEWBOX.height) * 100,
            };
        });
    }, [project]);

    const activeOfficeData = activeOffice
        ? OFFICES.find((o) => o.id === activeOffice) ?? null
        : null;

    return (
        <section className="bg-white px-6 py-12 lg:px-8 lg:py-18 xl:px-12">
            <div className="mx-auto max-w-[1500px]">
                <motion.div
                    className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-xl">
                        <div className="inline-flex items-center rounded-full bg-[#CFD6DC] px-4 py-1.5">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#2B2A2B]" />
                            <span className="font-aeonik text-xs font-medium text-[#2B2A2B]">Our presence</span>
                        </div>

                        <h2 className="mt-6 font-aeonik text-4xl font-normal leading-[1.05] tracking-tight text-[#191819] sm:text-5xl lg:text-6xl">
                            Operating across regions, aligned as one team
                        </h2>
                        <p className="mt-5 max-w-lg font-aeonik text-base leading-relaxed text-[#4B474B] sm:text-lg">
                            We work across the United States and Pakistan, combining client-side presence with a strong engineering base. This allows faster communication, better alignment, and consistent execution across time zones.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-full bg-[#2B2A2B] px-6 py-3 font-aeonik text-sm font-medium text-white transition hover:bg-[#3A383A]"
                            >
                                Get in touch
                            </Link>
                            <span className="inline-flex items-center rounded-full border border-[#E7E2E7] px-5 py-3 font-aeonik text-sm text-[#4B474B] lg:hidden">
                                Tap a pin to view location details
                            </span>
                            <span className="hidden items-center rounded-full border border-[#E7E2E7] px-5 py-3 font-aeonik text-sm text-[#4B474B] lg:inline-flex">
                                Hover a pin to view location details
                            </span>
                        </div>
                    </div>

                    <div className="relative" onMouseLeave={() => setActiveOffice(null)}>
                        <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
                            <WorldMapOfficesSvg
                                landPaths={landPaths}
                                className="pointer-events-none absolute inset-0 h-full w-full"
                            />

                            <div
                                className="absolute inset-0 cursor-default"
                                onClick={() => setActiveOffice(null)}
                                role="presentation"
                            >
                                {OFFICES.map((office) => {
                                    const pos = pinPositions.find((p) => p.id === office.id);
                                    if (!pos) return null;
                                    return (
                                        <MapPin
                                            key={office.id}
                                            office={office}
                                            pinLeftPct={pos.leftPct}
                                            pinTopPct={pos.topPct}
                                            isActive={activeOffice === office.id}
                                            onActivate={() => setActiveOffice(office.id)}
                                            onToggle={() =>
                                                setActiveOffice((prev) =>
                                                    prev === office.id ? null : office.id,
                                                )
                                            }
                                        />
                                    );
                                })}
                            </div>

                            {activeOfficeData ? (
                                <div
                                    className="pointer-events-auto absolute left-1/2 top-1/2 z-40 block w-[min(92%,280px)] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-[#E7E2E7] bg-white p-5 text-left shadow-[0_18px_60px_rgba(25,24,25,0.12)] lg:hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <OfficeLocationCard office={activeOfficeData} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
