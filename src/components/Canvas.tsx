import React, { useEffect, useRef } from "react";
import { Canvas as FabricCanvas } from "fabric";
import { Image as FabricImage } from "fabric";
import { filters as FabricFilters } from "fabric";

interface OilPaintingEffectProps {
  src: string;
}

const Canvas = ({ src }: OilPaintingEffectProps) => {
  return <img className="w-full" src={src} alt="" />;
};

export default Canvas;
