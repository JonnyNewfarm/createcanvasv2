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
      <div className="xl:bg-[url('/painting2.jpg')] lg:bg-[url('/painting3.jpg')] md:bg-[url('/painting5.jpg')] bg-[url('/painting8.jpg')]  relative  h-screen bg-cover">
        <div className="w-full h-full flex justify-center md:justify-start md:items-center lg:pl-20 md:pl-10">
          <div className="lg:text-6xl text-4xl mt-20 sm:text-6xl font-bold md:text-4xl">
            <h1>Get your image</h1>
            <h1 className="mb-1">
              on a <span>custom</span> canvas
            </h1>
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
