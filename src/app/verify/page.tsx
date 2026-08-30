"use client";

import { useState, FormEvent, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailFromQuery);
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [resendCooldown, setResendCooldown] = useState(60);
  const [resending, setResending] = useState(false);
  const [resendMsg, setResendMsg] = useState("");

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Verification failed.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setTimeout(() => router.push("/login"), 1500);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  async function handleResend() {
    if (resendCooldown > 0 || !email) return;
    setResending(true);
    setResendMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setResendMsg(data.message || "Failed to resend code.");
        setResending(false);
        return;
      }

      setResendMsg("A new code has been sent to your email.");
      setResendCooldown(60);
    } catch {
      setResendMsg("Network error. Please try again.");
    } finally {
      setResending(false);
    }
  }

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Verify Your Email
      </Heading>
      <p className="mt-2 max-w-xl">
        Enter the 6-digit code sent to your email address. The code expires
        in 10 minutes.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 max-w-xl space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="6-digit code"
          className="input"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          required
        />

        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Verifying..." : "Verify"}
        </Button>

        {status === "error" && (
          <p className="text-sm" style={{ color: "#EF4444" }}>
            {errorMsg}
          </p>
        )}

        {status === "success" && (
          <p className="text-sm" style={{ color: "#22C55E" }}>
            Verified! Redirecting to login...
          </p>
        )}
      </form>

      <div className="mt-3 max-w-xl">
        <button
          type="button"
          onClick={handleResend}
          disabled={resendCooldown > 0 || resending || !email}
          className="text-sm text-primary"
          style={{
            background: "none",
            border: "none",
            cursor: resendCooldown > 0 ? "not-allowed" : "pointer",
            opacity: resendCooldown > 0 ? 0.5 : 1,
          }}
        >
          {resending
            ? "Sending..."
            : resendCooldown > 0
            ? `Resend code in ${resendCooldown}s`
            : "Resend code"}
        </button>

        {resendMsg && (
          <p className="mt-1 text-sm text-muted">{resendMsg}</p>
        )}
      </div>
    </Section>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={null}>
      <VerifyForm />
    </Suspense>
  );
}
