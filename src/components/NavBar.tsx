import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-100">
      <div>
        <Link href={"#"} className="text-2xl font-medium hover:text-slate-600">
          CWT
        </Link>
      </div>

      <div className="flex gap-4 font-medium">
        <Link href={"/collection"} className="hover:text-slate-600">
          Collection
        </Link>
        <Link href={"#"} className="hover:text-slate-600">
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
