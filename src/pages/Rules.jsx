import AppLayout from "../components/AppLayout";
import { IconPoints, IconCrownOutline } from "../components/Icons";

const POINTS_RULES = [
  "Points are the only currency — no real money involved.",
  "Everyone starts each week with a fresh point total.",
  "Points are wagered on predictions created by the King.",
  "Winners split the pot proportionally to their wagers.",
];

const KING_RULES = [
  "The King is the member with the most points in the group.",
  "Only the King can create new predictions.",
  "The King must place their own wager before publishing.",
  "If someone overtakes the King in points, the crown transfers.",
];

export default function Rules() {
  return (
    <AppLayout title="Rules & Fair Play">
      <div className="p-4 pb-8">
        <h1 className="text-xl font-bold text-[var(--text)] mb-1">
          RULES & FAIR PLAY
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-6">
          Points only — no real money. Just bragging rights and the crown.
        </p>

        {/* Points System card – green header + icon */}
        <div className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden mb-4">
          <div className="flex items-center gap-2 px-4 py-3 bg-[var(--success)]/15 border-b border-[var(--border-subtle)]">
            <IconPoints className="w-4 h-4 text-[var(--success)] shrink-0" />
            <h2 className="text-sm font-bold text-[var(--success)] uppercase tracking-wider">
              Points system
            </h2>
          </div>
          <ol className="px-4 py-4 space-y-3">
            {POINTS_RULES.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm text-[var(--text)] leading-relaxed">
                <span className="text-[var(--text-muted)] font-semibold shrink-0">{i + 1}.</span>
                {rule}
              </li>
            ))}
          </ol>
        </div>

        {/* The King card – gold header + crown icon */}
        <div className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-[var(--accent-dim)] border-b border-[var(--border-subtle)]">
            <IconCrownOutline className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <h2 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">
              The King
            </h2>
          </div>
          <ol className="px-4 py-4 space-y-3">
            {KING_RULES.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm text-[var(--text)] leading-relaxed">
                <span className="text-[var(--text-muted)] font-semibold shrink-0">{i + 1}.</span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </AppLayout>
  );
}
