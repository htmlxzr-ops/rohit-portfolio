import './globals.css'
import type { Metadata, Viewport } from 'next'

const SITE_URL = 'https://rohit-portfolio-zeta-seven.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Rohit Alam | Full Stack Developer',
  description: 'Python & Web Developer specializing in advanced chat systems, real-time architectures, and modern full-stack applications.',
  keywords: ['Rohit Alam', 'Full Stack Developer', 'Python Developer', 'Web Developer', 'Chat Systems', 'React Developer', 'Next.js Developer'],
  authors: [{ name: 'Rohit Alam' }],
  creator: 'Rohit Alam',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Rohit Alam | Full Stack Developer',
    description: 'Python & Web Developer specializing in advanced chat systems, real-time architectures, and modern full-stack applications.',
    siteName: 'Rohit Alam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Alam | Full Stack Developer',
    description: 'Python & Web Developer specializing in advanced chat systems and modern full-stack applications.',
    creator: '@HtmlXzr13714',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rohit Alam',
              url: SITE_URL,
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/htmlxzr-ops',
                'https://www.linkedin.com/in/html-xzr-a36a323a0',
                'https://x.com/HtmlXzr13714',
                'https://youtube.com/@htmlxzr',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
