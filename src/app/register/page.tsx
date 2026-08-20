"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Registration failed.");
        setStatus("error");
        return;
      }

      router.push(`/verify?email=${encodeURIComponent(form.email)}`);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Create Account
      </Heading>
      <p className="mt-2 max-w-xl">
        Sign up to get notified whenever new content is posted.
      </p>

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
          placeholder="Password (min 6 characters)"
          className="input"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          minLength={6}
        />

        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Creating account..." : "Sign Up"}
        </Button>

        {status === "error" && (
          <p className="text-sm" style={{ color: "#EF4444" }}>
            {errorMsg}
          </p>
        )}
      </form>

      <p className="mt-3 text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </p>
    </Section>
  );
}
