"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Login failed.");
        setStatus("error");
        return;
      }

      if (data.user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      router.refresh();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Login
      </Heading>

      <form onSubmit={handleSubmit} className="mt-4 max-w-xl space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Logging in..." : "Login"}
        </Button>

        {status === "error" && (
          <p className="text-sm" style={{ color: "#EF4444" }}>
            {errorMsg}
          </p>
        )}
      </form>

      <p className="mt-3 text-sm text-muted">
        Do not have an account?{" "}
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
    </Section>
  );
}
