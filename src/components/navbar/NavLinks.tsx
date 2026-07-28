"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "./navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {navigation.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link key={item.href} href={item.href}>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`
                relative
                px-4
                py-2
                rounded-xl
                transition-all
                duration-300
                font-medium
                text-sm
                ${
                  active
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item.label}

              {active && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-cyan-400"
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}
