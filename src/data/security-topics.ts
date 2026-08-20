export interface SecurityTopic {
  slug: string;
  title: string;
  summary: string;
  points: string[];
}

export const securityTopics: SecurityTopic[] = [
  {
    slug: "authentication",
    title: "Authentication",
    summary: "Verifying that a user is who they claim to be before granting access.",
    points: [
      "Passwords are hashed, never stored in plain text",
      "Multi-factor authentication adds a second layer of proof",
      "Session tokens are short-lived and rotated",
    ],
  },
  {
    slug: "authorization",
    title: "Authorization",
    summary: "Controlling what an authenticated user is allowed to do.",
    points: [
      "Role-based access control limits actions by user role",
      "Every sensitive action is checked server-side, never trusted from the client",
      "Least privilege — users only get the access they need",
    ],
  },
  {
    slug: "encryption",
    title: "Encryption",
    summary: "Protecting data so it stays unreadable to anyone without the right key.",
    points: [
      "Data in transit is protected with TLS",
      "Sensitive data at rest is encrypted",
      "End-to-end encryption ensures only the intended participants can read messages",
    ],
  },
  {
    slug: "jwt",
    title: "JWT",
    summary: "JSON Web Tokens for stateless, verifiable authentication.",
    points: [
      "Tokens are signed to prevent tampering",
      "Short expiry times reduce the impact of a leaked token",
      "Sensitive data is never stored inside the token payload",
    ],
  },
  {
    slug: "xss",
    title: "XSS (Cross-Site Scripting)",
    summary: "Preventing attackers from injecting malicious scripts into pages.",
    points: [
      "All user input is escaped before rendering",
      "Content Security Policy restricts what scripts can run",
      "Framework-level auto-escaping is trusted over manual HTML injection",
    ],
  },
  {
    slug: "csrf",
    title: "CSRF (Cross-Site Request Forgery)",
    summary: "Stopping attackers from tricking a user's browser into unwanted actions.",
    points: [
      "State-changing requests require a CSRF token",
      "SameSite cookies limit cross-origin requests",
      "Sensitive actions verify origin and referrer headers",
    ],
  },
  {
    slug: "sql-injection",
    title: "SQL Injection",
    summary: "Defending the database against malicious query manipulation.",
    points: [
      "Parameterized queries are used instead of string concatenation",
      "ORMs handle escaping automatically",
      "Database accounts follow least-privilege access",
    ],
  },
  {
    slug: "rate-limit",
    title: "Rate Limiting",
    summary: "Protecting APIs and login systems from abuse and brute force.",
    points: [
      "Repeated failed login attempts are throttled",
      "APIs enforce per-IP and per-user request limits",
      "Suspicious traffic patterns trigger temporary blocks",
    ],
  },
  {
    slug: "file-security",
    title: "File Security",
    summary: "Safely handling file uploads without exposing the system to risk.",
    points: [
      "File type and size are validated before accepting an upload",
      "Uploaded files are stored outside of directly executable paths",
      "Files are served from isolated storage, not the app server itself",
    ],
  },
  {
    slug: "api-security",
    title: "API Security",
    summary: "Hardening APIs against common attack vectors.",
    points: [
      "Every endpoint validates and sanitizes input",
      "Authentication is required on all non-public routes",
      "Error responses avoid leaking internal implementation details",
    ],
  },
];
