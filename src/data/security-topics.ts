export interface SecurityTopic {
  slug: string;
  title: string;
  intro: string;
  whyItMatters: string;
  howIApplyIt: string;
  practices: string[];
}

export const securityTopics: SecurityTopic[] = [
  {
    slug: "authentication",
    title: "Authentication",
    intro:
      "Authentication answers one question: is this really the person they claim to be? It's the first gate every request has to pass through before anything else matters.",
    whyItMatters:
      "Get authentication wrong and everything built on top of it becomes irrelevant — authorization, encryption, rate limits, none of it protects a system where anyone can claim to be anyone.",
    howIApplyIt:
      "On this site, passwords are hashed with bcrypt before they ever touch the database, so even a full database leak wouldn't expose anyone's actual password. A successful login issues a signed JWT stored in an httpOnly cookie, invisible to client-side JavaScript, so it can't be stolen through a script injected into the page. Accounts also can't log in until the email tied to them is verified through a one-time code, which closes off fake or mistyped email signups before they ever reach the rest of the system.",
    practices: [
      "Passwords are always hashed, never stored in plain text",
      "Sessions use signed tokens instead of server-side stored state",
      "Email verification is required before an account can log in",
      "Login attempts are rate-limited to slow brute-force guessing",
    ],
  },
  {
    slug: "authorization",
    title: "Authorization",
    intro:
      "Authorization is a separate question from authentication — not 'who are you,' but 'what are you allowed to do now that I know who you are.'",
    whyItMatters:
      "A system can correctly identify a user and still fail badly if it doesn't check what that specific user is permitted to do — being logged in doesn't automatically mean being an admin.",
    howIApplyIt:
      "Every account on this site carries a role, either USER or ADMIN, decided once at registration based on a fixed admin email. The entire admin section sits behind a server-side layout check that reads the current session and redirects anyone who isn't an admin before a single admin page ever renders. Every admin API route repeats that same check independently, so even a direct request to an admin endpoint, bypassing the UI entirely, is rejected if the role doesn't match.",
    practices: [
      "Role checks happen on the server, never trusted from the client alone",
      "Admin routes are blocked at the layout level, not just hidden in the UI",
      "Every sensitive API route re-checks permission independently",
      "Regular users and admins share one login flow, split only by role",
    ],
  },
  {
    slug: "encryption",
    title: "Encryption",
    intro:
      "Encryption makes data unreadable to anyone without the right key — whether that data is sitting in a database or moving across a network.",
    whyItMatters:
      "Data that isn't encrypted is only as safe as every system it ever passes through — one compromised link in that chain and everything is exposed.",
    howIApplyIt:
      "This site's traffic runs over HTTPS, so anything sent between a visitor's browser and the server is encrypted in transit by default. Passwords are hashed rather than encrypted, deliberately — hashing is one-way, so there's no key that could ever decrypt them back, even for me. In Devdesh, encryption plays a much bigger role directly in the product: global, group, and one-to-one chat are all end-to-end encrypted, along with the WebRTC audio and video calls running alongside them, so conversations stay unreadable to anyone but the people actually in them.",
    practices: [
      "All traffic is served over HTTPS",
      "Passwords are hashed one-way, never reversibly encrypted",
      "Devdesh applies end-to-end encryption across every chat mode and call",
      "Sensitive tokens are never exposed to client-side JavaScript",
    ],
  },
  {
    slug: "jwt",
    title: "JWT",
    intro:
      "A JSON Web Token is a compact, signed piece of data that lets a server verify who a request is from without looking anything up on every single request.",
    whyItMatters:
      "Tokens are powerful because they're stateless, but that same property means a leaked or poorly designed token can be just as dangerous as a leaked password — the server has to trust it.",
    howIApplyIt:
      "On login, this site signs a JWT containing the user's id, email, and role, using a secret key that never leaves the server. That token lives in an httpOnly cookie rather than local storage, specifically so no script running in the browser — including a malicious one injected through XSS — can read or steal it. Tokens expire after seven days, limiting how long a leaked token would stay useful, and the payload deliberately contains nothing more sensitive than what's needed to identify the user.",
    practices: [
      "Tokens are signed with a secret key never exposed to the client",
      "Stored in httpOnly cookies, not local storage or JS-accessible storage",
      "Given a fixed expiry rather than living forever",
      "Payloads contain only what's needed to identify a user, nothing sensitive",
    ],
  },
  {
    slug: "xss",
    title: "XSS (Cross-Site Scripting)",
    intro:
      "Cross-site scripting happens when an attacker gets their own script to run inside someone else's browser, disguised as part of a trusted page.",
    whyItMatters:
      "A successful XSS attack can steal session cookies, submit forms as the victim, or quietly read anything visible on the page — all while looking like normal site behavior.",
    howIApplyIt:
      "This site is built in React, which escapes text content by default — anything a user types, whether their name in the contact form or a blog title in the admin panel, renders as plain text, never as interpreted HTML or JavaScript. I've deliberately avoided dangerouslySetInnerHTML anywhere user input could reach it; the one place raw HTML is injected is the JSON-LD structured data block in the layout, which contains only fixed values I wrote myself, never anything a visitor submitted.",
    practices: [
      "User input is always rendered as text, never as raw HTML",
      "dangerouslySetInnerHTML is avoided anywhere user input could reach it",
      "Session tokens live in httpOnly cookies, invisible to any script that got through",
    ],
  },
  {
    slug: "csrf",
    title: "CSRF (Cross-Site Request Forgery)",
    intro:
      "CSRF tricks a logged-in user's browser into sending a request they never intended, relying on cookies the browser attaches automatically.",
    whyItMatters:
      "Without protection, a malicious page a user simply visits could quietly trigger actions on a completely different site — like a logout or a settings change — just because the browser still holds a valid session cookie for it.",
    howIApplyIt:
      "The authentication cookie on this site is set with SameSite=Lax, which stops the browser from attaching it to most cross-site requests in the first place — a request forged from another site simply won't carry the cookie it needs to look logged in. Combined with the cookie being httpOnly and requiring HTTPS in production, the surface area for forging an authenticated request here stays deliberately small.",
    practices: [
      "Authentication cookies use SameSite=Lax to limit cross-site use",
      "Cookies are marked Secure in production, requiring HTTPS",
      "State-changing actions require an authenticated session, not a guessable URL",
    ],
  },
  {
    slug: "sql-injection",
    title: "SQL Injection",
    intro:
      "SQL injection happens when untrusted input gets concatenated directly into a database query, letting an attacker rewrite what the query actually does.",
    whyItMatters:
      "A single unescaped input field can be enough to read, modify, or delete data far beyond what that field was ever supposed to touch.",
    howIApplyIt:
      "Every database query on this site goes through tagged template queries against Neon's Postgres driver, where values are automatically parameterized rather than pasted into the query string. I never build a query by concatenating a variable into raw SQL — not for login, not for the admin panel, not for the contact form — so user input is always treated as data, never as part of the command itself.",
    practices: [
      "All queries use parameterized, tagged-template SQL, never string concatenation",
      "User input is always treated as data, never executable query syntax",
      "Database errors are logged internally, not exposed in API responses",
    ],
  },
  {
    slug: "rate-limit",
    title: "Rate Limiting",
    intro:
      "Rate limiting caps how many times an action can happen in a given window — often the simplest, most effective defense against automated abuse.",
    whyItMatters:
      "Without it, a login form becomes a password-guessing machine, an OTP field becomes brute-forceable within minutes, and a contact form becomes a spam pipe — without a single other vulnerability needed.",
    howIApplyIt:
      "I built a small Postgres-backed rate limiter for this site rather than reaching for a third-party service, tracking attempts per action and per email in a dedicated table with a rolling time window. It's applied to login (5 attempts per 15 minutes), registration and OTP verification (5 attempts per 15 minutes each), OTP resends (capped at once per minute, on top of that same 15-minute limit), and the contact form (3 messages per 10 minutes) — each with its own key so a limit on one action never accidentally blocks an unrelated one.",
    practices: [
      "Login, registration, and OTP verification are capped per email per window",
      "OTP resends have an added one-minute cooldown to stop rapid-fire requests",
      "Contact form submissions are limited to slow down spam",
      "Rate limit state is checked and updated atomically per request",
    ],
  },
  {
    slug: "file-security",
    title: "File Security",
    intro:
      "File security is about making sure that letting people upload something doesn't become a way to compromise the server or the data on it.",
    whyItMatters:
      "Unrestricted uploads are one of the most common ways an attacker gets a foothold — either by uploading something executable, or simply by exhausting storage and bandwidth.",
    howIApplyIt:
      "Image uploads on this site — for blog covers and the gallery — are only accepted through admin-only API routes that check the current user's role on the server before accepting anything. Uploaded files never touch this app's own server storage at all; they're sent straight to Cloudinary, which handles storage and serving from infrastructure completely separate from the application server, so even a malicious file could never be executed as part of this site's backend.",
    practices: [
      "Uploads are only accepted through authenticated, admin-only endpoints",
      "Files are stored on isolated third-party infrastructure, never the app server",
      "Every upload request re-validates the user's role server-side, not just in the UI",
    ],
  },
  {
    slug: "api-security",
    title: "API Security",
    intro:
      "API security is where all the other pieces come together — an endpoint is only as safe as its weakest individual check.",
    whyItMatters:
      "An API that looks fine when called from the site's own UI can still be wide open if it doesn't independently verify who's calling it, since any endpoint can be called directly, without the UI, by anyone who finds it.",
    howIApplyIt:
      "Every admin API route on this site — for blogs, gallery, messages, and uploads — checks the current session and role before doing anything, regardless of what the frontend does or doesn't show. Public-facing routes like registration, login, and contact all validate their input before touching the database, and error responses are kept generic on purpose, so a failed request tells a user something went wrong without revealing internal details an attacker could use.",
    practices: [
      "Every route re-validates authentication and role, independent of the frontend",
      "Input is validated before it reaches the database or business logic",
      "Error messages avoid leaking internal implementation details",
      "Rate limiting is layered on top of authentication checks, not a substitute for them",
    ],
  },
];
