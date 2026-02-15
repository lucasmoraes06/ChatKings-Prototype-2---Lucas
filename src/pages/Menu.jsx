import { useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { currentUser } from "../data/mockData";
import { IconCopy, IconChevron } from "../components/Icons";

export default function Menu() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard?.writeText(currentUser.add_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { to: "/activity", label: "My Activity", desc: "Record, net points, recent predictions" },
    { to: "/rules", label: "Rules & Fair Play", desc: "Points, strikes, the King" },
    { to: "/friends", label: "Friends", desc: "Add code & friend requests" },
  ];

  return (
    <AppLayout title="Menu">
      <div className="p-4 space-y-5">
        {/* Compact status + add code in one card */}
        <div className="card overflow-hidden">
          <div className="p-4 border-b border-[var(--border-subtle)]">
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">
              Your status
            </p>
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <span className="text-xl font-bold tabular-nums">{currentUser.all_time_points}</span>
              <span className="text-[13px] text-[var(--text-muted)]">all-time points</span>
            </div>
            {currentUser.king_status && (
              <p className="text-[13px] text-[var(--accent)] mt-2">
                King in this chat – you resolve bets
              </p>
            )}
          </div>
          <div className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Your Add Code
            </p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-lg font-mono font-semibold tracking-wider text-[var(--accent)]">
                {currentUser.add_code}
              </span>
              <button
                type="button"
                onClick={copyCode}
                className="shrink-0 p-2 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                aria-label="Copy code"
              >
                <IconCopy className="w-4 h-4" />
              </button>
            </div>
            {copied && (
              <p className="text-[11px] text-[var(--success)] mt-1.5">Copied to clipboard</p>
            )}
          </div>
        </div>

        {/* Simple list – no big icons, clear hierarchy */}
        <nav>
          <p className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2 px-1">
            More
          </p>
          <ul className="space-y-1">
            {links.map(({ to, label, desc }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl hover:bg-[var(--bg-hover)] transition-colors group"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-[15px] text-[var(--text)]">{label}</p>
                    <p className="text-[13px] text-[var(--text-muted)] truncate">{desc}</p>
                  </div>
                  <IconChevron className="w-4 h-4 text-[var(--text-faint)] shrink-0 group-hover:text-[var(--text-muted)]" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </AppLayout>
  );
}
