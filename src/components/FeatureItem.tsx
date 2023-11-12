import Image from "next/image";
import React from "react";

const FeatureItem = ({
  img,
  heading,
  paragraph,
  width,
  height,
  className,
}: {
  img: string;
  heading: string;
  paragraph: string;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <div
      className={`group rounded-lg bg-white p-5 drop-shadow-md ${className}`}
    >
      <div className="flex flex-col items-center gap-1">
        <Image
          src={img}
          width={width}
          height={height}
          alt="generate-recipe"
        ></Image>
        <b className="text-blue-600">{heading}</b>
        <p className="text-center text-xs font-medium">{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
