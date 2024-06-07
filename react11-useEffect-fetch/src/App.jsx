import React, { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBar from "./SearchBar";

function App() {
  console.log("App start..");
  const [users, setUsers] = useState(null);
  const [showUser, setShowUser] = useState(null)
  const [filterText,setFilterText] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetchdata...");
    const fetchData = async () => {
      try {
        setLoading(true)
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

  const hdlClick = (el) => {
    setShowUser(el)
  }

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
      <SearchBar filterText={filterText} setFilterText={setFilterText}/>
      <hr />
      <ul>
        {users.map((el) => (
          <li 
            key={el.id}
            onClick={()=>hdlClick(el)}
            style={{cursor:'pointer', fontSize:'24px', marginBlock: '4px'}}
          >
              {el.firstName}
          </li>
        ))}
      </ul>
      <hr />
      {showUser && (
        <>
          <button onClick={()=>setShowUser(null)}>Close InfoBox</button>
          <InfoBox user={showUser} style={{backgroundColor: "gold", padding: "8px" }} size={'100px'}/>
        </>
      )}
    </div>
  );
}

export default App;
