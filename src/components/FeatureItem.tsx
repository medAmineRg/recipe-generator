import Image from "next/image";
import React from "react";

const FeatureItem = ({
  img,
  heading,
  paragraph,
}: {
  img: string;
  heading: string;
  paragraph: string;
}) => {
  return (
    <div className="group rounded-lg bg-white p-5 drop-shadow-md lg:w-[330px]">
      <div className="flex flex-col items-center gap-1">
        <Image src={img} width={100} height={100} alt="generate-recipe"></Image>
        <b className="text-blue-600">{heading}</b>
        <p className="text-center text-sm font-light">{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
