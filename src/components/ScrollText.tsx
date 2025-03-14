"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ValueProps {
  value: string;
  marginTop?: string;
  marginBottom?: string;
  textSize?: string;
}

const ScrollText = ({
  value,
  marginTop,
  marginBottom,
  textSize,
}: ValueProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.40"],
  });

  const words = value.split(" ");
  return (
    <div
      className={`w-full text-center font-bold text-4xl sm:text-5xl  md:${textSize} mt-${marginTop} -mb-[${marginBottom}]`}
    >
      <h1 ref={container}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word range={[start, end]} progress={scrollYProgress} key={i}>
              {word}
            </Word>
          );
        })}
      </h1>
    </div>
  );
};

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: any;
  progress: any;
}) => {
  const letters = children.split("");

  const amount = range[1] - range[0];

  const step = amount / children.length;

  return (
    <span className="relative text-nowrap mr-3">
      {letters.map((letter, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <span key={i}>
            {" "}
            <Letter range={[start, end]} progress={progress} key={i}>
              {letter}
            </Letter>
          </span>
        );
      })}
    </span>
  );
};

const Letter = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="-mr-[10px] absolute opacity-[0.1]">{children}</span>
      <motion.span className="relative -mr-[10px]" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollText;
