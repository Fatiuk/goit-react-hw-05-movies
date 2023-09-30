import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/themoviedb-api';
import { MovieWrap } from './MoviePage.styled';
import Section from 'components/Section/Section';

const MoviePage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  console.log(movieDetails);
  return (
    <Section>
      <MovieWrap>
        {movieDetails ? (
          <>
            <h2>{movieDetails.title}</h2>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </MovieWrap>
    </Section>
  );
};

export default MoviePage;
