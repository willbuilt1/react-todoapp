import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const displayTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      todo={todo.desc}
      remove={() => removeTodo(todo.id)}
    />
  ));

  return (
    <div>
      <h1>To-Do List</h1>
      {displayTodos}
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
