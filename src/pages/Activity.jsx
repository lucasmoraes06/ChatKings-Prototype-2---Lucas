import AppLayout from "../components/AppLayout";
import {
  activityRecord,
  activityNetPoints,
  recentPredictions,
} from "../data/mockData";

export default function Activity() {
  return (
    <AppLayout title="My Activity">
      <div style={{ padding: "20px 16px 100px" }}>
        {/* Hero line */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Your run
        </p>

        {/* Two stat cards – clean, distinct */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              padding: 20,
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              borderLeft: "4px solid var(--success)",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Record
            </p>
            <p style={{ fontSize: 28, fontWeight: 800, color: "var(--success)", letterSpacing: "-0.02em", marginBottom: 4 }}>
              {activityRecord.wins}–{activityRecord.losses}
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{activityRecord.winRate}% win rate</p>
          </div>
          <div
            style={{
              padding: 20,
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Net points
            </p>
            <p style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", marginBottom: 4 }}>
              +{activityNetPoints.total}
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              <span style={{ color: "var(--success)" }}>+{activityNetPoints.won}</span>
              {" · "}
              <span style={{ color: "var(--danger)" }}>{activityNetPoints.lost}</span>
            </p>
          </div>
        </div>

        {/* Recent – feed style with colored edge */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Recent
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {recentPredictions.map((pred) => (
            <div
              key={pred.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0,
                padding: 16,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 16,
                borderLeftWidth: 4,
                borderLeftColor: pred.outcome === "won" ? "var(--success)" : "var(--danger)",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 15, color: "var(--text)", lineHeight: 1.3 }}>
                  {pred.question}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
                  {pred.league} · Picked: {pred.pick}
                </p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: pred.outcome === "won" ? "var(--success)" : "var(--danger)",
                  }}
                >
                  {pred.points > 0 ? "+" : ""}{pred.points}
                </p>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{pred.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
