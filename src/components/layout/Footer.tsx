import FooterLinks from "@/components/footer/FooterLinks";
import SocialLinks from "@/components/footer/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-3">
      <div className="container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <FooterLinks />
        <SocialLinks />
      </div>

      <div className="container mt-3 text-center">
        <small>© {year} Rohit Alam. All rights reserved.</small>
      </div>
    </footer>
  );
}
