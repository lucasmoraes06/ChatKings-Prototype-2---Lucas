import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import {
  currentGame,
  chatMessages,
  predictionCategories,
  currentUser,
  leaderboard,
  activePrediction,
} from "../data/mockData";
import { IconTrophy } from "../components/Icons";

export default function GameChat() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("winner");
  const [pointsWagered, setPointsWagered] = useState(20);
  const [showConfirm, setShowConfirm] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleMakePrediction = () => setShowConfirm(true);
  const handleConfirmBet = () => {
    setShowConfirm(false);
    setPointsWagered(20);
  };

  return (
    <>
      <AppLayout
        title={`${currentGame.away_team} vs ${currentGame.home_team}`}
        showBack
        onBack={() => navigate(-1)}
        rightAction={
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--accent)]"
            aria-label="Trophy"
          >
            <IconTrophy className="w-5 h-5" />
          </button>
        }
      >
        <div className="flex flex-col h-[calc(100vh-7rem)]">
          {/* Group card – benchmark: "Marcus 5 members 450 pts" */}
          <div className="px-4 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
            <p className="text-[13px] font-medium">Hoops Heads</p>
            <p className="text-[11px] text-[var(--text-muted)]">4 members · 840 pts in pot</p>
          </div>

          {/* Active prediction – benchmark: "ACTIVE PREDICTION" "120 pts in pot", wager card */}
          <div className="px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-app)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-widest">
                Active prediction
              </span>
              <span className="text-[11px] font-semibold text-[var(--text-muted)]">
                {activePrediction.pot} pts in pot
              </span>
            </div>
            <div className="card p-4">
              <p className="text-sm font-medium mb-3">{activePrediction.question}</p>
              <div className="flex gap-2">
                {activePrediction.sides.map((side) => (
                  <div
                    key={side.label}
                    className={`flex-1 rounded-lg px-3 py-2 text-center border ${
                      side.isUserPick
                        ? "bg-[var(--accent-dim)] border-[var(--accent)]/40 text-[var(--accent)]"
                        : "bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                    }`}
                  >
                    <p className="text-[13px] font-semibold">{side.label}</p>
                    <p className="text-[11px] text-[var(--text-muted)]">{side.points} pts</p>
                    {side.isLeader && (
                      <span className="text-[10px] text-[var(--accent)]" aria-hidden>★</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <p className="text-[11px] text-[var(--text-muted)] text-center py-1">
              Marcus became the King!
            </p>
            {chatMessages.map((msg) => (
              <div
                key={msg.message_id}
                className={`flex ${msg.username === currentUser.username ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 border ${
                    msg.is_home === true ? "bubble-home" : msg.is_home === false ? "bubble-away" : "bg-[var(--bg-card)] border-[var(--border-subtle)]"
                  }`}
                >
                  <p className="text-[11px] font-semibold text-[var(--text-muted)]">{msg.username}</p>
                  {msg.message_type === "bet_announcement" && (
                    <p className="text-[11px] text-[var(--accent)]">{msg.points_wagered} pts wagered</p>
                  )}
                  <p className="text-sm mt-0.5">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Make prediction */}
          <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-[var(--radius)] bg-[var(--bg-app)] border border-[var(--border-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {predictionCategories.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <input
                type="number"
                min={1}
                max={currentUser.chat_points}
                value={pointsWagered}
                onChange={(e) => setPointsWagered(Number(e.target.value))}
                className="flex-1 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--bg-app)] border border-[var(--border-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              <span className="self-center text-sm text-[var(--text-muted)]">pts</span>
            </div>
            <button
              type="button"
              onClick={handleMakePrediction}
              className="w-full py-3 rounded-[var(--radius-lg)] bg-[var(--accent)] text-black font-bold text-sm hover:bg-[var(--accent-soft)] transition-colors"
            >
              Make prediction
            </button>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--bg-app)] border border-[var(--border-subtle)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              <button
                type="button"
                className="px-4 py-2.5 rounded-[var(--radius)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text)] font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </AppLayout>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 max-w-[480px] mx-auto">
          <div className="w-full card p-6 shadow-xl">
            <h3 className="text-lg font-bold mb-1">Confirm your bet</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              You’re betting <strong className="text-[var(--accent)]">{pointsWagered} points</strong> on{" "}
              <strong>{selectedCategory}</strong>. One strike used if wrong.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 rounded-[var(--radius)] border border-[var(--border)] font-medium hover:bg-[var(--bg-hover)]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmBet}
                className="flex-1 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-black font-bold hover:bg-[var(--accent-soft)]"
              >
                Place bet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
