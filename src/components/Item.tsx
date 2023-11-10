import Image from "next/image";
import Link from "next/link";
import React from "react";

const Item = () => {
  return (
    <div className="group rounded-lg bg-white shadow-md lg:w-[330px]">
      <Link href="#">
        <div className="rounded-lg px-4 py-6 hover:cursor-pointer hover:bg-zinc-950 hover:text-white">
          <Image
            width={412}
            height={412}
            className="rounded-t-lg"
            src="/omelette.png"
            alt=""
          />
          <div className="flex items-center justify-between p-2">
            <h5 className="text-lg font-medium">Omelette cheese</h5>
            <p className="text-sm font-medium">Date: 2023-11-06</p>
          </div>
          <div className="">
            <button className="w-full rounded-md bg-slate-900 p-2 text-white group-hover:bg-white group-hover:text-black">
              See the recipe
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
