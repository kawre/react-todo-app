import React from "react";

const ClearButton = ({ todos, setTodos }) => {
  const clearHandler = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };
  return (
    <button className="btn-clear" onClick={clearHandler}>
      Clear Completed
    </button>
  );
};

export default ClearButton;
