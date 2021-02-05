import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

const ControlButtons = ({ todos, value, setValue }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const buttons = [
    {
      title: "All",
      class: "btn-all",
    },
    {
      title: "Active",
      class: "btn-active",
    },
    {
      title: "Completed",
      class: "btn-completed",
    },
  ];
  return (
    <>
      {buttons.map((btn, index) => {
        return (
          <button
            key={uuid()}
            className={`${btn.class} c-btn ${index === value && "active"}`}
            onClick={() => setValue(index)}
          >
            {btn.title}
          </button>
        );
      })}
    </>
  );
};

export default ControlButtons;
