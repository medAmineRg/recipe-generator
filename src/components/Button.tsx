"use client";
import { signOut } from "next-auth/react";

const Button = () => {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-lg border border-blue-500 p-2 hover:bg-blue-500 hover:text-white"
    >
      Sign out
    </button>
  );
};

export default Button;
