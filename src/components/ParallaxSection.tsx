"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ParallaxSection = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative h-[200vh] bg-stone-900/90">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};

const Section1 = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="bg-white sticky  top-0 h-[100vh] flex  gap-x-20 items-center"
    >
      <div className="text-5xl text-center absolute left-60">
        <h1>Upload Your</h1>
        <h1 className="text-9xl">Favorite</h1>
        <h1>moment</h1>
      </div>
      <div className="absolute bottom-0 right-60">
        <img src="/Uten navn-1.jpg" className="w-[500px] " alt="" />
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="grainy-dark  sticky top-0 h-[100vh]"
    >
      <div className="text-6xl top-1/3 left-40 text-center absolute">
        <h1>We will</h1>
        <h1 className="text-9xl">Paint it</h1>
        <h1>for you</h1>
      </div>
      <img
        className="w-full h-[100vh] object-cover"
        src="/painting9.jpg"
        alt=""
      />
    </motion.div>
  );
};

export default ParallaxSection;
