import Image from "next/image";
import Link from "next/link";
import React from "react";

const Item = () => {
  return (
    <div className="w-[412px] h-max bg-white rounded-lg shadow relative">
      <Link href="#">
        <Image
          width={412}
          height={412}
          className="rounded-t-lg"
          src="/omelette.png"
          alt=""
        />
      </Link>
      <div className="p-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          Omelette cheese
        </h5>
      </div>
    </div>
  );
};

export default Item;
