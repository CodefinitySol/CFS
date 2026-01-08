'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; 

  return (
    <section className="relative w-full bg-white px-6 pt-10 sm:px-8 lg:px-12 lg:pb-12">
      <div className="relative z-20 mx-auto -mt-24 max-w-[1600px] sm:-mt-32 lg:-mt-40">
        <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1e293b] shadow-2xl">
          {!isPlaying ? (
            <>
              {/* Thumbnail Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/video-thumbnail.png" 
                  alt="Video Thumbnail"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-aeonik text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play video
                </button>
              </div>
            </>
          ) : (
            <iframe
              src={`${VIDEO_URL}?autoplay=1`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
