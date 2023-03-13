import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieService from "./services/MovieService";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const searchMovies = async (title) => {
    const response = await MovieService.searchMovies(title);
    setMovies(response.data.Search);
  };

  const getMovieDetails = async (id) => {
    const response = await MovieService.getMovieDetails(id);
    setSelectedMovie(response.data);
  };

  const clearSelectedMovie = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <SearchBar searchMovies={searchMovies} />
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          clearSelectedMovie={clearSelectedMovie}
        />
      ) : (
        <>
          {movies.length > 0 ? (
            <Container fluid>
              <Row>
                <Col>
                  <MovieList
                    movies={movies}
                    getMovieDetails={getMovieDetails}
                    theme={theme}
                  />
                </Col>
              </Row>
            </Container>
          ) : (
            <Home theme={theme} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
