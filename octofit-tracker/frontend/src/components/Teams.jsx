import { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/teams`
    : 'http://localhost:8000/api/teams';

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeams(data);
        } else if (Array.isArray(data.teams)) {
          setTeams(data.teams);
        } else if (Array.isArray(data.data)) {
          setTeams(data.data);
        } else {
          setTeams([]);
        }
      })
      .catch((err) => setError(err.message || String(err)));
  }, [apiUrl]);

  return (
    <div>
      <h2>Teams</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {teams.map((team) => (
          <li key={team._id || team.name}>{team.name || JSON.stringify(team)}</li>
        ))}
      </ul>
    </div>
  );
}
