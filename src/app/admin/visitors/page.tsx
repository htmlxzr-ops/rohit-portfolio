import Heading from "@/components/common/Heading";
import { sql } from "@/lib/db";

export default async function AdminVisitorsPage() {
  const [totalResult, topPages, recent] = await Promise.all([
    sql`SELECT COUNT(*) FROM visitors`,
    sql`SELECT path, COUNT(*) as visits FROM visitors GROUP BY path ORDER BY visits DESC LIMIT 10`,
    sql`SELECT path, created_at FROM visitors ORDER BY created_at DESC LIMIT 20`,
  ]);

  return (
    <div>
      <Heading as="h1" gradient>
        Visitors
      </Heading>

      <div className="card mt-4">
        <p className="text-primary" style={{ fontSize: "2rem", fontWeight: 700 }}>
          {totalResult[0].count}
        </p>
        <small className="text-muted">Total Page Views</small>
      </div>

      <div className="mt-4 grid-2">
        <div>
          <h4>Top Pages</h4>
          <div className="mt-2 space-y-2">
            {topPages.map((row) => (
              <div key={row.path} className="card flex-between">
                <span className="text-secondary">{row.path}</span>
                <span className="badge">{row.visits}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4>Recent Activity</h4>
          <div className="mt-2 space-y-2">
            {recent.map((row, i) => (
              <div key={i} className="card">
                <span className="text-secondary">{row.path}</span>
                <br />
                <small className="text-muted">
                  {new Date(row.created_at).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
