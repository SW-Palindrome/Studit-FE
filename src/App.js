import { Routes, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";
import Splash from "./pages/Splash/Splash";
import Calendar from "./pages/Calendar/Calendar";
import Mystudies from "./pages/Mystudies/Mystudies";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/calendar" element={<Calendar />} />
      </Route>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/mystudies" element={<Mystudies />} />
      </Route>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
