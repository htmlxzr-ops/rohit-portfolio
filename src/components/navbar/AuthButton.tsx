"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface AuthUser {
  email: string;
  role: "USER" | "ADMIN";
}

export default function AuthButton({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div
        className={
          variant === "desktop"
            ? "h-10 w-20 animate-pulse rounded-xl bg-white/5"
            : "h-12 w-full animate-pulse rounded-xl bg-white/5"
        }
      />
    );
  }

  const baseClass =
    variant === "desktop"
      ? "rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
      : "block rounded-xl border border-white/15 py-3 text-center font-semibold text-white transition hover:border-white/30 hover:bg-white/5";

  const adminClass =
    variant === "desktop"
      ? "rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105"
      : "block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white shadow-glow";

  if (user) {
    return (
      <div className={variant === "desktop" ? "flex items-center gap-3" : "space-y-2"}>
        <span
          className={
            variant === "desktop"
              ? "hidden xl:inline text-sm text-muted"
              : "block text-center text-sm text-muted"
          }
        >
          {user.email}
        </span>
        {user.role === "ADMIN" && (
          <Link href="/admin" className={adminClass}>
            Admin Panel
          </Link>
        )}
        <button onClick={handleLogout} className={baseClass}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link href="/login" className={baseClass}>
      Login
    </Link>
  );
}
