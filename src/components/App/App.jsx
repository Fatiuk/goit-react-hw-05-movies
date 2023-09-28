// ============ Section ============
import { fetchTrendingMovies } from 'services/themoviedb-api';
import Section from '../Section/Section';

const App = () => {
  fetchTrendingMovies();
  return (
    <>
      <Section></Section>
    </>
  );
};

export default App;
