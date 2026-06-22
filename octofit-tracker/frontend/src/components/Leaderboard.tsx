import { useEffect, useState } from "react";
import { apiBase } from "../api";

interface Entry {
  _id: string;
  points: number;
  team?: { name: string };
  user?: { name: string };
}

function Leaderboard() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBase}/leaderboard/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.leaderboard)) {
          setEntries(data.leaderboard);
        } else if (Array.isArray(data)) {
          setEntries(data);
        } else if (Array.isArray(data.data)) {
          setEntries(data.data);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {loading && <p>Loading leaderboard…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ol>
          {entries.map((entry) => (
            <li key={entry._id}>
              {entry.team?.name || entry.user?.name || "Unknown"}: {entry.points} points
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Leaderboard;
