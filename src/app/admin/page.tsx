import { sql } from "@/lib/db";
import Heading from "@/components/common/Heading";

export default async function AdminDashboard() {
  const [userCount, postCount, messageCount, unreadCount] = await Promise.all([
    sql`SELECT COUNT(*) FROM users WHERE verified = TRUE`,
    sql`SELECT COUNT(*) FROM posts`,
    sql`SELECT COUNT(*) FROM messages`,
    sql`SELECT COUNT(*) FROM messages WHERE read = FALSE`,
  ]);

  const stats = [
    { label: "Verified Users", value: userCount[0].count },
    { label: "Published Posts", value: postCount[0].count },
    { label: "Total Messages", value: messageCount[0].count },
    { label: "Unread Messages", value: unreadCount[0].count },
  ];

  return (
    <div>
      <Heading as="h1" gradient>
        Admin Dashboard
      </Heading>
      <p className="mt-2 text-secondary">
        Overview of your portfolio's activity.
      </p>

      <div className="mt-4 grid-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <p className="text-primary" style={{ fontSize: "2rem", fontWeight: 700 }}>
              {stat.value}
            </p>
            <small className="text-muted">{stat.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
