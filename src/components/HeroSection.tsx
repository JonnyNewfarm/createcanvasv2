"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => console.error("Autoplay failed:", err));
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-800/30 z-10" />

      {/* Content */}
      <div className="flex items-center mt-28 justify-center h-full relative z-20 text-center uppercase px-4">
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white ">
            Custom canvas
          </h1>
          <h2 className="text-white text-2xl md:text-4xl mb-10">
            From image to painting
          </h2>
          <Link
            href="/configure/upload"
            className="border-[3px] border-[#e6e4e3] text-light hover:bg-[#e6e4e3] hover:text-stone-900 py-2 px-4 text-xl inline-block transition-colors"
          >
            Try it out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
