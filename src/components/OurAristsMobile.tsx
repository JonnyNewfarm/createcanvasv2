"use client";

import Link from "next/link";
import React from "react";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const OurArtistsMobile = () => {
  const cards: CardType[] = [
    { url: "/artist.jpeg", title: "Lena Whitford", id: 1 },
    { url: "/artist-two.jpeg", title: "Maya Kensington", id: 2 },
    { url: "/artist-three.jpg", title: "Jacob Holloway", id: 3 },
  ];
  return (
    <div className="w-full md:hidden">
      <div className="flex flex-col pb-20">
        <div className="h-[35vh] flex items-center justify-center">
          <h1 className="text-3xl mt-28 uppercase">Our artists</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-full w-full flex gap-y-10 flex-col items-center">
            {cards.map((project, index) => (
              <div key={index}>
                <div
                  key={project.id}
                  className="w-[80vw]  flex justify-center "
                >
                  <div className="w-[] h-full p-10 bg-[#333231]  flex justify-center items-center">
                    <img
                      alt="project-image"
                      className="object-contain"
                      src={project.url}
                    />
                  </div>
                </div>
                <div className="w-full px-5">
                  <div className="p-5 w-full border-b-1">
                    <h1 className="">{project.title}</h1>
                    <h1 className="font-semibold">Read more</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurArtistsMobile;
