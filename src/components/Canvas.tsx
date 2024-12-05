import React from "react";
interface CanvasProps {
  src: string;
}
const Canvas = ({ src }: CanvasProps) => {
  return (
    <div className="w-80">
      <img className="object-contain" src={src} alt="" />;
    </div>
  );
};

export default Canvas;
