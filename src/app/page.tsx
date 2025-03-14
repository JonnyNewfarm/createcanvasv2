import OurArtistsSection from "@/components/OurArtistsSection";
import PaintingsAnimation from "@/components/PaintingsAnimation";
import ScrollContext from "@/hooks/ScrollerContext";
import Link from "next/link";
import ParallaxSection from "../components/ParallaxSection";
import ImgZoomOnScroll from "@/components/ImgZoomOnScroll";
import ScrollText from "@/components/ScrollText";

export default function Home() {
  return (
    <ScrollContext>
      <div className="relative h-screen">
        <div className="flex justify-center align-middle items-center h-full">
          <div style={{ zIndex: "2" }} className="text-center">
            <h1
              style={{ zIndex: "2" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase text-nowrap  text-white font-bold"
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
          src={"/bg-vid.mp4"}
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", zIndex: "1" }}
          className="w-full h-full absolute top-0"
        />
      </div>

      <ImgZoomOnScroll />

      <div>
        <PaintingsAnimation />
      </div>

      <OurArtistsSection />

      <div className="[@media(max-width:450px)]:h-[500px] sm:h-1"></div>
    </ScrollContext>
  );
}
