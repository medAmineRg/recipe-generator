"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    return router.push("/recipe");
  }
  return (
    <div className="mt-20 flex h-screen flex-col items-center">
      <h1 className="text-4xl font-semibold">Create your account</h1>
      <h1 className="my-4 text-lg font-medium">
        Have an account?{" "}
        <Link href={"/login"} className="text-blue-500 hover:text-blue-800">
          Log in now
        </Link>
      </h1>
      <div className="flex h-[220px] w-[300px] flex-col items-center justify-center gap-5 rounded-lg bg-white font-medium drop-shadow-xl">
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
        <div
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-4 rounded-md border border-slate-900  p-2  shadow-xl hover:cursor-pointer hover:bg-black hover:text-white"
        >
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
