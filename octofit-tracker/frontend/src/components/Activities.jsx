import { useEffect, useState } from 'react';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/activities`
    : 'http://localhost:8000/api/activities';

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setActivities(data);
        } else if (Array.isArray(data.activities)) {
          setActivities(data.activities);
        } else if (Array.isArray(data.data)) {
          setActivities(data.data);
        } else {
          setActivities([]);
        }
      })
      .catch((err) => setError(err.message || String(err)));
  }, [apiUrl]);

  return (
    <div>
      <h2>Activities</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {activities.map((activity) => (
          <li key={activity._id || activity.name}>{activity.name || JSON.stringify(activity)}</li>
        ))}
      </ul>
    </div>
  );
}
