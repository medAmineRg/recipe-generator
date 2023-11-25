"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "authenticated") {
    return router.push("/recipe");
  }
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold md:text-4xl">
        Log in to your account
      </h1>
      <h1 className="my-4 text-lg font-medium">
        {"Don't have an account? "}
        <Link href={"/signup"} className="text-blue-500 hover:text-blue-800">
          Sign Up
        </Link>
      </h1>
      <div className="flex h-[220px] w-[300px] flex-col items-center justify-center gap-5 rounded-lg bg-white font-medium drop-shadow-xl">
        <div
          onClick={() => signIn("google")}
          className="flex  items-center justify-center gap-4 rounded-md border border-slate-900  p-2  shadow-xl hover:cursor-pointer hover:bg-slate-50"
        >
          <Image
            src={"/google.webp"}
            width={30}
            height={30}
            alt="google"
            className="p rounded bg-white"
          ></Image>
          <p className="text-black">Sign in with Google</p>
        </div>
        <div
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-4 rounded-md border border-slate-900  p-2  shadow-xl hover:cursor-pointer hover:bg-slate-50"
        >
          <Image
            src={"/github.png"}
            width={30}
            height={30}
            alt="google"
            className="rounded bg-white p-[2px]"
          ></Image>
          <p className="text-black">Sign in with Github</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
