import Image from "next/image";
import Link from "next/link";
import React from "react";

const Item = () => {
  return (
    <div className="lg:w-[312px] rounded-lg shadow-md relative">
      <Link href="#">
        <Image
          width={412}
          height={412}
          className="rounded-t-lg"
          src="/omelette.png"
          alt=""
        />
        <div className="p-2 flex justify-between items-center">
          <h5 className="text-lg font-medium text-slate-900">
            Omelette cheese
          </h5>
          <p className="text-blue-600 text-sm font-medium">Date: 2023-11-06</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
