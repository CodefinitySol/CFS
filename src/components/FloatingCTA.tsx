'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CALENDLY_BOOKING_URL } from '@/constants/booking';

export default function FloatingCTA() {
  const pathname = usePathname();
  if (pathname === '/contact') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={CALENDLY_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-[#191819] px-6 py-4 font-aeonik text-base font-medium text-white shadow-2xl transition-transform hover:scale-105 hover:bg-[#2B2A2B]"
      >
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Book a free call
      </Link>
    </div>
  );
}
