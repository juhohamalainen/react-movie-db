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
  const [selectedGenreId , setSelectedGenreId] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const searchMovies = async (title) => {
    const response = await MovieService.searchMovies(title);
    setMovies(response.data.Search);
  };

  const getMovieDetails = async (title) => {
    const response = await MovieService.getMovieDetails(title);
    setSelectedMovie(response.data);
  };

  const getMovieDetails2 = async (id) => {
    const response = await MovieService.getMovieDetails2(id);
    setSelectedMovie(response.data);
  };

  const clearSelectedMovie = () => {
    setSelectedMovie(null);
    setMovies([]);
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} clearSelectedMovie={clearSelectedMovie} clearSelectedMovie={clearSelectedMovie} />
      <SearchBar searchMovies={searchMovies} setSelectedGenreId={setSelectedGenreId} />
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          clearSelectedMovie={clearSelectedMovie}
          theme={theme}
        />
      ) : (
        <>
          {movies.length > 0 ? (
            <Container fluid>
              <Row>
                <Col>
                  <MovieList
                    movies={movies}
                    getMovieDetails2={getMovieDetails2}
                    theme={theme}
                  />
                </Col>
              </Row>
            </Container>
          ) : (
            <Home theme={theme} getMovieDetails={getMovieDetails} selectedMovie={selectedMovie} selectedGenreId={selectedGenreId} />
          )}
        </>
      )}
    </div>
  );
}

export default App;