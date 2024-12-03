import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/logo.png" alt="logo" width={30} height={30} />
      <div className="relative">
        <h1 className="capitalize text-white text-2xl font-bold tracking-wide">
          {" "}
          pick tech
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
