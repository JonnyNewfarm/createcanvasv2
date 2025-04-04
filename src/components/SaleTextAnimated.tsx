"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SaleTextAnimated = () => {
  const firstParagraph = useRef(null);
  const secondParagraph = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0.25,
        end: window.innerHeight,
        scrub: 0,
        onUpdate: (event) => (direction = event.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstParagraph.current, { xPercent: xPercent });
    gsap.set(secondParagraph.current, { xPercent: xPercent + 100 });

    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="overflow-hidden w-full">
      <div ref={slider} className="flex whitespace-nowrap w-max">
        <p
          ref={firstParagraph}
          className="font-bold pr-14 text-nowrap text-[clamp(2rem,10vw,100px)] m-2.5 uppercase"
        >
          Free shipping - spring sale
        </p>

        <p
          ref={secondParagraph}
          className="font-bold pr-14 text-nowrap text-[clamp(2rem,10vw,100px)] m-2.5 uppercase"
        >
          Free shipping - spring sale
        </p>
      </div>
    </div>
  );
};

export default SaleTextAnimated;
