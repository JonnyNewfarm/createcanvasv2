"use client";
import React, { useRef } from "react";

import para1 from "../../public/parallax-scroll/para1.jpg";
import para2 from "../../public/parallax-scroll/para2.jpg";
import para3 from "../../public/parallax-scroll/para3.jpg";
import para4 from "../../public/parallax-scroll/para4.jpg";
import para5 from "../../public/parallax-scroll/para5.jpg";
import para6 from "../../public/parallax-scroll/para6.jpg";
import para7 from "../../public/parallax-scroll/para7.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const ImgZoomOnScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      src: para1,
      scale: scale4,
      style:
        "w-[25vw] h-[25vh] relative flex justify-center items-center px-5 py-3",
      text1: "Capture your",
      text2: "favorite moment",
      text3: "We will paint it",
      linkText: `Try it out`,
    },
    {
      src: para2,
      scale: scale5,
      style: "w-[35vw] h-[30vh] top-[-30vh] left-[5vw] relative",
    },

    {
      src: para3,
      scale: scale6,
      style: "w-[20vw] h-[45vh] top-[-10vh] left-[-25vw] relative",
    },

    {
      src: para4,
      scale: scale8,
      style: "w-[25vw] h-[25vh]  left-[27.5vw] relative",
    },

    {
      src: para5,
      scale: scale9,
      style: "w-[20vw] h-[25vh] top-[27.5vh] left-[5vw] relative",
    },

    {
      src: para6,
      scale: scale6,
      style: "w-[30vw] h-[25vh] top-[27.5vh] left-[-22.5vw] relative",
    },

    {
      src: para7,
      scale: scale5,
      style: "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw] relative",
    },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky overflow-hidden top-[0px] h-screen grany-dark">
        {images.map(
          ({ src, scale, style, text1, text2, text3, linkText }, index) => {
            return (
              <motion.div
                style={{ scale }}
                key={index}
                className="flex justify-center items-center w-full h-full absolute"
              >
                <div className={style}>
                  <Image className="object-cover" alt="image" fill src={src!} />
                  <div className="absolute left-3 top-5 bg-stone-500/30  font-semibold">
                    <h1 className="text-[10px] md:text-lg  text-white/90 leading-snug">
                      {text1}
                    </h1>
                    <h1 className=" text-[10px] md:text-lg  text-white/90 leading-snug">
                      {text2}
                    </h1>
                    <h1 className="text-[5px] text-nowrap leading-snug m-0 sm:text-[7px] font-normal text-white">
                      {text3}
                    </h1>
                  </div>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ImgZoomOnScroll;
