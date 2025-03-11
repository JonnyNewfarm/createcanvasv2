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
      <div className="w-full relative">
        <div className="absolute top-1/2 left-1/4 text-center -ml-36">
          <h1 className="text-6xl">Get your</h1>
          <h1 className="text-7xl font-semibold">favorite image</h1>
          <h1 className="text-6xl mb-6">on a canvas</h1>
          <Link
            href={""}
            className="text-2xl font-semibold bg-stone-900 rounded-xl text-white py-2 px-4"
          >
            Upload image
          </Link>
        </div>

        <img className="w-full" src="/painting9.jpg" alt="" />
      </div>

      <div>
        <PaintingsAnimation />

        <OurArtistsSection />
      </div>
    </>
  );
}
