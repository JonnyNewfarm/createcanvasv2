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
      className="bg-white sticky overflow-hidden  top-0 h-[100vh]"
    >
      <div className="w-full h-full md:items-center flex justify-center  mt-[120px] md:-mt-[150px] lg:mt-0">
        <div
          className="text-center text-4xl ml-0 lg:-ml-[350px]"
          style={{ zIndex: "1" }}
        >
          <h1>Upload Your</h1>
          <h1 className="text-8xl sm:text-9xl">Favorite</h1>
          <h1>moment</h1>
        </div>
      </div>
      <div className="absolute bottom-0 md:right-[10px] lg:right-[60px] xl:right-[80px] ">
        <img
          src="/Uten navn-1.jpg"
          className="w-[300px] md:w-[300px]  lg:w-[400px] sm:w-[300px] xl:w-[500px] "
          alt=""
        />
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
      className="grainy-dark sticky top-0 h-[100vh]"
    >
      <div className="absolute w-full h-full top-1/3">
        <div className="text-center bg-white/20 py-3">
          <h1 className="text-4xl">We will</h1>
          <h1 className="text-8xl sm:text-9xl">Paint it</h1>
          <h1 className="text-4xl">for you</h1>
        </div>
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
