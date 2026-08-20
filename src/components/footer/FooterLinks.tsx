import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function FooterLinks() {
  return (
    <nav className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="text-muted transition hover:text-primary">
          {label}
        </Link>
      ))}
    </nav>
  );
}
