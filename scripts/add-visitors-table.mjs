import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      path TEXT NOT NULL,
      user_agent TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;
  console.log("Visitors table created successfully.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
