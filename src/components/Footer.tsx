import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-500 p-5 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href={"https://www.linkedin.com/in/mohamed-amine-rguig/"}>
            <Image
              src={"/linkedin.webp"}
              alt="social icon"
              width={30}
              height={30}
              className="object-contain"></Image>
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <Image
              src={"/instagram.webp"}
              alt="social icon"
              width={30}
              height={30}
              className="object-contain"></Image>
          </Link>
          <Link href={"https://www.facebook.com/"}>
            <Image
              src={"/facebook.png"}
              alt="social icon"
              width={30}
              height={30}
              className="object-contain"></Image>
          </Link>
        </div>
        <div className="md:flex md:gap-5 text-sm">
          <Link href="/gmail.com">
            <div className="flex gap-2">
              <Image
                src={"/gmail.png"}
                alt="social icon"
                width={20}
                height={20}
                className="object-contain"></Image>
              <p>rguig.medamine@gmail.com</p>
            </div>
          </Link>
          <div className="flex gap-2 mt-1 md:mt-0">
            <Image
              src={"/phone.jpg"}
              alt="social icon"
              width={15}
              height={15}
              className="object-contain rotate-180"></Image>
            <p>+212 779 795 192</p>
          </div>
        </div>
      </div>
      <div className="border my-5"></div>
      <div className="flex justify-between text-xs">
        <p>2023 alright reserved</p>
        <p>Created By RGUIG Mohamed Amine</p>
      </div>
    </div>
  );
};

export default Footer;