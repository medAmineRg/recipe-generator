import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-sm text-white">
      <div>
        <Link href={"#"} className="text-lg font-medium hover:text-slate-200">
          CWT
        </Link>
      </div>

      <div className="flex gap-4 font-medium">
        <Link href={"/collection"} className="hover:text-slate-200">
          Collection
        </Link>
        <Link href={"/about"} className="hover:text-slate-200">
          About
        </Link>
        <Link href={"#"} className="hover:text-slate-200">
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
