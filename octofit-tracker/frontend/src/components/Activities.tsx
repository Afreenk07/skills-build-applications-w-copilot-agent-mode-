import { useEffect, useState } from "react";
import { apiBase } from "../api";

interface Activity {
  _id: string;
  name: string;
  type?: string;
  caloriesPerHour?: number;
}

function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBase}/activities/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.activities)) {
          setActivities(data.activities);
        } else if (Array.isArray(data)) {
          setActivities(data);
        } else if (Array.isArray(data.data)) {
          setActivities(data.data);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {loading && <p>Loading activities…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {activities.map((activity) => (
            <li key={activity._id}>
              <strong>{activity.name}</strong> — {activity.type || "unknown"}
              {activity.caloriesPerHour ? `, ${activity.caloriesPerHour} kcal/hr` : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Activities;
