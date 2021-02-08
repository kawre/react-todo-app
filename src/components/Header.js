import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todoApp.mode";

const Header = () => {
  const [mode, setMode] = useState("light");
  const themeHandler = () => {
    if (document.body.classList.contains("light")) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  // Local Storage

  useEffect(() => {
    const storedMode = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedMode) setMode(storedMode);
  }, []);

  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem(LOCAL_STORAGE_KEY, mode);
  }, [mode]);

  return (
    <div className="main-header">
      <h1 className="header-logo">TODO</h1>
      <button onClick={themeHandler} className="theme-changer">
        <img
          className="theme-img"
          src="https://i.ibb.co/vwJhYp1/26x26-00000000.png"
          alt="theme-btn"
        />
      </button>
    </div>
  );
};

export default Header;
