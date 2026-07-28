"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-white backdrop-blur-lg transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999]"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 28,
              }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-[#050816] p-6"
            >
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Rohit
                  </h2>

                  <p className="text-sm text-gray-400">
                    Portfolio
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 p-3 text-white transition hover:border-red-500 hover:text-red-400"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="space-y-3">
                {navigation.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                        active
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white shadow-glow"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
