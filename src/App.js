import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Splash from "./pages/Splash/Splash";
import Calendar from "./pages/Calendar/Calendar";
import Mystudy from "./pages/Mystudy/Mystudy";
import Settings from "./pages/Settings/Settings";

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
