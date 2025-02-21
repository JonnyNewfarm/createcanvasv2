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
      <div className="bg-[url('/painting2.jpg')] relative  h-screen bg-cover">
        <div className="w-full h-full flex justify-start items-center md:pl-40">
          <div className="text-6xl font-semibold">
            <h1>Get your image</h1>
            <h1>
              on a <span>custom</span> canvas
            </h1>
            <Link
              className="bg-stone-900 text-white text-xl py-3 px-5 rounded-xl"
              href={"/upload"}
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
