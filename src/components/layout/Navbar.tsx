/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Logo from "../icons/Logo";
import { navLinks } from "../../constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0  w-full bg-slate-900/50 backdrop-blur-md z-50">
      <div className="relative container py-6 flex items-center justify-between transition-all">
        <Logo />
        {/* desktop nav links */}
        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-lg tracking-wide text-slate-300 hover:text-slate-50 transition-all"
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* mobile nav links */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
