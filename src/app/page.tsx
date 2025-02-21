import OurArtistsSection from "@/components/OurArtistsSection";
import PaintingsAnimation from "@/components/PaintingsAnimation";
import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  PiArrowBendDownRightBold,
  PiArrowBendRightUpBold,
} from "react-icons/pi";

export default function Home() {
  return (
    <>
      <div className="xl:bg-[url('/painting9.jpg')] lg:bg-[url('/painting10.jpg')] md:bg-[url('/painting12.jpg')]  bg-[url('/painting8.jpg')]  relative  h-screen bg-cover">
        <div className="w-full h-full flex justify-center md:justify-start md:items-center lg:pl-20 md:pl-10">
          <div className="lg:text-5xl lg:bg-white/0 p-10 rounded-xl [@media(max-width:767px)]:text-center text-center sm:text-left text-5xl [@media(max-width:395px)]:mt-0 [@media(max-width:510px)]:mt-3 [@media(max-width:395px)]:text-4xl [@media(min-width:376px)]:mt  mt-16 sm:text-6xl sm:mt-0  font-extrabold md:text-4xl xl:text-6xl">
            <h1>Get your image</h1>
            <h1 className="mb-1 md:mb-0">
              on a <span className="underline decoration-2">custom</span>{" "}
              <span className="md:block lg:inline-block">canvas</span>
            </h1>
            <p className="text-lg tracking-tight hidden lg:block lg:pr-10 max-w-prose font-normal text-center lg:text-left text-balance md:text-wrap">
              Capture your favorite memories with your own,{" "}
            </p>
            <p className="text-lg tracking-tight hidden lg:block font-normal lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              <span className="font-extrabold">one-of-one </span> canvas. Turn
              your favorite image into
            </p>
            <p className="text-lg tracking-tight hidden lg:block font-normal lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              a painting in a few simple steps.
            </p>
            <div className="hidden md:block mb-1 text-lg font-semibold">
              <p className="flex mt-5  font-semibold text-lg">
                <Check className="mr-3" /> High quality canvas
              </p>

              <p className="flex font-semibold text-lg">
                <Check className="mr-3" /> Highly detailed painting
              </p>

              <p className="flex font-semibold text-lg">
                <Check className="mr-3" /> 4 year paint warranty
              </p>
            </div>
            <Link
              className="bg-stone-900 text-white text-lg md:text-lg lg:text-xl py-3 px-5 rounded-xl"
              href={"/configure/upload"}
            >
              Upload image
            </Link>
          </div>
        </div>
      </div>

      <div>
        <PaintingsAnimation />

        <OurArtistsSection />
      </div>
    </>
  );
}
