export interface Project {
  slug: string;
  title: string;
  description: string;
  progress: number;
  features: string[];
  status: "In Progress" | "Building";
}

export const projects: Project[] = [
  {
    slug: "devdesh",
    title: "Devdesh",
    description:
      "A flagship platform combining end-to-end encrypted messaging with a social and developer ecosystem — global chat, group chat, and 1-to-1 chat, all backed by WebRTC media calls with full encryption across every mode.",
    progress: 80,
    features: [
      "End-to-end encrypted Global, Group, and 1-to-1 chat",
      "Encrypted WebRTC audio/video calls across all chat types",
      "Posts with multiple categories: code, photo, text, video",
      "Reels and Community spaces",
      "Developer tools with GitHub integration",
    ],
    status: "In Progress",
  },
  {
    slug: "chat-winner",
    title: "Chat-Winner",
    description:
      "A dedicated, advanced messaging application focused purely on communication — channels, 1-to-1 messaging, and group chat, with WebRTC media calls. Encryption across all modes is currently being implemented.",
    progress: 55,
    features: [
      "Channels",
      "1-to-1 messaging",
      "Group chat",
      "WebRTC audio/video calls (encryption in progress)",
    ],
    status: "Building",
  },
];
