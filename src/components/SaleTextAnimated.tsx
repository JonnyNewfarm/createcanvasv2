"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SaleTextAnimated = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full bg-white border-y-2 border-black"
    >
      <div className="flex w-max" ref={textRef}>
        {/* Repeat the text twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <p
            key={i}
            className="font-bold uppercase text-[clamp(2rem,8vw,100px)] whitespace-nowrap px-10"
          >
            Free shipping spring sale
          </p>
        ))}
      </div>
    </div>
  );
};

export default SaleTextAnimated;
