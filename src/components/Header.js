// Header.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import ZealLogo from "../assets/images/logo2.png";// Ensure this image exists

const Header = () => {
  return (
    <header className="bg-[#0a0a0a] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-4">
        {/* Left: Logo + Title + Tagline */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={ZealLogo}
            alt="Zeal Fabrication Logo"
            width={56}
            height={56}
            className="rounded-xl"
            priority
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold leading-tight">
              Zeal Fabrication
            </h1>
            <p className="text-sm text-gray-300 -mt-1">
              Precision Welding & Steel Works
            </p>
          </div>
        </Link>

        {/* Center: Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Right: Contact Info */}
        <div className="text-right text-sm sm:text-base leading-tight">
          <p>
            <a
              href="https://wa.me/254790587967"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            ></a>
      </p>
      </div>
      </div>
    </header>
  );
};

export default Header;
