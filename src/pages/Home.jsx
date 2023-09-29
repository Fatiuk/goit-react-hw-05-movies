import { useState, useEffect } from 'react';
// ============ API ============
import { fetchTrendingMovies } from 'services/themoviedb-api';
// ============ Compinents ============
import MoviesList from 'components/MoviesList/MoviesList';

export const Home = () => {
  // State to store data about trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Fetch movie data when the component mounts
  useEffect(() => {
    // Function for asynchronous data fetching
    const fetchMoviesData = async () => {
      try {
        // Perform a request to get trending movies
        const movies = await fetchTrendingMovies();
        // Update the trendingMovies state with the movie data
        setTrendingMovies(movies);
      } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
      }
    };
    // Call the fetchMoviesData function when the component mounts
    fetchMoviesData();
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
      <MoviesList films={trendingMovies} />
    </main>
  );
};
