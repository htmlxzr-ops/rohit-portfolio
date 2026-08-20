import { notFound } from "next/navigation";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rows = await sql`SELECT * FROM posts WHERE slug = ${slug} AND published = TRUE`;
  const post = rows[0];

  if (!post) notFound();

  return (
    <Section className="py-section">
      {post.cover_image && (
        <img
          src={post.cover_image}
          alt={post.title}
          className="rounded mb-3"
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      )}
      <Heading as="h1" gradient>
        {post.title}
      </Heading>
      <small className="text-muted">
        {new Date(post.created_at).toLocaleDateString()}
      </small>
      <p className="mt-3 max-w-2xl" style={{ whiteSpace: "pre-wrap" }}>
        {post.content}
      </p>
    </Section>
  );
}
