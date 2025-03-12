import OurArtistsSection from "@/components/OurArtistsSection";
import PaintingsAnimation from "@/components/PaintingsAnimation";
import ScrollContext from "@/hooks/ScrollerContext";
import Link from "next/link";
import ParallaxSection from "../components/ParallaxSection";

export default function Home() {
  return (
    <ScrollContext>
      <div className="relative h-screen">
        <div className="flex justify-center align-middle items-center h-full">
          <div style={{ zIndex: "2" }} className="text-center">
            <h1
              style={{ zIndex: "2" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl uppercase text-nowrap  text-white font-bold"
            >
              Custom canvas
            </h1>
            <h1
              style={{ zIndex: "2" }}
              className="text-white text-2xl md:text-4xl"
            >
              From image to painting
            </h1>
          </div>
        </div>
        <video
          src={require("../../public/bg-vid.mp4")}
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", zIndex: "1" }}
          className="w-full h-full absolute top-0"
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
