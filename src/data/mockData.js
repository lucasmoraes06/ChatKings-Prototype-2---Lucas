// Fresh mock data – creative names and examples for screenshot-ready pages

export const currentUser = {
  user_id: 1,
  username: "Jordan",
  add_code: "48291035",
  profile_image_url: null,
  all_time_points: 1240,
  chat_points: 420,
  strike_count: 1,
  max_strikes: 3,
  king_status: true,
};

export const groupchats = [
  { chat_id: 1, chat_name: "Sunday Funday", admin_id: 1, team_abbrev: "NFL", unread: 2 },
  { chat_id: 2, chat_name: "West Coast Crew", admin_id: 2, team_abbrev: "NBA", unread: 0 },
  { chat_id: 3, chat_name: "Office League", admin_id: 1, team_abbrev: null, unread: 5 },
];

export const leagues = [
  { chat_id: 1, initial: "S", name: "Sunday Funday", members: 6, points: 920 },
  { chat_id: 2, initial: "W", name: "West Coast Crew", members: 4, points: 640 },
  { chat_id: 3, initial: "O", name: "Office League", members: 12, points: 1100 },
];

export const upcomingGames = [
  { game_id: 1, league: "NFL", leagueHex: "#013369", home: "Dolphins", homeAbbrev: "MIA", away: "Bengals", awayAbbrev: "CIN", time: "Sun 1 PM", homeHex: "#008e97", awayHex: "#fb4f14" },
  { game_id: 2, league: "NFL", leagueHex: "#013369", home: "49ers", homeAbbrev: "SF", away: "Seahawks", awayAbbrev: "SEA", time: "Sun 4:25 PM", homeHex: "#aa0000", awayHex: "#002244" },
  { game_id: 3, league: "NBA", leagueHex: "#c9082a", home: "Heat", homeAbbrev: "MIA", away: "Celtics", awayAbbrev: "BOS", time: "Mon 7:30 PM", homeHex: "#98002e", awayHex: "#007a33" },
  { game_id: 4, league: "NBA", leagueHex: "#c9082a", home: "Nuggets", homeAbbrev: "DEN", away: "Suns", awayAbbrev: "PHX", time: "Tue 9 PM", homeHex: "#0e2240", awayHex: "#1d1160" },
  { game_id: 5, league: "NFL", leagueHex: "#013369", home: "Cowboys", homeAbbrev: "DAL", away: "Eagles", awayAbbrev: "PHI", time: "Thu 8:15 PM", homeHex: "#002244", awayHex: "#004c54" },
  { game_id: 6, league: "NBA", leagueHex: "#c9082a", home: "Lakers", homeAbbrev: "LAL", away: "Warriors", awayAbbrev: "GSW", time: "Fri 10 PM", homeHex: "#552583", awayHex: "#1d428a" },
];

export const activityRecord = { wins: 8, losses: 3, winRate: 73 };
export const activityNetPoints = { total: 340, won: 520, lost: -180 };
export const recentPredictions = [
  { id: 1, question: "Dolphins vs Bills — Who wins?", points: 95, date: "Feb 12", outcome: "won", league: "Sunday Funday", pick: "Dolphins" },
  { id: 2, question: "Celtics vs Cavaliers — Spread", points: -40, date: "Feb 11", outcome: "lost", league: "West Coast Crew", pick: "Cavs +4" },
  { id: 3, question: "49ers vs Chiefs ML?", points: 70, date: "Feb 10", outcome: "won", league: "Sunday Funday", pick: "49ers" },
  { id: 4, question: "Lakers vs Nuggets — Over/Under 225", points: 55, date: "Feb 8", outcome: "won", league: "Office League", pick: "Over" },
];

export const friends = [
  { user_id: 2, username: "Jake", points: 1080, streak: "4W", rank: 1 },
  { user_id: 3, username: "Marcus", points: 920, streak: "2W", rank: 2 },
  { user_id: 4, username: "Sam", points: 780, streak: null, rank: 3 },
  { user_id: 5, username: "Alex", points: 650, streak: "1L", rank: 4 },
  { user_id: 6, username: "Riley", points: 420, streak: "3W", rank: 5 },
];

export const friendRequests = [
  { request_id: 1, username: "Casey", add_code: "7712345" },
  { request_id: 2, username: "Morgan", add_code: "8890123" },
];

export const menuItems = [
  { id: "activity", label: "My Activity", desc: "Record, net points, recent predictions" },
  { id: "rules", label: "Rules & Fair Play", desc: "Points, strikes, the King" },
  { id: "friends", label: "Friends", desc: "Add code & squad" },
];

export const activePrediction = {
  question: "Who wins Dolphins vs Bengals?",
  pot: 120,
  sides: [
    { label: "Dolphins", points: 80, isUserPick: true },
    { label: "Bengals", points: 40, isUserPick: false, isLeader: true },
  ],
};

export const currentGame = {
  game_id: 1,
  home_team: "Dolphins",
  away_team: "Bengals",
  league: "NFL",
  home_score: 24,
  away_score: 21,
  status: "in progress",
  watch_info: "CBS · Sunday 1:00 PM ET",
};

export const chatMessages = [
  { message_id: 1, user_id: 2, username: "Jake", message_type: "bet_announcement", text: "Dolphins by 7. Let's go.", related_bet_id: 101, is_home: true, points_wagered: 30 },
  { message_id: 2, user_id: 1, username: "Jordan", message_type: "text", text: "I'm in on that.", is_home: null },
  { message_id: 3, user_id: 3, username: "Marcus", message_type: "text", text: "Bengals defense is underrated.", is_home: false },
];

export const leaderboard = [
  { rank: 1, username: "Jake", points: 1080 },
  { rank: 2, username: "Jordan", points: 420 },
  { rank: 3, username: "Marcus", points: 380 },
  { rank: 4, username: "Sam", points: 290 },
];

export const predictionCategories = [
  { id: "winner", label: "Winner" },
  { id: "score", label: "Score" },
  { id: "spread", label: "Spread" },
  { id: "player_performance", label: "Player (Premium)" },
];

export const followedEvents = [];