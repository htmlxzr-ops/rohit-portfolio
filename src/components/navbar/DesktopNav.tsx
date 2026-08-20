"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import { resumeLink } from "./navigation";
import AuthButton from "./AuthButton";

export default function DesktopNav() {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        hidden
        lg:block
        fixed
        top-0
        left-0
        right-0
        z-50
      "
    >
      <div className="container mx-auto px-6 pt-5">
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-black/35
            backdrop-blur-xl
            px-6
            py-4
            shadow-glass
          "
        >
          <NavLogo />

          <NavLinks />

          <div className="flex items-center gap-3">
            <Link
              href={resumeLink}
              className="
                rounded-xl
                border
                border-cyan-400/30
                px-5
                py-2.5
                text-sm
                font-semibold
                text-cyan-300
                transition-all
                hover:border-cyan-400
                hover:bg-cyan-500/10
              "
            >
              Resume
            </Link>

            <Link
              href="/contact"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-glow
                transition-all
                hover:scale-105
              "
            >
              Contact
            </Link>

            <AuthButton variant="desktop" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
