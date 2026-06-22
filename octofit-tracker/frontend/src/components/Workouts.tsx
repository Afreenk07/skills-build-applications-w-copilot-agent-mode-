import { useEffect, useState } from "react";
import { apiBase } from "../api";

interface Workout {
  _id: string;
  durationMinutes: number;
  caloriesBurned: number;
  date: string;
  user?: { name: string };
  activity?: { name: string };
  team?: { name: string };
}

function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBase}/workouts/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.workouts)) {
          setWorkouts(data.workouts);
        } else if (Array.isArray(data)) {
          setWorkouts(data);
        } else if (Array.isArray(data.data)) {
          setWorkouts(data.data);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {loading && <p>Loading workouts…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              <strong>{workout.activity?.name || "Workout"}</strong> for {workout.durationMinutes} min
              {workout.caloriesBurned ? `, ${workout.caloriesBurned} kcal` : null}
              {workout.user ? ` by ${workout.user.name}` : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Workouts;
