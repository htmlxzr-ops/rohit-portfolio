import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS gallery (
      id SERIAL PRIMARY KEY,
      image_url TEXT NOT NULL,
      caption TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;
  console.log("Gallery table created successfully.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
