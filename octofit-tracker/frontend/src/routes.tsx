import { Route, Routes } from "react-router-dom";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Teams from "./components/Teams";
import Users from "./components/Users";
import Workouts from "./components/Workouts";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}> 
        <Route index element={<div>Welcome to the OctoFit Tracker dashboard.</div>} />
        <Route path="users" element={<Users />} />
        <Route path="teams" element={<Teams />} />
        <Route path="activities" element={<Activities />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="leaderboard" element={<Leaderboard />} />
      </Route>
    </Routes>
  );
}
