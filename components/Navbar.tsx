import Link from "next/link";
import ScrollToBottomButton from "./ScrollToBottom";


const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <nav className="w-full flex justify-center pt-5 ">
      <ul className="max-w-610 w-full flex justify-around ">
        <Link href="/" className="cursor-pointer">
          aphoric
        </Link>
        <Link href="/work" className="cursor-pointer">
          work
        </Link>
        <Link href="/services" className="cursor-pointer">
          services
        </Link>
        <Link href="/about" className="cursor-pointer">
          about us
        </Link>
        <ScrollToBottomButton/>
      </ul>
    </nav>
  );
};

export default Navbar;
