import Link from "next/link";
import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const OurArtistsSection = () => {
  return (
    <div className="bg-grainy-dark pb-10 pt-10 mt-20">
      <Container>
        <div className="w-full flex">
          <div className="h-20 w-1 bg-stone-800 mr-2"></div>
          <div>
            <h1 className="text-5xl font-extrabold">Our Artists</h1>
            <p className="font-semibold ml-1">Meet our painters</p>
          </div>
        </div>
        <hr />

        <div className="mt-10 mb-20 relative z-0">
          <div className=" flex flex-col sm:flex-row align-middle justify-end  sm:justify-between">
            <div className="sm:w-80 mb-4">
              <img
                className="rounded-lg z-40 shadow-lg"
                src="artist-one.jpeg"
                alt=""
              />
              <h1 className="font-semibold text-xl mt-1">Lena Voss</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h1 className="mt-2 flex gap-2 text-xl items-center">
                Explore <ArrowRight />{" "}
              </h1>
            </div>

            <div className="sm:w-80 rounded-xl mb-4">
              <img
                className="rounded-lg z-40 shadow-xl"
                src="artist-two.jpeg"
                alt=""
              />
              <h1 className="font-semibold text-xl mt-1">Lena Voss</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h1 className="mt-2 flex gap-2 text-xl items-center">
                Explore <ArrowRight />{" "}
              </h1>
            </div>

            <div className="sm:w-80 mb-4">
              <img
                className="rounded-lg z-40 shadow-xl"
                src="artist-three.jpg"
                alt=""
              />
              <h1 className="font-semibold text-xl mt-1">Lena Voss</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h1 className="mt-2 flex gap-2 text-xl items-center">
                Explore <ArrowRight />{" "}
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurArtistsSection;
