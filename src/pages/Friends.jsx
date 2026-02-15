import { useState } from "react";
import AppLayout from "../components/AppLayout";
import { currentUser, friends, friendRequests } from "../data/mockData";
import { IconCopy } from "../components/Icons";

const AVATAR_COLORS = ["#f97316", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];

export default function Friends() {
  const [addCode, setAddCode] = useState("");
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard?.writeText(currentUser.add_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AppLayout title="Friends">
      <div style={{ padding: "20px 16px 100px" }}>
        {/* Hero: Invite your crew */}
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
          Invite your crew
        </p>

        {/* Invite code card – standout, shareable */}
        <div
          style={{
            background: "linear-gradient(145deg, var(--bg-elevated) 0%, var(--bg-card) 100%)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 24,
            marginBottom: 28,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 8,
              letterSpacing: "0.04em",
            }}
          >
            Your invite code
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                fontFamily: "ui-monospace, monospace",
                letterSpacing: "0.25em",
                color: "var(--accent)",
              }}
            >
              {currentUser.add_code}
            </span>
            <button
              type="button"
              onClick={copyCode}
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "var(--accent-dim)",
                border: "none",
                color: "var(--accent)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Copy code"
            >
              <IconCopy className="w-5 h-5" />
            </button>
          </div>
          {copied && (
            <p style={{ fontSize: 12, color: "var(--success)", marginBottom: 12 }}>Copied to clipboard</p>
          )}
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="text"
              placeholder="Friend's code"
              value={addCode}
              onChange={(e) => setAddCode(e.target.value)}
              style={{
                flex: 1,
                height: 44,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 12,
                background: "var(--bg-app)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text)",
                fontSize: 15,
                outline: "none",
              }}
            />
            <button
              type="button"
              style={{
                height: 44,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 12,
                background: "var(--accent)",
                border: "none",
                color: "#000",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Send request
            </button>
          </div>
        </div>

        {/* Pending requests */}
        {friendRequests.length > 0 && (
          <>
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
              Pending
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {friendRequests.map((req, idx) => (
                <div
                  key={req.request_id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: 16,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: AVATAR_COLORS[idx % AVATAR_COLORS.length],
                        opacity: 0.9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      {req.username.slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: 16, color: "var(--text)" }}>{req.username}</p>
                      <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Wants to join your squad</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      type="button"
                      style={{
                        padding: "10px 16px",
                        borderRadius: 10,
                        background: "transparent",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Decline
                    </button>
                    <button
                      type="button"
                      style={{
                        padding: "10px 16px",
                        borderRadius: 10,
                        background: "var(--success)",
                        border: "none",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Squad */}
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
          Your squad
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {friends.map((f, idx) => (
            <div
              key={f.user_id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: 16,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 16,
              }}
            >
              <span
                style={{
                  width: 28,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-faint)",
                  textAlign: "center",
                }}
              >
                #{f.rank}
              </span>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: AVATAR_COLORS[idx % AVATAR_COLORS.length],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {f.username.slice(0, 1).toUpperCase()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 16, color: "var(--text)" }}>{f.username}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>{f.points} pts</span>
                  {f.streak && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: 6,
                        background: f.streak.startsWith("W") ? "var(--success-dim)" : "var(--danger-dim)",
                        color: f.streak.startsWith("W") ? "var(--success)" : "var(--danger)",
                      }}
                    >
                      {f.streak}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
