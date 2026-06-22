import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard`
    : 'http://localhost:8000/api/leaderboard';

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setLeaderboard(data);
        } else if (Array.isArray(data.leaderboard)) {
          setLeaderboard(data.leaderboard);
        } else if (Array.isArray(data.data)) {
          setLeaderboard(data.data);
        } else {
          setLeaderboard([]);
        }
      })
      .catch((err) => setError(err.message || String(err)));
  }, [apiUrl]);

  return (
    <div>
      <h2>Leaderboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ol>
        {leaderboard.map((item) => (
          <li key={item._id || `${item.team?.name}-${item.points}`}>
            {item.team?.name || item.user?.name || 'Unknown'} — {item.points} points
          </li>
        ))}
      </ol>
    </div>
  );
}
