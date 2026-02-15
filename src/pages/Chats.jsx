import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { groupchats } from "../data/mockData";

export default function Chats() {
  return (
    <AppLayout title="Chats">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
          My Groupchats
        </h2>
        <ul className="space-y-2">
          {groupchats.map((chat) => (
            <li key={chat.chat_id}>
              <Link
                to={`/game/${chat.chat_id}`}
                className="card flex items-center gap-4 p-4 hover:bg-[var(--bg-hover)] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center text-2xl flex-shrink-0">
                  🏈
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{chat.chat_name}</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {chat.team_abbrev || "Group chat"}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-black text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {chat.unread}
                  </span>
                )}
                <span className="text-[var(--text-muted)]">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}
