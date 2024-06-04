import React, { useState, useEffect } from "react";

function App() {
  console.log("App start..");
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetchdata...");
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=10");
        const data = await res.json();
        console.log(data);
        setUsers(data.users);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app">
      {console.log("App Jsx")}
      <h1>React Fetch Lab</h1>
      <hr />
      <ul>
        {users.map((el) => (
          <li key={el.id}>{el.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
