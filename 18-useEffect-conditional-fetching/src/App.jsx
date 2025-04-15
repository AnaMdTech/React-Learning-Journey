import { useEffect, useState } from "react";

function App() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!shouldFetch || userId === null) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
        setShouldFetch(false);
      }
    };

    fetchData();
  }, [shouldFetch, userId]);

  return (
    <div style={{ padding: "2rem" }}>
      <button
        onClick={() => {
          setData(null)
          const randomId = Math.floor(Math.random() * 10) + 1;
          setUserId(randomId);
          setShouldFetch(true);
        }}
      >
        Fetch Random User
      </button>

      {loading && <p>Loading...</p>}

      {data && (
        <div style={{ marginTop: "1rem" }}>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>City: {data.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default App;
