import React, { useState } from "react";
import { Carousel, DropdownButton, Dropdown } from "react-bootstrap";


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
      <Dropdown className='float-end'>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Filter by
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item eventKey={[28]}>Action</Dropdown.Item>
    <Dropdown.Item eventKey={[12]}>Adventure</Dropdown.Item>
    <Dropdown.Item eventKey={[16]}>Animation</Dropdown.Item>
    <Dropdown.Item eventKey={[35]}>Comedy</Dropdown.Item>
    <Dropdown.Item eventKey={[80]}>Crime</Dropdown.Item>
    <Dropdown.Item eventKey={[99]}>Documentary</Dropdown.Item>
    <Dropdown.Item eventKey={[18]}>Drama</Dropdown.Item>
    <Dropdown.Item eventKey={[10751]}>Family</Dropdown.Item>
    <Dropdown.Item eventKey={[14]}>Fantasy</Dropdown.Item>
    <Dropdown.Item eventKey={[36]}>History</Dropdown.Item>
    <Dropdown.Item eventKey={[27]}>Horror</Dropdown.Item>
    <Dropdown.Item eventKey={[10402]}>Music</Dropdown.Item>
    <Dropdown.Item eventKey={[9648]}>Mystery</Dropdown.Item>
    <Dropdown.Item eventKey={[10749]}>Romance</Dropdown.Item>
    <Dropdown.Item eventKey={[878]}>Science Fiction</Dropdown.Item>
    <Dropdown.Item eventKey={[10770]}>TV Movie</Dropdown.Item>
    <Dropdown.Item eventKey={[53]}>Thriller</Dropdown.Item>
    <Dropdown.Item eventKey={[10752]}>War</Dropdown.Item>
    <Dropdown.Item eventKey={[37]}>Western</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </form>
  );
}

export default SearchBar;