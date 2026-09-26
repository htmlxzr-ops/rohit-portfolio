"use client";

import { useEffect, useState, FormEvent } from "react";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  published: boolean;
  created_at: string;
}

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [togglingId, setTogglingId] = useState<number | null>(null);

  function loadPosts() {
    setLoading(true);
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadPosts();
  }, []);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      let coverImage: string | null = null;
      let coverImageId: string | null = null;

      if (imageFile && imagePreview) {
        const uploadRes = await fetch("/api/admin/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: imagePreview, folder: "blogs" }),
        });
        const uploadData = await uploadRes.json();
        if (!uploadData.success) {
          setErrorMsg(uploadData.message || "Image upload failed.");
          setSubmitting(false);
          return;
        }
        coverImage = uploadData.url;
        coverImageId = uploadData.publicId;
      }

      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, excerpt, content, coverImage, coverImageId }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Failed to create post.");
        setSubmitting(false);
        return;
      }

      setTitle("");
      setExcerpt("");
      setContent("");
      setImageFile(null);
      setImagePreview(null);
      setShowForm(false);
      loadPosts();
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this post permanently?")) return;
    setDeletingId(id);
    try {
      await fetch("/api/admin/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  async function handleTogglePublish(id: number, current: boolean) {
    setTogglingId(id);
    try {
      await fetch("/api/admin/blogs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, published: !current }),
      });
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, published: !current } : p))
      );
    } finally {
      setTogglingId(null);
    }
  }

  return (
    <div>
      <div className="flex-between">
        <Heading as="h1" gradient>
          Blogs
        </Heading>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "New Post"}
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card mt-4 space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Excerpt (short summary)"
            className="input"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div>
            <label className="text-sm text-muted">Cover Image (optional)</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="input mt-1" />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            )}
          </div>

          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? "Publishing..." : "Publish Post"}
          </Button>

          {errorMsg && (
            <p className="text-sm" style={{ color: "#EF4444" }}>
              {errorMsg}
            </p>
          )}
        </form>
      )}

      {loading && <p className="mt-4 text-muted">Loading...</p>}

      {!loading && posts.length === 0 && (
        <p className="mt-4 text-muted">No posts yet. Create your first one above.</p>
      )}

      <div className="mt-4 space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="card" style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
                background: "rgba(255,255,255,.04)",
              }}
            >
              {post.cover_image ? (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div className="flex-center" style={{ width: "100%", height: "100%" }}>
                  <small className="text-muted">No image</small>
                </div>
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="flex-between">
                <h4>{post.title}</h4>
                <span className="badge" style={{ background: post.published ? "rgba(34,197,94,.15)" : "rgba(255,213,79,.15)" }}>
                  {post.published ? "Published" : "Draft"}
                </span>
              </div>
              <p className="mt-1 text-secondary" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {post.excerpt}
              </p>
              <div className="mt-2 flex-between">
                <small className="text-muted">
                  {new Date(post.created_at).toLocaleDateString()}
                </small>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleTogglePublish(post.id, post.published)}
                    disabled={togglingId === post.id}
                    className="text-sm text-primary"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    {togglingId === post.id ? "..." : post.published ? "Unpublish" : "Publish"}
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deletingId === post.id}
                    className="text-sm"
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#EF4444" }}
                  >
                    {deletingId === post.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
