import React, { useState, useEffect } from "react";
import { Carousel, DropdownButton, Dropdown } from "react-bootstrap";
import MovieService from "../services/MovieService";


function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getGenres = async () => {
    const response = await MovieService.getGenres();
    setGenres(response.data.genres);
  };

  useEffect(() => {
    getGenres();
  }, [])

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    props.searchMovies(searchTerm);
  };

  const handleGenreSelect = (eventKey, event) => {
    props.setSelectedGenreId(eventKey)
  }
console.log(genres)
  return (
    <form onSubmit={handleSearchSubmit} className={`search-bar ${props.theme}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a movie"
      />
      <button className="btn btn-primary" type="submit">Search</button>
      <Dropdown onSelect={handleGenreSelect} className='float-end'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Filter by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {genres?.map((genre) => <Dropdown.Item key={genre.id} eventKey={genre.id}>{genre.name}</Dropdown.Item>)}
        </Dropdown.Menu>
    </Dropdown>
    </form>
  );
}

export default SearchBar;