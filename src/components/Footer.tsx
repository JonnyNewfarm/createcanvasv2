import React from "react";
import Container from "./Container";
import { Facebook, InstagramIcon, TwitterIcon } from "lucide-react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className=" text-white relative h-[420px]    bg-stone-700"
    >
      <div className="relative  h-[calc(100vh+420px)] -top-[100vh] bg-stone-700   flex-col justify-start">
        <div className="h-[420px] p-14 sticky top-[calc(100vh-420px)]">
          <div className="flex flex-row gap-x-11 text-xl">
            <div>
              <h1 className="text-3xl text-white/60">About</h1>
              <h1>Home</h1>
              <h1>Contact</h1>
              <h1>Our artists</h1>
            </div>

            <div>
              <h1 className="text-3xl text-white/80">Socials</h1>
              <h1 className="flex items-center gap-x-2">
                Instagram <CiInstagram />{" "}
              </h1>
              <h1 className="flex items-center gap-x-2">
                Facebook <CiFacebook />
              </h1>
              <h1 className="flex items-center gap-x-2">
                X <FaXTwitter />
              </h1>
            </div>
          </div>

          <div className="mt-10 mb-10 text-left">
            <h1 className="text-7xl lg:text-9xl  font-bold">Custom canvas</h1>
            <h1>Created by - Jonny Newfarm</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
