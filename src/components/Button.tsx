"use client";
import { signOut } from "next-auth/react";

const Button = () => {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-lg border border-slate-100 bg-slate-100 p-2 text-black hover:bg-slate-200"
    >
      Sign out
    </button>
  );
};

export default Button;
