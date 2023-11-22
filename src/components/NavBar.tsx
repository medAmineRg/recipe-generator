import Link from "next/link";
import React from "react";
import { serverSession } from "@/utils/options";
import Button from "./Button";

const NavBar = async () => {
  const session = await serverSession();

  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <Link
          href={"/recipe"}
          className="text-xl font-bold hover:text-slate-200"
        >
          CWT
        </Link>
      </div>

      <div className="flex gap-4 font-medium">
        {session && (
          <>
            <Link href={"/collection"} className="p-2 hover:text-slate-200">
              Collection
            </Link>
            <Button />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
