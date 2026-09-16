"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <Link href="/" aria-label="Rohit Alam Portfolio Home">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="flex items-center gap-3 cursor-pointer select-none"
      >
        <div
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            shadow-glow
          "
          style={{
            background: "linear-gradient(135deg, #00D4FF, #FFD54F)",
            padding: "2px",
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-2xl"
            style={{ background: "#050816" }}
          >
            <span
              className="text-gradient font-black"
              style={{ fontSize: "1.1rem", letterSpacing: "-0.02em" }}
            >
              RA
            </span>
          </div>
        </div>

        <div className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-wide text-white">
            Rohit Alam
          </span>

          <span className="text-xs text-text-muted">
            Full Stack Developer
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
