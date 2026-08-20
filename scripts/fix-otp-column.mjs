import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`ALTER TABLE users ALTER COLUMN otp_expires TYPE BIGINT USING NULL`;
  console.log("otp_expires column converted to BIGINT.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
