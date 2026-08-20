import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  const posts = await sql`SELECT id, title, slug, published FROM posts ORDER BY created_at DESC`;
  console.log(JSON.stringify(posts, null, 2));
}

main();
