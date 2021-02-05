import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [value, setValue] = useState(0);

  return (
    <>
      <Header />
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        value={value}
        setValue={setValue}
        setTodos={setTodos}
        todos={todos}
      />
    </>
  );
}

export default App;
