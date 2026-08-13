"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollToBottomButton from "./ScrollToBottom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "aphoric" },
    { href: "/work", label: "work" },
    { href: "/services", label: "services" },
    { href: "/about", label: "about us" },
  ];

  return (
    <nav className="w-full pt-5 px-6 flex justify-center relative z-50">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex max-w-610 w-full justify-around items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="cursor-pointer hover:text-white transition-colors min-h-11 min-w-11 flex items-center justify-center px-3"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <div className="min-h-11 min-w-11 flex items-center justify-center px-3">
            <ScrollToBottomButton />
          </div>
        </li>
      </ul>

      {/* Mobile Navigation Bar */}
      <div className="flex md:hidden w-full items-center justify-end">
       
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="min-h-11 min-w-[44px] p-2 flex flex-col justify-center items-center gap-1.5 focus:outline-none cursor-pointer"
        >
          <span
            className={`w-6 h-0.5 bg-secondary transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-secondary transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-secondary transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-primary/98 flex flex-col justify-center items-center gap-8 md:hidden z-50 px-6">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 min-h-11 min-w-11 p-2 text-secondary text-2xl flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-medium text-secondary hover:text-white min-h-11 min-w-11 flex items-center justify-center px-4"
            >
              {link.label}
            </Link>
          ))}
          <div
            onClick={() => setIsOpen(false)}
            className="text-2xl font-medium text-secondary hover:text-white min-h-11 min-w-11 flex items-center justify-center px-4"
          >
            <ScrollToBottomButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
