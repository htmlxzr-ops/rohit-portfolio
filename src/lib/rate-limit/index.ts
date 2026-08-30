import { sql } from "@/lib/db";

interface RateLimitOptions {
  key: string;
  maxAttempts: number;
  windowMs: number;
}

interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds?: number;
}

export async function checkRateLimit({
  key,
  maxAttempts,
  windowMs,
}: RateLimitOptions): Promise<RateLimitResult> {
  const now = Date.now();

  const rows = await sql`SELECT attempts, window_start FROM rate_limits WHERE rate_key = ${key}`;
  const existing = rows[0];

  if (!existing) {
    await sql`
      INSERT INTO rate_limits (rate_key, attempts, window_start)
      VALUES (${key}, 1, ${now})
    `;
    return { allowed: true };
  }

  const windowStart = Number(existing.window_start);
  const attempts = existing.attempts;
  const windowExpired = now - windowStart > windowMs;

  if (windowExpired) {
    await sql`
      UPDATE rate_limits SET attempts = 1, window_start = ${now} WHERE rate_key = ${key}
    `;
    return { allowed: true };
  }

  if (attempts >= maxAttempts) {
    const retryAfterSeconds = Math.ceil((windowMs - (now - windowStart)) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  await sql`
    UPDATE rate_limits SET attempts = attempts + 1 WHERE rate_key = ${key}
  `;
  return { allowed: true };
}
