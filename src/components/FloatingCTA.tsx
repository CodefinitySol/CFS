'use client';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="flex items-center gap-3 rounded-full bg-[#181A1D] border border-white/10 px-6 py-4 font-aeonik text-base font-medium text-white shadow-2xl transition-transform hover:scale-105 hover:bg-[#252b3d] cursor-pointer">
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
      </button>
    </div>
  );
}
