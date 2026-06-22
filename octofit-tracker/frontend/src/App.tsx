import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header>
        <div className="brand">
          <h1>OctoFit Tracker</h1>
          <p>
            Use <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to enable
            Codespaces preview URLs. Example:
            <code>VITE_CODESPACE_NAME=your-codespace-name</code>
          </p>
        </div>
      </header>
      <nav className="app-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          API base is constructed from <code>VITE_CODESPACE_NAME</code> when available,
          otherwise it falls back to localhost.
        </p>
      </footer>
    </div>
  );
}

export default App;
