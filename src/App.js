import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home";
import Splash from "./pages/splash/splash";
import Calendar from "./pages/calendar/calendar";
import Mystudy from "./pages/mystudy/mystudy";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/mystudy" element={<Mystudy />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
