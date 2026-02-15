# Chat Kings — Interactive UI Prototype

**Chat Kings** is an interactive frontend prototype for a sports prediction and group chat app. It was built in **Cursor** (AI-assisted) from team wireframes and reviewer feedback, for use in the **Team Design Review** milestone. No backend — frontend only, with mock data.

---

## How to open and test the prototype

### 1. Get the code

- **If you have a GitHub clone:**  
  `git clone <your-repo-url>`  
  then `cd` into the project folder.

- **If you’re working from a zip or local folder:**  
  `cd` into the project folder (e.g. `cd "new project"`).

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

The terminal will show a local URL, e.g. **http://localhost:5173** (or 5174, 5175, etc. if that port is in use).

### 4. Open in the browser

- Open the URL from step 3 in Chrome, Safari, or Firefox.
- For the best “app” feel, either:
  - **Resize the window** to about phone width (~390px), or  
  - Use **DevTools → Toggle device toolbar** (e.g. iPhone 14) and refresh.

### 5. What to click (no backend)

- **Home** — Featured league (Sunday Funday), Your leagues strip, Up next game grid. Tap a league or game card to go to the game/chat view.
- **Chats** — List of groupchats; tap one to open the prediction/chat screen.
- **Friends** — Invite code (copy), “Friend’s code” input + Send request, Pending (Accept/Decline), Your squad list with points and streaks.
- **Menu** — Your status, Add Code, links to **My Activity**, **Rules & Fair Play**, and **Friends**.
- **My Activity** (from Menu) — Record (e.g. 8–3), Net points (+340), Recent predictions list.
- **Rules & Fair Play** (from Menu) — Points system and The King rules in card layout.
- **Game/Chat** (from Home or Chats) — Scores, active prediction, chat messages, “Make prediction” and confirmation modal. All data is mock; nothing is saved.

Everything is interactive in the browser; no API or database is required.

---

## Tech stack

- **React 19** + **Vite 7**
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- Mock data in `src/data/mockData.js` (users, leagues, games, friends, predictions, etc.)
