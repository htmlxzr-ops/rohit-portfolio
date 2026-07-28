"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <Link href="/" aria-label="Rohit Portfolio Home">
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
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-400
            to-blue-600
            font-bold
            text-white
            shadow-glow
          "
        >
          R
        </div>

        <div className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-wide text-white">
            Rohit
          </span>

          <span className="text-xs text-text-muted">
            Full Stack Developer
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
