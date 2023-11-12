import Link from "next/link";
import React from "react";
import { serverSession } from "@/utils/options";
import { signOut } from "next-auth/react";
import Button from "./Button";

const NavBar = async () => {
  const session = await serverSession();

  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <Link
          href={"/recipe"}
          className="text-lg font-medium  text-blue-500 hover:text-blue-800"
        >
          CWT
        </Link>
      </div>

      <div className="flex gap-4 font-medium">
        {session && (
          <>
            <Link
              href={"/collection"}
              className="p-2 text-blue-500 hover:text-blue-800"
            >
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
