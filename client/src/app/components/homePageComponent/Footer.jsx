import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-black pb-2">
      <div className="flex flex-col items-center gap-6 mb-8 py-3">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-grey-100 ml-5">
          <a
            href="/about"
            className="text-white hover:text-orange-200 font-sans font-semibold uppercase"
          >
            About
          </a>
          <a
            href="/events"
            className="text-white hover:text-orange-200 font-sans font-semibold uppercase"
          >
            Explore
          </a>
          <a
            href="#contact-us"
            className="text-white hover:text-orange-200 font-sans font-semibold uppercase"
          >
            contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
