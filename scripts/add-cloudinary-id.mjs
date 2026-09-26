import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`ALTER TABLE gallery ADD COLUMN IF NOT EXISTS cloudinary_id TEXT`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS cover_image_id TEXT`;
  console.log("Cloudinary ID columns added successfully.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
