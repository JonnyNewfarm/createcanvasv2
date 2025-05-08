"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollText from "./ScrollText";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards: CardType[] = [
  { url: "/artist.jpeg", title: "Lena Whitford", id: 1 },
  { url: "/artist-two.jpeg", title: "Maya Kensington", id: 2 },
  { url: "/artist-three.jpg", title: "Jacob Holloway", id: 3 },
  { url: "/artist-four.jpeg", title: "Elise Harrow", id: 4 },
  { url: "/artist-five.jpeg", title: "Ryan Aldridge", id: 5 },
  { url: "/artist-six.jpeg", title: "Ethan Caldwell", id: 6 },
];

const OurArtistsSection = () => {
  return (
    <div className="grainy-dark sm:mt-48">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const containerRef = useRef(null);
  const [dim, setDim] = useState("");
  useEffect(() => {
    const updateDim = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setDim("-50%");
      } else if (width >= 768) {
        setDim("-70%");
      } else {
        setDim("-90%");
      }
    };

    updateDim();

    window.addEventListener("resize", updateDim);

    return () => {
      window.removeEventListener("resize", updateDim);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", dim]);

  return (
    <section
      ref={containerRef}
      className="hidden md:block  h-[200vh]  grainy-dark"
    >
      <div className="absolute left-1/2  -translate-x-1/2 [@media(max-width:376px)]:mt-[8vh] mt-[16vh] sm:mt-[7vh]">
        <ScrollText value="Our Artists" />
      </div>

      <div className="sticky pl-10 top-6 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <Link href={""}>
      <div
        key={card.id}
        className="group relative h-[350px] border-none w-[350px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
      <h1 className="text-2xl mt-2">{card.title}</h1>
      <h1 className="text-xl font-semibold">Read more</h1>
    </Link>
  );
};

export default OurArtistsSection;

type CardType = {
  url: string;
  title: string;
  id: number;
};
