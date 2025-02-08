import OurArtistsSection from "@/components/OurArtistsSection";
import PaintingsAnimation from "@/components/PaintingsAnimation";
import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden bg-[url('/canvas-bg.jpg')] shadow-md">
        <div className="flex flex-col  sm:flex-row lg:mx-24 my-10 sm:my-20 sm:mt-32 xl:mx-52 ">
          <div className="flex  flex-col text-center sm:text-left justify-center sm:justify-start sm:items-start items-center w-full z-10">
            <h1 className="font-bold text-7xl tracking-tight w-fit text-balance !leading-tight">
              Your image on a{" "}
              <span className="bg-stone-800  text-white px-3 rounded-xl">
                custom
              </span>{" "}
              canvas
            </h1>

            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Capture your favorite memories with your own,{" "}
              <span className="font-semibold">one-of-one</span> canvas. Turn
              your favorite image into a painting in a few simple steps .
            </p>
            <hr className="h-[1px] bg-stone-400 shadow-lg w-[50%]" />

            <p className="mt-2 hidden sm:block  text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              You are just a few simple steps away from having your favorite
              Image on a custom canvas.{" "}
              <span className="font-medium">Upload</span> Your image an get
              started.
            </p>

            <div className="hidden sm:block">
              <p className="flex mt-5 font-semibold text-lg">
                <Check className="mr-3" /> High quality canvas
              </p>

              <p className="flex font-semibold text-lg">
                <Check className="mr-3" /> Highly detailed painting
              </p>

              <p className="flex font-semibold text-lg">
                <Check className="mr-3" /> 4 year paint warranty
              </p>

              <hr className="shadow-lg w-full" />
            </div>

            <Link
              href={"/configure/upload"}
              className="hidden sm:block text-lg border-[1px] mt-8 border-stone-900  rounded-xl py-2 bg-white px-10"
            >
              Try it out
            </Link>
          </div>

          <div>
            <hr className="h-[1px] shadow-lg" />
          </div>

          <div className="sm:w-[500px] px-8 sm:px-0 relative mt-20 sm:mt-[-30px]">
            <div className="sm:left-52 left-64 mt-[-50px] absolute w-full">
              <img src="/your-image.jpg" alt="text" className="w-[170px]" />
              <img src="/down-arrow.jpg" alt="arrow" className="w-20 z-10" />
            </div>
            <img
              className="object-contain"
              src="/family-painting.jpg"
              alt="canvas"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link
            href={"/configure/upload"}
            className="w-[80%] sm:hidden mb-3 text-center text-lg border-[1px] mt-[-10px] border-stone-900  rounded-xl py-2 bg-white px-10"
          >
            Try it out
          </Link>
        </div>
      </div>

      <div>
        <PaintingsAnimation />

        <OurArtistsSection />
      </div>
    </>
  );
}
