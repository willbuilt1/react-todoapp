import React from "react";

const Todo = (props) => {
  return (
    <div>
      <div>{props.todo}</div>
      <button>X</button>
    </div>
  );
};

export default Todo;
