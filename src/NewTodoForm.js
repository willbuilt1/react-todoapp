import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [newTodo, setNewTodo] = useState("Test");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(newTodo);
  };
  return (
    <form onSubmit={addTodo}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        type="text"
        id="newTodo"
        name="newTodo"
        value={newTodo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
