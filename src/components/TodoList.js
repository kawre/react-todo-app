import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import ControlButtons from "./buttons/ControlButtons";
import ClearButton from "./buttons/ClearButton";

const TodoList = ({ value, setValue, todos, setTodos }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category === "Completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (category === "Active") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    } else {
      setFilteredTodos(todos);
    }
  }, [todos, category]);

  return (
    <div className={`main-output ${todos.length < 1 ? "hide" : ""}`}>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </div>
      <div className="todo-control">
        <div className="items-left">
          <p className="p-items-left">{todos.length} items left</p>
        </div>
        <div className="controls">
          <ControlButtons
            todos={todos}
            setTodos={setTodos}
            value={value}
            setValue={setValue}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="clear-completed">
          <ClearButton setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
