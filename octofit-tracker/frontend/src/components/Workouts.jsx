import { useEffect, useState } from 'react';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/workouts`
    : 'http://localhost:8000/api/workouts';

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWorkouts(data);
        } else if (Array.isArray(data.workouts)) {
          setWorkouts(data.workouts);
        } else if (Array.isArray(data.data)) {
          setWorkouts(data.data);
        } else {
          setWorkouts([]);
        }
      })
      .catch((err) => setError(err.message || String(err)));
  }, [apiUrl]);

  return (
    <div>
      <h2>Workouts</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id || JSON.stringify(workout)}>
            {workout.activity?.name || workout.user?.name || 'Workout'}
          </li>
        ))}
      </ul>
    </div>
  );
}
