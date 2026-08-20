import Navbar from "@/components/navbar/Navbar";
import VisitorTracker from "@/components/providers/VisitorTracker";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://rohit-portfolio-zeta-seven.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Rohit Alam | Full Stack Developer",
    template: "%s | Rohit Alam",
  },

  description:
    "Python & Full Stack Developer specializing in advanced chat systems, modern web applications, cyber security, scalable architecture and the Devdesh platform.",

  keywords: [
    "Rohit Alam",
    "Portfolio",
    "Full Stack Developer",
    "Python Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Cyber Security",
    "Devdesh",
  ],

  authors: [{ name: "Rohit Alam" }],
  creator: "Rohit Alam",
  publisher: "Rohit Alam",

  applicationName: "Rohit Alam Portfolio",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "1F-TJDJh5lLfn9ZZycCG2h_1IPX3mDin4qCxJsYNMbU",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rohit Alam Portfolio",
    locale: "en_US",

    title: "Rohit Alam | Full Stack Developer",

    description:
      "Modern Full Stack Developer building Devdesh, secure applications and scalable web systems.",

    images: [
      {
        url: "/og/cover.png",
        width: 1200,
        height: 630,
        alt: "Rohit Alam Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rohit Alam | Full Stack Developer",

    description:
      "Full Stack Developer • Devdesh • Cyber Security • Modern Web Apps",

    creator: "@HtmlXzr13714",

    images: ["/og/cover.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={inter.variable}>
        <VisitorTracker />
        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Rohit Alam",

              url: SITE_URL,

              jobTitle: "Full Stack Developer",

              sameAs: [
                "https://github.com/htmlxzr-ops",
                "https://www.linkedin.com/in/html-xzr-a36a323a0",
                "https://x.com/HtmlXzr13714",
                "https://youtube.com/@htmlxzr",
                "https://www.facebook.com/share/1Bj4F9JMSg/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
