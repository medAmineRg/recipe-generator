"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
const Login = () => {
  const { data, status } = useSession();

  console.log({ data, status });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold ">Welcome!</h1>
      <div className="flex h-[220px] w-[300px] flex-col items-center justify-center gap-5 rounded-lg bg-white font-medium shadow-xl">
        <div
          onClick={() => signIn("google")}
          className="flex  items-center justify-center gap-4 rounded-md border border-slate-900  p-2  shadow-xl hover:cursor-pointer hover:bg-black hover:text-white"
        >
          <Image
            src={"/google.webp"}
            width={30}
            height={30}
            alt="google"
            className="p rounded bg-white"
          ></Image>
          <p>Sign up with Google</p>
        </div>
        <div className="flex items-center justify-center gap-4 rounded-md border border-slate-900  p-2  shadow-xl hover:cursor-pointer hover:bg-black hover:text-white">
          <Image
            src={"/github.png"}
            width={30}
            height={30}
            alt="google"
            className="rounded bg-white p-[2px]"
          ></Image>
          <p>Sign up with Github</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
