import OurArtistsSection from "@/components/OurArtistsSection";
import PaintingsAnimation from "@/components/PaintingsAnimation";
import ScrollContext from "@/hooks/ScrollerContext";
import ImgZoomOnScroll from "@/components/ImgZoomOnScroll";
import HeroSection from "@/components/HeroSection";
import OurArtistsMobile from "@/components/OurAristsMobile";

export default function Home() {
  return (
    <ScrollContext>
      <HeroSection />
      <ImgZoomOnScroll />

      <div>
        <PaintingsAnimation />
      </div>

      <OurArtistsSection />
      <OurArtistsMobile />
    </ScrollContext>
  );
}
