"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import Link from "next/link";
import HeroBackground from "@/components/hero/HeroBackground";

export default function Hero() {
  return (
    <Section className="relative py-section hero-bg min-h-[90vh] flex items-center">
      <HeroBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <span className="badge mb-2 inline-flex">
          Full Stack Developer
        </span>

        <Heading as="h1" className="mt-2">
          Hi, I&apos;m <span className="text-gradient">Rohit Alam</span>
        </Heading>

        <p className="mt-2 max-w-xl">
          I build modern, secure and scalable web applications — from
          real-time chat systems to production-grade platforms like
          Devdesh.
        </p>

        <div className="mt-3 flex flex-wrap gap-4">
          <Link href="/projects"><Button variant="primary">View Projects</Button></Link>
          <Link href="/contact"><Button variant="outline">Contact Me</Button></Link>
        </div>
      </motion.div>
    </Section>
  );
}
