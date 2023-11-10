import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <Link
          href={"/recipe"}
          className="text-lg font-medium  hover:text-slate-700"
        >
          CWT
        </Link>
      </div>

      <div className="flex gap-4 font-medium">
        <Link href={"/collection"} className="p-2 hover:text-slate-700">
          Collection
        </Link>
        <Link href={"/about"} className="p-2 hover:text-slate-700">
          About
        </Link>
        <Link
          href={"/sign-out"}
          className="rounded-lg border border-slate-900 p-2 hover:bg-slate-900 hover:text-white"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
