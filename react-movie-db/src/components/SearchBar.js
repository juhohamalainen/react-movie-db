import React, { useState } from "react";
import { Carousel, DropdownButton, Dropdown } from "react-bootstrap";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    props.searchMovies(searchTerm);
  };

  const handleGenreSelect = (eventKey) => {
    setSelectedGenre(eventKey);
    props.filterMoviesByGenre(eventKey);
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
      <Dropdown className='float-end'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Filter by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={null} onClick={handleGenreSelect}>All Genres</Dropdown.Item>
          <Dropdown.Item eventKey={28} onClick={handleGenreSelect}>Action</Dropdown.Item>
          <Dropdown.Item eventKey={12} onClick={handleGenreSelect}>Adventure</Dropdown.Item>
          <Dropdown.Item eventKey={16} onClick={handleGenreSelect}>Animation</Dropdown.Item>
          <Dropdown.Item eventKey={35} onClick={handleGenreSelect}>Comedy</Dropdown.Item>
          <Dropdown.Item eventKey={80} onClick={handleGenreSelect}>Crime</Dropdown.Item>
          <Dropdown.Item eventKey={99} onClick={handleGenreSelect}>Documentary</Dropdown.Item>
          <Dropdown.Item eventKey={18} onClick={handleGenreSelect}>Drama</Dropdown.Item>
          <Dropdown.Item eventKey={10751} onClick={handleGenreSelect}>Family</Dropdown.Item>
          <Dropdown.Item eventKey={14} onClick={handleGenreSelect}>Fantasy</Dropdown.Item>
          <Dropdown.Item eventKey={36} onClick={handleGenreSelect}>History</Dropdown.Item>
          <Dropdown.Item eventKey={27} onClick={handleGenreSelect}>Horror</Dropdown.Item>
          <Dropdown.Item eventKey={10402} onClick={handleGenreSelect}>Music</Dropdown.Item>
          <Dropdown.Item eventKey={9648} onClick={handleGenreSelect}>Mystery</Dropdown.Item>
          <Dropdown.Item eventKey={10749} onClick={handleGenreSelect}>Romance</Dropdown.Item>
          <Dropdown.Item eventKey={878} onClick={handleGenreSelect}>Science Fiction</Dropdown.Item>
          <Dropdown.Item eventKey={10770} onClick={handleGenreSelect}>TV Movie</Dropdown.Item>
          <Dropdown.Item eventKey={53} onClick={handleGenreSelect}>Thriller</Dropdown.Item>
          <Dropdown.Item eventKey={10752} onClick={handleGenreSelect}>War</Dropdown.Item>
          <Dropdown.Item eventKey={37} onClick={handleGenreSelect}>Western</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </form>
  );
}

export default SearchBar;
