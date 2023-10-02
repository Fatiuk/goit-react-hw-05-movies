import { Route, Routes } from 'react-router-dom';
// ============ React lazy ============
import { lazy } from 'react';
// ============ SharedLayout ============
import SharedLayout from 'components/SharedLayout/SharedLayout';
// ============ Home ============
const Home = lazy(() => import('../../pages/Home'));
// ============ Movies ============
const Movies = lazy(() => import('../../pages/Movies'));
// ============ MoviesDetails ============
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
// ============ Cast ============
const Cast = lazy(() => import('../../components/Cast/Cast'));
// ============ Reviews ============
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
