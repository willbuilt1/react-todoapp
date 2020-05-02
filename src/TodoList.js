import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.desc = newText;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const displayTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      todo={todo.desc}
      remove={removeTodo}
      edit={editTodo}
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
