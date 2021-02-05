import React, { useEffect, useState } from "react";

const Header = () => {
  const [mode, setMode] = useState("light");
  const themeHandler = () => {
    document.body.classList.toggle("dark");
    setMode(!mode);
    console.log(mode);
  };
  useEffect(() => {}, []);

  return (
    <div className="main-header">
      <h1 className="header-logo">TODO</h1>
      <button onClick={themeHandler} className="theme-changer">
        <img
          className="theme-img"
          src="https://i.ibb.co/vwJhYp1/26x26-00000000.png"
        />
      </button>
    </div>
  );
};

export default Header;
