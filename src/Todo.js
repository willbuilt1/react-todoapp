import React, { useState } from "react";

const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textEdit, setTextEdit] = useState("");

  const handleChange = (e) => setTextEdit(e.target.value);

  const cancelEdit = () => {
    setIsEditing(false);
    setTextEdit("");
  };

  const saveEdit = () => {
    props.edit(props.id, textEdit);
    cancelEdit();
  };

  const standardView = <div>{props.todo}</div>;
  const editView = (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={saveEdit}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );

  const removeTodo = () => {
    props.remove(props.id);
  };

  return (
    <div>
      {isEditing ? editView : standardView}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={removeTodo}>X</button>
    </div>
  );
};

export default Todo;
