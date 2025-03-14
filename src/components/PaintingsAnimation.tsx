"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import ScrollText from "./ScrollText";

const PAINTINGS = [
  "/paintings/1.jpg",
  "/paintings/2.jpg",
  "/paintings/3.jpg",
  "/paintings/4.jpg",
  "/paintings/5.jpg",
  "/paintings/6.jpg",
];

function separateArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let index = 0; index < array.length; index++) {
    const i = index % numParts;

    if (!result[i]) {
      result[i] = [];
    }
    result[i].push(array[index]);
  }
  return result;
}

function PaintingColumn({
  paintings,
  className,
  paintingsClassName,
  msPerPixel = 0,
}: {
  paintings: string[];
  className?: string;
  paintingsClassName?: (paintingsIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;
  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {paintings.concat(paintings).map((imgScr, paintingIndex) => (
        <Painting
          key={paintingIndex}
          className={paintingsClassName?.(paintingIndex % paintings.length)}
          imgScr={imgScr}
        />
      ))}
    </div>
  );
}

interface PaintingProps extends HTMLAttributes<HTMLDivElement> {
  imgScr: string;
}

function Painting({ imgScr, className, ...props }: PaintingProps) {
  const POSSIBLE_ANIMATION_DELAY = ["0s", "0.1s", "0.2s", "0.4s", "0.5s"];
  const animationDelay =
    POSSIBLE_ANIMATION_DELAY[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAY.length)
    ];
  return (
    <div
      className={cn(
        "animate-fade-in rounded-md bg-white p-6 opacity-0 shadow-xl",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <img src={imgScr} className="" alt="" />
    </div>
  );
}

function PaintingsGrid() {
  const containerRef = useRef(null);
  const ContainerInView = useInView(containerRef, { once: true, amount: 0.3 });
  const columns = separateArray(PAINTINGS, 3);
  const firstColumn = columns[0];
  const secondColumn = columns[1];
  const thirdColumn = separateArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4
    mt-20 h-[720px] max-h-[150vh] grid grid-cols-1 items-start gap-7 overflow-hidden px-4 sm:mt-18 md:grid-cols-2 lg:grid-cols-3"
    >
      {ContainerInView ? (
        <>
          <PaintingColumn
            paintings={[...firstColumn, ...thirdColumn.flat(), ...secondColumn]}
            paintingsClassName={(paintingIndex) =>
              cn({
                "md:hidden":
                  paintingIndex >= firstColumn.length + thirdColumn[0].length,
                "lg:hidden": paintingIndex >= firstColumn.length,
              })
            }
            msPerPixel={10}
          />

          <PaintingColumn
            paintings={[...secondColumn, ...thirdColumn[1]]}
            className="hidden md:block"
            paintingsClassName={(paintingIndex) =>
              paintingIndex >= secondColumn.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />

          <PaintingColumn
            paintings={thirdColumn.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-100 " />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-100 " />
    </div>
  );
}

const PaintingsAnimation = () => {
  return (
    <Container className="relative max-w-5xl grainy-dark mt-11">
      <ScrollText value="Some of our work" marginTop="20" />
      <PaintingsGrid />
    </Container>
  );
};

export default PaintingsAnimation;
