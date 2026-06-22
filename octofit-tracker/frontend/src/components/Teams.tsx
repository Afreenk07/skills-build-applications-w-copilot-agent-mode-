import { useEffect, useState } from "react";
import { apiBase } from "../api";

interface Team {
  _id: string;
  name: string;
  members?: Array<{ _id: string; name: string }>;
}

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBase}/teams/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.teams)) {
          setTeams(data.teams);
        } else if (Array.isArray(data)) {
          setTeams(data);
        } else if (Array.isArray(data.data)) {
          setTeams(data.data);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {loading && <p>Loading teams…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {teams.map((team) => (
            <li key={team._id}>
              <strong>{team.name}</strong>
              {team.members?.length ? (
                <span> — {team.members.length} member(s)</span>
              ) : (
                <span> — no members</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Teams;
