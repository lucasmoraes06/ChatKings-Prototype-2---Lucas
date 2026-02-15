import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import GameChat from "./pages/GameChat";
import Menu from "./pages/Menu";
import Friends from "./pages/Friends";
import Activity from "./pages/Activity";
import Rules from "./pages/Rules";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/game/:chatId" element={<GameChat />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}
