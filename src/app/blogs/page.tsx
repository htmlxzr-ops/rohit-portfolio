import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { sql } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const posts = await sql`
    SELECT id, title, slug, excerpt, cover_image, created_at
    FROM posts WHERE published = TRUE ORDER BY created_at DESC
  `;

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Blog
      </Heading>
      <p className="mt-2 max-w-xl">
        Thoughts on development, security, and building Devdesh.
      </p>

      {posts.length === 0 ? (
        <p className="mt-4 text-muted">
          No posts yet — new writing is coming soon.
        </p>
      ) : (
        <div className="mt-4 grid-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="card hover-lift">
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="rounded mb-2"
                  style={{ width: "100%", height: "160px", objectFit: "cover" }}
                />
              )}
              <h4>{post.title}</h4>
              <p className="mt-1 text-secondary">{post.excerpt}</p>
              <small className="text-muted">
                {new Date(post.created_at).toLocaleDateString()}
              </small>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
