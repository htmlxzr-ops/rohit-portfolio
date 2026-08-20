"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/common/Heading";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data.messages || []))
      .finally(() => setLoading(false));
  }, []);

  async function markAsRead(id: number) {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  }

  return (
    <div>
      <Heading as="h1" gradient>
        Messages
      </Heading>

      {loading && <p className="mt-4 text-muted">Loading...</p>}

      {!loading && messages.length === 0 && (
        <p className="mt-4 text-muted">No messages yet.</p>
      )}

      <div className="mt-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="card" style={{ opacity: msg.read ? 0.6 : 1 }}>
            <div className="flex-between">
              <div>
                <p style={{ fontWeight: 600 }}>{msg.name}</p>
                <small className="text-muted">{msg.email}</small>
              </div>
              {!msg.read && <span className="badge">New</span>}
            </div>
            <p className="mt-2 text-secondary">{msg.message}</p>
            <div className="mt-2 flex-between">
              <small className="text-muted">
                {new Date(msg.created_at).toLocaleString()}
              </small>
              {!msg.read && (
                <button
                  onClick={() => markAsRead(msg.id)}
                  className="text-sm text-primary"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
