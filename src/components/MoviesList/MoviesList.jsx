import MoviesItem from 'components/MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  return (
    <>
      <h2>Must-Watch Movies</h2>
      <List>
        {films.map(movie => {
          return <MoviesItem key={movie.id} movie={movie} />;
        })}
      </List>
    </>
  );
};

export default MoviesList;
