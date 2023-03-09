import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieItem from "./components/MovieItem";
import MovieDetails from "./components/MovieDetails";
import MovieService from "./services/MovieService";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import imdb from 'imdb-api';
import axios from "axios";



function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [theme, setTheme] = useState("light");
  const [topMovies, setTopMovies] = useState([]);
  

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
      <Home />
      <SearchBar searchMovies={searchMovies} />
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          clearSelectedMovie={clearSelectedMovie}
        />
      ) : (
        <>
          <Container fluid>
            <Row>
              <Col>
                <Carousel>
                  {topMovies.map((movie) => (
                    <Carousel.Item key={movie.id}>
                      <img
                        className="d-block w-100"
                        src={movie.poster}
                        alt={movie.title}
                      />
                      <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p>{movie.plot}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>

              </Col>
            </Row>
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
        </>
      )}

    </div>
  );
}

export default App;
