import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const displayTodos = todos.map((todo) => <Todo todo={todo} />);

  return (
    <div>
      <h1>To-Do List</h1>
      {displayTodos}
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
