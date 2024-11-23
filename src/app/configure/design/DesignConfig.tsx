"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/HandleComponent";
interface DesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}
const DesignConfig = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfigProps) => {
  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3  mb-20 pb-20">
      <div className="relative h-[37.5rem] overflow-hidden col-span-2 w-full flex max-w-4xl items-center justify-center rounded-lg border-2 border-dashed border-stone-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
        <div className="relative w-80 bg-opacity-50 pointer-events-none aspect-[13/13]">
          <AspectRatio
            ratio={13 / 13}
            className="pointer-events-none relative z-50 aspect-[13/13]  w-full opacity-45"
          >
            <NextImage
              fill
              alt="canvas"
              src="/canvas.png"
              className="pointer-events-none z-50 select-none border-2 border-black "
            />
          </AspectRatio>
          <div
            className="absolute z-40 inset-0 left-[3px] top-px 
          right-[3px] bottom-px  shadow-
          [0_0_0_99999px_rgba(229,231,235,0.6)]"
          />
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px",
              `bg-none`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          className="absolute z-20 border-[3px] border-stone-800"
          lockAspectRatio
          resizeHandleComponent={{
            bottomLeft: <HandleComponent />,
            bottomRight: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <NextImage
              alt="your image"
              fill
              src={imageUrl}
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>
    </div>
  );
};

export default DesignConfig;
