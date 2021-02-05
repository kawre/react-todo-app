import React from "react";

const Header = () => {
  const themeHandler = () => {
    document.body.classList.toggle("dark");
  };

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
