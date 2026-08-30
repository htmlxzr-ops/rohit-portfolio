import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS rate_limits (
      id SERIAL PRIMARY KEY,
      rate_key TEXT NOT NULL,
      attempts INTEGER NOT NULL DEFAULT 1,
      window_start BIGINT NOT NULL,
      UNIQUE(rate_key)
    )
  `;

  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS last_otp_sent_at BIGINT`;

  console.log("Rate limit table and column created successfully.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
