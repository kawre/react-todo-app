import React, { useState } from "react";
import uuid from "react-uuid";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const [error, setError] = useState(false);
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (event) => {
    setError(false);
    if (event.key === "Enter") {
      if (inputText === "") {
        setError(true);
      } else {
        setTodos([...todos, { text: inputText, completed: false, id: uuid() }]);
        setInputText("");
      }
    }
  };

  return (
    <div className={`main-input ${error ? "error" : ""}`}>
      <div className="form-circle"></div>
      <input
        value={inputText}
        onChange={inputTextHandler}
        onKeyDown={handleKeyDown}
        className="todo-input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default Form;
