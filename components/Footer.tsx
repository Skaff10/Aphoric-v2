import Link from "next/link";
import React from "react";
import GetInTouch from "./GetInTouch";

const Footer = () => {
  return (
    <footer className="w-full">
      <section>
        <GetInTouch />
      </section>
      <section className="flex flex-col md:flex-row gap-8 py-5 justify-between px-6 sm:px-12 lg:px-[clamp(197px,17.08vw,328px)]">
        <div className="flex flex-col gap-2 justify-center">
          <h3 className="text-base sm:text-lg">
            <span className="text-text">email:</span> contact@aphoric.org
          </h3>
          <h3 className="text-base sm:text-lg">
            <span className="text-text">based in:</span> dhaka, bangladesh
          </h3>
          <h3 className="text-base sm:text-lg">
            <span className="text-text">services :</span> web development ,
            graphic design , <br className="hidden sm:inline" /> digital
            marketing , ai automation
          </h3>
        </div>
        <div className="flex justify-between  sm:justify-around gap-12 sm:gap-10">
          <div>
            <h2 className="text-sm text-text mb-3">pages</h2>
            <ul className="text-base sm:text-lg space-y-1">
              <li>
                <Link
                  href={"/"}
                  className="inline-flex items-center min-h-11"
                >
                  home
                </Link>
              </li>

              <li>
                <Link
                  href={"/work"}
                  className="inline-flex items-center min-h-11"
                >
                  work
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  className="inline-flex items-center min-h-11"
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="inline-flex items-center min-h-11"
                >
                  about
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm text-text mb-3">social</h2>
            <ul className="text-base sm:text-lg space-y-1">
              <li>
                <Link
                  href={"https://www.instagram.com/aphoricorg"}
                  className="inline-flex items-center min-h-11"
                >
                  instagram
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.facebook.com/aphoric.org"}
                  className="inline-flex items-center min-h-11"
                >
                  facebook
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.behance.net/aphroricorg"}
                  className="inline-flex items-center min-h-11"
                >
                  behance
                </Link>
              </li>
              <li>
                <Link
                  href={"https://wa.me/8801798855024"}
                  className="inline-flex items-center min-h-11"
                >
                  whatsapp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full mb-5 px-4">
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[clamp(46px,22.3vw,505px)] overflow-hidden font-display leading-none text-center">
          aphoric
        </h1>
      </section>
      <section className="mx-auto  px-6 max-w-520 border-t border-text/20 text-center py-4">
        <p className="text-text text-sm sm:text-base">
          © 2026 aphoric. all rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
