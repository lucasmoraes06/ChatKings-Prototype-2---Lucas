import { Link, useLocation } from "react-router-dom";
import { currentUser } from "../data/mockData";
import { IconHome, IconChat, IconFriends, IconMenu } from "./Icons";

export default function AppLayout({ children, title, showBack, onBack, rightAction }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="app-container bg-[var(--bg-app)]">
      <header className="sticky top-0 z-20 border-b border-[var(--border-subtle)] bg-[var(--bg-app)]/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            {showBack ? (
              <button
                type="button"
                onClick={onBack}
                className="flex-shrink-0 p-2 -ml-1 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)]"
                aria-label="Back"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            ) : (
              <span className="font-semibold text-[15px] tracking-tight text-[var(--text)]">Chat Kings</span>
            )}
            {title && (
              <h1 className="text-[15px] font-semibold truncate text-[var(--text)]">
                {title}
              </h1>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="strike-pill">
              {currentUser.strike_count}/{currentUser.max_strikes} strike
            </span>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--accent-dim)]">
              <span className="text-[13px] font-bold text-[var(--accent)] tabular-nums">{currentUser.chat_points}</span>
              <span className="text-[11px] text-[var(--text-muted)]">pts</span>
            </div>
            {rightAction ?? null}
          </div>
        </div>
      </header>

      <main className="min-h-[60vh]">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto border-t border-[var(--border-subtle)] bg-[var(--bg-card)] flex justify-around items-center h-[72px] safe-area-pb">
        <NavLink to="/" icon={<IconHome />} label="Home" active={isActive("/")} />
        <NavLink to="/chats" icon={<IconChat />} label="Chats" active={location.pathname.startsWith("/game") || isActive("/chats")} />
        <NavLink to="/friends" icon={<IconFriends />} label="Friends" active={isActive("/friends")} />
        <NavLink to="/menu" icon={<IconMenu />} label="Menu" active={isActive("/menu")} />
      </nav>
    </div>
  );
}

function NavLink({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center gap-1 py-2 px-5 rounded-xl transition-colors min-w-[64px] ${
        active ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
      }`}
    >
      <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 shrink-0">
        {icon}
      </span>
      <span className="text-[11px] font-medium">{label}</span>
    </Link>
  );
}
