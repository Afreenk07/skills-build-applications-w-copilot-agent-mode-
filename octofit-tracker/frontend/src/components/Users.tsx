import { useEffect, useState } from "react";
import { apiBase } from "../api";

interface User {
  _id: string;
  name: string;
  email: string;
  role?: string;
  team?: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBase}/users/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else if (Array.isArray(data)) {
          setUsers(data);
        } else if (Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {loading && <p>Loading users…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>{user.name}</strong> — {user.email}
              {user.role ? ` (${user.role})` : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Users;
