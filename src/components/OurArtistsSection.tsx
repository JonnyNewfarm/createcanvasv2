import Link from "next/link";
import React from "react";

const OurArtistsSection = () => {
  return (
    <div className="bg-stone-200/40 shadow-inner mb-20">
      <div className="w-full text-center">
        <h1 className="font-bold text-6xl pt-10">Our artists</h1>
      </div>

      <div className="flex justify-center gap-x-60 mt-10 mb-10">
        <div>
          <div className="flex mb-10">
            <img
              className="max-w-72 rounded-xl relative"
              src="/artist-one.jpeg"
              alt=""
            />
            <div className="absolute ml-56 mt-14 text-center p-5 rounded-xl shadow-lg bg-white  w-52 h-44 ">
              <h1 className="font-bold text-xl">Lena Voss</h1>
              <p className="font-semibold text-stone-700">Painter</p>
              <p>Lena Voss is a contemporary painter whose works..</p>
              <Link href="" className="font-semibold underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <img
              className="max-w-72 rounded-xl relative"
              src="/artist-two.jpeg"
              alt=""
            />
            <div className="absolute ml-56 mt-14  text-center p-5 rounded-xl shadow-lg bg-white  w-52 h-44 ">
              <h1 className="font-bold text-xl">Sophie Armitage</h1>
              <p className="font-semibold text-stone-700">Painter</p>
              <p>Sophie Armitage is a contemporary painter whose works..</p>
              <Link href="" className="font-semibold underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurArtistsSection;
