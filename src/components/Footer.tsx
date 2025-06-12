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
      className=" text-light relative h-[420px]"
    >
      <div className="relative text-[#333231]  h-[calc(100vh+420px)] -top-[100vh] grainy-dark   flex-col justify-start">
        <div className="h-[420px] p-14 sticky top-[calc(100vh-420px)]">
          <div className="flex flex-row gap-x-11 text-xl">
            <div>
              <h1 className="sm:text-3xl text-lg ">About</h1>
              <h1>Home</h1>
              <h1>Contact</h1>
              <h1>Our artists</h1>
            </div>

            <div>
              <h1 className="sm:text-3xl text-lg">Socials</h1>
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

          <div className="mt-20 mb-10 text-left flex flex-col gap-y-3">
            <h1 className="text-3xl lg:text-7xl whitespace-nowrap  font-bold">
              Custom canvas
            </h1>
            <h1>Created by - Jonny Newfarm</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
