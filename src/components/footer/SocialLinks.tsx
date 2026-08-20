import { SVGProps } from "react";

const iconProps: SVGProps<SVGSVGElement> = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "currentColor",
};

const GithubIcon = () => (
  <svg {...iconProps}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg {...iconProps}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const XIcon = () => (
  <svg {...iconProps}>
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg {...iconProps}>
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg {...iconProps}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z" />
  </svg>
);

const socials = [
  {
    href: "https://github.com/htmlxzr-ops",
    icon: GithubIcon,
    platform: "GitHub",
    username: "htmlxzr-ops",
  },
  {
    href: "https://www.linkedin.com/in/html-xzr-a36a323a0",
    icon: LinkedinIcon,
    platform: "LinkedIn",
    username: "html-xzr-a36a323a0",
  },
  {
    href: "https://x.com/HtmlXzr13714",
    icon: XIcon,
    platform: "X",
    username: "@HtmlXzr13714",
  },
  {
    href: "https://youtube.com/@htmlxzr",
    icon: YoutubeIcon,
    platform: "YouTube",
    username: "@htmlxzr",
  },
  {
    href: "https://www.facebook.com/share/1Bj4F9JMSg/",
    icon: FacebookIcon,
    platform: "Facebook",
    username: "Rohit Alam",
  },
];

export default function SocialLinks() {
  return (
    <div className="grid-2" style={{ gap: "0.75rem" }}>
      {socials.map(({ href, icon: Icon, platform, username }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex items-center gap-3 rounded-xl px-4 py-3 hover-lift transition"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
            <Icon />
          </span>
          <span>
            <small className="text-muted" style={{ display: "block" }}>
              {platform}
            </small>
            <span className="text-primary" style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              {username}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
