import React, { useState } from "react";

const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Update task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};

export default EditForm;
