/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { navLinks } from "@/constants/nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none "
        onClick={toggleMenu}
      >
        {!isOpen ? <Menu /> : <X />}
      </div>
      <figure
        className={`absolute md:hidden rounded-md right-3 origin-top top-20 w-auto bg-slate-800 p-2 transition-all z-50 ${
          isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-50 opacity-0 hidden"
        }`}
      >
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="py-1 px-2 pr-8 rounded-md hover:bg-slate-700 hover:text-sky-400 transition-all"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
};

export default MobileNav;
