import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header(props) {
  const handleClick = () => {
    props.clearSelectedMovie();
  };

  return (
    <header className={`header ${props.theme}`}>
      <h1 onClick={handleClick}>Movie Database</h1>
      <BsFillMoonStarsFill onClick={props.toggleTheme} />
    </header>
  );
}

export default Header;
