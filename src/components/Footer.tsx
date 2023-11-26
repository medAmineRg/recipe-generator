import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-medium text-blue-500">
            #{`Let's`} stay in touch! Connect with me on social media or drop me
            an email.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="mailto:rguig.medamine@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/mail.svg"}
              width={20}
              height={20}
              alt="mail-icon"
            ></Image>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-amine-rguig-bb6523248/"
          >
            <Image
              src={"/linkedin.svg"}
              width={20}
              height={20}
              alt="linkedin-icon"
            ></Image>
          </Link>
          <Link
            href="https://www.facebook.com/mohamedamine.rg.1?mibextid=LQQJ4d"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/facebook.svg"}
              width={20}
              height={20}
              alt="facebook-icon"
            ></Image>
          </Link>
          <Link
            href="https://instagram.com/mohamed.amine.rguig?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/instagram.svg"}
              width={20}
              height={20}
              alt="instagram-icon"
            ></Image>
          </Link>
          <Link
            href="https://github.com/medAmineRg?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/github.svg"}
              width={20}
              height={20}
              alt="github-icon"
            ></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
