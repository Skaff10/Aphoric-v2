import Link from "next/link";
import React from "react";
import GetInTouch from "./GetInTouch";

const Footer = () => {
  
  return (
    <footer className="">
      <section>
        <GetInTouch />
      </section>
      <section className="flex  py-5 justify-between px-82">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">
            <span className="text-text">email:</span> contact@aphoric.org
          </h3>
          <h3 className="text-lg">
            <span className="text-text">based in:</span> dhaka, bangladesh
          </h3>
          <h3 className="text-lg">
            <span className="text-text">services :</span> web development ,
            graphic design , <br /> digital marketing , ai automation
          </h3>
        </div>
        <div className="flex justify-around gap-10">
          <div>
            <h2 className="text-sm text-text mb-3">pages</h2>
            <ul className="text-lg">
              <Link href={"/"}>
                <li>home</li>
              </Link>
              <Link href={"/about"}>
                <li>about</li>
              </Link>
              <Link href={"/work"}>
                <li>work</li>
              </Link>
              <Link href={"/contact"}>
                <li>contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-sm text-text mb-3">social</h2>
            <ul className="text-lg">
              <Link href={"https://www.instagram.com/aphoricorg"}>
                <li>instagram</li>
              </Link>
              <Link href={"https://www.facebook.com/aphoric.org"}>
                <li>facebook</li>
              </Link>
              <Link href={"https://www.behance.net/aphroricorg"}>
                <li>behance</li>
              </Link>
              <Link href={"https://wa.me/8801798855024"}>
                <li>whatsapp</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full mb-5">
        <h1 className="text-[505px] overflow-hidden font-display leading-none">
          aphoric
        </h1>
      </section>
      <section className="ml-60 max-w-520 border-t border-text/20 text-center py-4">
        <p className="text-text">© 2026 aphoric. all rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
