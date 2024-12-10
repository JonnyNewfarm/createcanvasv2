import React, { useEffect, useRef } from "react";
import { Canvas as FabricCanvas } from "fabric";
import { Image as FabricImage } from "fabric";
import { filters as FabricFilters } from "fabric";

interface OilPaintingEffectProps {
  src: string;
}

const Canvas: React.FC<OilPaintingEffectProps> = ({ src }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const canvas = new FabricCanvas(canvasElement);

    let isMounted = true;

    FabricImage.fromURL(src, { crossOrigin: "anonymous" }).then((img) => {
      if (!isMounted || !img) return;

      canvas.add(img);

      // Apply advanced filters
      img.filters = img.filters || [];
      img.filters.push(new FabricFilters.Pixelate({ blocksize: 2 })); // Coarser blocks
      img.filters.push(new FabricFilters.Noise({ noise: 70 })); // Add grain
      img.filters.push(new FabricFilters.Blur({ blur: 0 })); // Soften edges

      img.applyFilters();
      canvas.renderAll();
    });

    return () => {
      isMounted = false;
      canvas.dispose();
    };
  }, [src]);

  return <canvas ref={canvasRef} width={600} height={600} />;
};

export default Canvas;
