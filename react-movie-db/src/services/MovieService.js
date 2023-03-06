import axios from "axios";

const OMDB_API_KEY = "5d435479";

const MovieService = {
  searchMovies: (title) => {
    console.log(`Making API call to search for movies with title "${title}"...`);
    return axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}`);
  },

  getMovieDetails: (id) => {
    console.log(`Making API call to fetch details for movie with ID "${id}"...`);
    return axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
  },
};

export default MovieService;
