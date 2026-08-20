"use client";

import { useState, FormEvent } from "react";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Please check the form and try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Get In Touch
      </Heading>
      <p className="mt-2 max-w-xl">
        Have a project in mind or just want to say hi? Fill out the form
        below and I&apos;ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 max-w-xl space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your email"
            className="input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Your message"
            className="textarea"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>

        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-sm" style={{ color: "#22C55E" }}>
            Message sent successfully! I&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm" style={{ color: "#EF4444" }}>
            {errorMsg}
          </p>
        )}
      </form>
    </Section>
  );
}
