"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import NavLogo from "./NavLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <DesktopNav />

      <div className="lg:hidden">
        <div className="container mx-auto flex items-center justify-between px-5 py-4">
          <NavLogo />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
