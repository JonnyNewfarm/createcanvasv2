import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className=" text-stone-800 py-10 px-10 bg-white">
      <Container className="flex justify-between">
        <div>
          <h1 className="font-semibold">Created by Newfarm</h1>
        </div>
        <div className="flex flex-row gap-3">
          <h1>Terms</h1>
          <h1>Conditions</h1>
          <h1>Contact</h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
