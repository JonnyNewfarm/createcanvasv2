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
    <div className="relative h-screen">
      <div className="flex justify-center  align-middle items-center h-full">
        <div style={{ zIndex: "2" }} className="text-center uppercase">
          <div
            style={{ zIndex: "2" }}
            className="absolute inset-0 w-full h-full bg-stone-800/10"
          />
          <h1
            style={{ zIndex: "2" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase text-nowrap  text-white font-bold"
          >
            Custom canvas
          </h1>
          <h1
            style={{ zIndex: "2" }}
            className="text-white text-2xl md:text-4xl mb-10"
          >
            From image to painting
          </h1>
          <div className="">
            <Link
              className="border-[3px] relative border-white hover:bg-white hover:text-stone-900 text-white py-2 px-4 text-xl"
              style={{ zIndex: "5" }}
              href={"/configure/upload"}
            >
              Try it out
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{ objectFit: "cover", zIndex: "1" }}
        className="w-full h-full absolute top-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroSection;
