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

---

## Suggested screenshots for the deliverable

For “3 screenshots” per prototype in your write-up, you can use:

1. **Home** — Featured league + Your leagues + Up next grid  
2. **Friends** — Invite your crew card + Pending + Your squad  
3. **My Activity** — Your run (Record + Net points cards + Recent list)

These show consistent branding (coral accent, dark theme) and clear layout.

---

## (Optional) Put this on GitHub for the team

If you want a repo so the team can clone and run it:

1. **Create a new repo on GitHub**  
   - github.com → New repository  
   - Name it e.g. `chat-kings-prototype`  
   - Don’t add a README (you already have one).

2. **From your project folder, init and push:**

   ```bash
   cd "/path/to/new project"
   git init
   git add .
   git commit -m "Chat Kings Cursor prototype - frontend only"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/chat-kings-prototype.git
   git push -u origin main
   ```

3. **Add to `.gitignore` (if not already):**  
   `node_modules`, `dist`, `.env`, `.env.local`.

4. **In your deliverable doc**, you can write:

   > To run the Chat Kings (Cursor) prototype: clone the repo, run `npm install` and `npm run dev`, then open the URL shown in the terminal. See the README for details.

---

## Design context

- Based on team wireframes and human/AI feedback.
- One of two individual prototypes (Lovable vs Cursor); this is the **Cursor** version.
- Uses consistent colors (coral accent, dark theme) and fonts (DM Sans) across all pages.
- Built for **Learnability**, **Efficiency**, **Errors**, **Satisfaction**, and **Feasibility** in the team design review.
