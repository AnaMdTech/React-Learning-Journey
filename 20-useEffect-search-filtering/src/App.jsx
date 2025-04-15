import { useEffect, useState } from "react";

const USERS = [
  "Ana",
  "Arifa",
  "Amir",
  "Merry",
  "Kal",
  "Mahi",
];

function App() {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS);

  useEffect(() => {
    const results = USERS.filter((user) =>
      user.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(results);
  }, [query]);

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />
      <ul>
        {filteredUsers.length ? (
          filteredUsers.map((user, index) => <li key={index}>{user}</li>)
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
