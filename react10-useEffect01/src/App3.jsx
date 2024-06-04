import React, { useState } from "react";
import SearchBar from "./SearchBar";

function App3() {
  console.log('App run..')
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Hello React, Codecamp Thailand</h1>
      <button onClick={() => setOpen(prv => !prv)}>
        {open ? "Close" : "Open"} Search Bar
      </button>
      {open && <SearchBar />}
    </div>
  );
}

export default App3;
