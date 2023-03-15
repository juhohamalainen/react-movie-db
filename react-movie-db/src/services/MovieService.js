import axios from "axios";

const OMDB_API_KEY = "5d435479";

const API_KEY = "8b2c24e8127461411e286202c60eb351";

const MovieService = {
  searchMovies: (title) => {
    console.log(`Making API call to search for movies with title "${title}"...`);
    return axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}`)
      .then(response => {
        console.log(`Search results for "${title}":`, response.data);
        return response;
      })
      .catch(error => {
        console.error(`Error searching for "${title}":`, error);
        throw error;
      });
  },
  

  getMovieDetails: (title) => {
    return axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${title}`);
  },
  
  getTopRatedMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    return response;
  },
};

export default MovieService;
