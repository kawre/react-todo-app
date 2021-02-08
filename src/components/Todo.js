import React from "react";

const Todo = ({ text, todo, todos, setTodos, provided }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <li className="list">
      <button
        onClick={completeHandler}
        className={`todo-button ${todo.completed ? "completed" : ""}`}
      >
        <img src="https://svgur.com/i/TdQ.svg" alt="" />
      </button>
      <h2 className="todo-activity">{text}</h2>
      <button onClick={deleteHandler} className="delete-list">
        <img src="https://svgur.com/i/TfU.svg" alt="" />
      </button>
    </li>
  );
};

export default Todo;
