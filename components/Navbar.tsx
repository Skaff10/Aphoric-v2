import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center pt-5">
      <ul className="max-w-8xl w-full flex justify-around ">
        <Link href="/" className="cursor-pointer">
          aphoric
        </Link>
        <Link href="/" className="cursor-pointer">
          work
        </Link>
        <Link href="/" className="cursor-pointer">
          about us
        </Link>
        <Link href="/" className="cursor-pointer">
          start a project
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
