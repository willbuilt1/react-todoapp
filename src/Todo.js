import React from "react";

const Todo = (props) => {
  return (
    <div>
      <div>{props.todo}</div>
      <button onClick={props.remove}>X</button>
    </div>
  );
};

export default Todo;
