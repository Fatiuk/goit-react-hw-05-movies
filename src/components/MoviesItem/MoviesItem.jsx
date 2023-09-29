import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './MoviesItem.styled';

const MoviesItem = ({ movie: { id, title, poster_path } }) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : 'https://via.placeholder.com/200x300';
  return (
    <MovieItem>
      <MovieLink to={`/movies/${id}`}>
        <img src={imageUrl} alt={title} loading="lazy" />
        <p>{title}</p>
      </MovieLink>
    </MovieItem>
  );
};

export default MoviesItem;
