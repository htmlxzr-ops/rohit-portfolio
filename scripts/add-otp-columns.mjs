import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT FALSE`;
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS otp_code TEXT`;
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS otp_expires TIMESTAMP`;
  console.log("OTP columns added successfully.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
