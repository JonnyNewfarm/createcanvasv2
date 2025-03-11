"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Move cards above component definitions
const cards: CardType[] = [
  { url: "/artist-one.jpeg", title: "Title 1", id: 1 },
  { url: "/artist-two.jpeg", title: "Title 2", id: 2 },
  { url: "/artist-three.jpg", title: "Title 3", id: 3 },
  { url: "/artist-one.jpeg", title: "Title 4", id: 4 },
  { url: "/artist-two.jpeg", title: "Title 5", id: 5 },
  { url: "/artist-three.jpg", title: "Title 6", id: 6 },
  { url: "/artist-one.jpeg", title: "Title 7", id: 7 },
];

const OurArtistsSection = () => {
  return (
    <div className="grainy-dark mt-40">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]); // Fix: Ensure full range

  return (
    <section ref={targetRef} className="relative h-[300vh] grainy-dark">
      <div className="w-full text-center -mb-28">
        <h1 className="text-5xl">Our artists</h1>
      </div>
      <div className="sticky pl-10 top-0 flex h-screen items-center overflow-hidden">
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
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default OurArtistsSection;

type CardType = {
  url: string;
  title: string;
  id: number;
};
