import { useCallback, useState,useMemo } from "react";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  // const getItems = () => [count, count+1, count+2]
  // const getItems = useMemo(() => ()=> [count, count+1, count+2], [count])

  const getItems = useCallback((msg) => [count, count+1, count+2, msg], [count])

  return (
    <div style={theme}>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button onClick={() => setDark((prv) => !prv)}>Toggle Theme</button>
      <hr />
      <List getItems={getItems}/>
    </div>
  );
}

export default App;
