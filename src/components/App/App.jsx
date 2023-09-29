import { Route, Routes } from 'react-router-dom';
// ============ SharedLayout ============
import SharedLayout from 'components/SharedLayout/SharedLayout';
// ============ Home ============
import { Home } from 'pages/Home';
// ============ Movies ============
import { Movies } from 'pages/Movies';
// ============ MoviesDetails ============
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
