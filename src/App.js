import { Routes, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";
import Callback from "./pages/Callback/Callback";
import Splash from "./pages/Splash/Splash";
import Calendar from "./pages/Calendar/Calendar";
import Mystudies from "./pages/Mystudies/Mystudies";
import CreateMystudy from "./pages/Mystudies/CreateMystudy";
import EditMystudy from "./pages/Mystudies/EditMystudy";
import Settings from "./pages/Settings/Settings";
import DetailMystudy from "./pages/Mystudies/DetailMystudy";
import Notfound from "./pages/Notfound/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/callback" element={<Callback />} />
      <Route path="/" element={<Splash />} />
      <Route path="*" element={<Notfound />} />
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mystudies" element={<Mystudies />} />
        <Route path="/mystudies/create" element={<CreateMystudy />} />
        <Route path="/mystudies/:id" element={<DetailMystudy />} />
        <Route path="/mystudies/edit/:id" element={<EditMystudy />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route elemnt={<PrivateRoute authentication={false} />}></Route>
    </Routes>
  );
}

export default App;
