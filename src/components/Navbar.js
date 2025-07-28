// src/components/Navbar.js

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="text-white relative z-50">
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              pathname === item.path
                ? "bg-[#f5831e] text-white"
                : "hover:bg-[#f5831e] hover:text-white"
            }`}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#f5831e]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-0 w-full bg-[#020406] shadow-lg z-50">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? "bg-[#f5831e] text-white"
                    : "hover:bg-[#f5831e] hover:text-white"
                }`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
