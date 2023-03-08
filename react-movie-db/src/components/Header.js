import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header(props) {
  return (
    <header className={`header ${props.theme}`}>
      <h1>Movie Search App</h1>
      <BsFillMoonStarsFill onClick={props.toggleTheme} />
    </header>
  );
}

export default Header;
