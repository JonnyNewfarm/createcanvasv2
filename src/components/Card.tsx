import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type CardType = {
  id?: string;
  img?: string;
  name?: string;
  text?: string;
  link?: string;
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="">
      <img className="min-w-[450px]" src={`${card.img}`} alt="" />
    </div>
  );
};

export default Card;
