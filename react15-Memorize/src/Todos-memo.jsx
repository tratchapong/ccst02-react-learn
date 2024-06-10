import React,{memo} from "react";

function Todos({ todos }) {
  console.log("child (Todos) render");
  return (
    <>
      <h2>My Todos </h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}

export default memo(Todos)
