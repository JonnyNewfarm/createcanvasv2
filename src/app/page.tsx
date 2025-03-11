import OurArtistsSection from "@/components/OurArtistsSection";
import PaintingsAnimation from "@/components/PaintingsAnimation";
import ScrollContext from "@/hooks/ScrollerContext";
import Link from "next/link";
import ParallaxSection from "../components/ParallaxSection";

export default function Home() {
  return (
    <ScrollContext>
      <div className="relative">
        <div className="absolute top-1/3 left-1/4 text-center -ml-36">
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

        <img
          className="w-full h-[85vh] object-cover"
          src="/painting9.jpg"
          alt=""
        />
      </div>

      <ParallaxSection />

      <div>
        <PaintingsAnimation />
      </div>

      <OurArtistsSection />
    </ScrollContext>
  );
}
