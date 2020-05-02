import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = (props) => {
  const [newTodo, setNewTodo] = useState({});

  const handleChange = (e) => {
    setNewTodo({ desc: e.target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    const withID = { ...newTodo, id: uuid() };
    props.addTodo(withID);
    setNewTodo({ desc: "" });
  };
  return (
    <form onSubmit={addTodo}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        type="text"
        id="newTodo"
        name="newTodo"
        value={newTodo.desc}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
