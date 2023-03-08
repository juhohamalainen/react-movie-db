import React, { useState } from "react";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    props.searchMovies(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`search-bar ${props.theme}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a movie"
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
