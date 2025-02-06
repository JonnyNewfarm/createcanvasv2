import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className=" bg-slate-800 text-white py-10 px-10">
      <Container className="flex justify-between">
        <div>
          <h1></h1>Rights owned by ahdf
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
