import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { leagues, upcomingGames } from "../data/mockData";

const defaultLeague = leagues[0];

export default function Home() {
  return (
    <AppLayout>
      <div style={{ paddingBottom: 24 }}>
        {/* Featured league – one clear row */}
        <Link
          to={`/game/${defaultLeague.chat_id}`}
          style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr auto auto",
            alignItems: "center",
            gap: 16,
            padding: "20px 16px",
            background: "var(--bg-elevated)",
            borderBottom: "1px solid var(--border-subtle)",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "var(--accent-dim)",
              border: "1px solid rgba(249,115,22,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
              color: "var(--accent)",
            }}
          >
            {defaultLeague.initial}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, color: "var(--text)", fontSize: 16 }}>{defaultLeague.name}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
              {defaultLeague.members} members
            </div>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: "var(--accent)", whiteSpace: "nowrap" }}>
            {defaultLeague.points} pts
          </span>
          <span style={{ fontSize: 20, color: "var(--text-faint)", lineHeight: 1 }} aria-hidden>
            ›
          </span>
        </Link>

        <div style={{ padding: "24px 16px" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Your leagues
          </p>
          <div style={{ display: "flex", gap: 10, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
            {leagues.slice(1).map((league) => (
              <Link
                key={league.chat_id}
                to={`/game/${league.chat_id}`}
                style={{
                  flexShrink: 0,
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{league.name}</span>
                <span style={{ fontSize: 12, color: "var(--accent)", marginLeft: 8, fontWeight: 600 }}>{league.points} pts</span>
              </Link>
            ))}
          </div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Up next
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {upcomingGames.map((game) => (
              <Link
                key={game.game_id}
                to="/game/4"
                style={{
                  display: "block",
                  padding: 14,
                  borderRadius: 16,
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 8px",
                      borderRadius: 6,
                      background: game.leagueHex,
                      color: "#fff",
                    }}
                  >
                    {game.league}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>{game.time}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        width: 30,
                        flexShrink: 0,
                        borderRadius: 6,
                        padding: "3px 4px",
                        fontSize: 10,
                        fontWeight: 700,
                        background: game.awayHex,
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {game.awayAbbrev}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--text)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {game.away}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        width: 30,
                        flexShrink: 0,
                        borderRadius: 6,
                        padding: "3px 4px",
                        fontSize: 10,
                        fontWeight: 700,
                        background: game.homeHex,
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {game.homeAbbrev}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--text)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {game.home}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
