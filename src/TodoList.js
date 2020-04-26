import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const displayTodos = todos.map((todo) => <Todo todo={todo} />);

  return displayTodos;
}

export default TodoList;
