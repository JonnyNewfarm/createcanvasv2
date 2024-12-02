import React from "react";

interface CanvasProps {
  imgSrc: string;
}

const Canvas = ({ imgSrc }: CanvasProps) => {
  return (
    <div className="relative pointer-events-none z-50 overflow-hidden aspect-[13/13]  max-w-[350px] md:w-72">
      <img
        src={"/canvas.png"}
        className="pointer-events-none z-50 select-none opacity-0"
        alt="phone image"
      />
      <div className="absolute -z-10 inset-1 shadow-md ">
        <img
          className="object-cover min-w-full min-h-full rounded-xl border-[1px] border-black"
          alt="image"
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default Canvas;
