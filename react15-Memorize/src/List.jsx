import { useEffect } from "react";

function List({ getItems }) {

  useEffect(() => {
    console.log('getItems re-create');
  }, [getItems]);

  return (
    <ul>
      {getItems("done").map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}

export default List;
