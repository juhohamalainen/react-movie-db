import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieService from "./services/MovieService";
import SearchResults from "./components/SearchResults";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
    <div className="container">
      <Header />
      <SearchBar searchMovies={searchMovies} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} clearSelectedMovie={clearSelectedMovie} />
      ) : (
        <MovieList movies={movies} getMovieDetails={getMovieDetails} />
      )}
    </div>
  );
}

export default App;
