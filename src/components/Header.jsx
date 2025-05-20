import React from "react";
import reactImg from "../assets/react.svg";
function Header() {
  return (
    <>
      <header>
        <img src={reactImg} alt="" />
        <h1>React Tic Tac Toe</h1>
      </header>
    </>
  );
}

export default Header;
