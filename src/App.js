import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Splash from "./pages/Splash/Splash";
import Calendar from "./pages/Calendar/Calendar";
import Mystudies from "./pages/Mystudies/Mystudies";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/mystudies" element={<Mystudies />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
