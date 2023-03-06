import React from "react";

function Header(props) {
  const theme = props.theme === "dark" ? "bg-dark text-light" : "";
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${theme}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Movie Search
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${theme}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
