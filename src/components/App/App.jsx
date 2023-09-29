import { Route, Routes } from 'react-router-dom';
// ============ API ============
import { fetchTrendingMovies } from 'services/themoviedb-api';
// ============ SharedLayout ============
import SharedLayout from 'components/SharedLayout/SharedLayout';
// ============ Home ============
import { Home } from 'pages/Home';
// ============ Movies ============
import { Movies } from 'pages/Movies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default App;
