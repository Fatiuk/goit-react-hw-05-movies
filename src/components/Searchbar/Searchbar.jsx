import Notiflix from 'notiflix';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchbarWrap,
  SearchbarForm,
  SearchbarButton,
  SearchbarSpan,
  SearchbarInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  // Function that updates the state based on user input
  const handleChange = event => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    const query = inputValue.trim();
    if (!query) {
      // Show a failure notification if the query is empty
      return Notiflix.Report.failure(
        'Meren Movies Failure',
        'Please enter a keyword or phrase to search for movies. We will do our best to find suitable movies for you.',
        'Okay'
      );
    }
    // Update the search parameters and call the onSubmit function
    searchParams.get('query');
    setSearchParams({ query });
    onSubmit(query);
  };

  return (
    <SearchbarWrap>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarButton type="submit">
          <SearchbarSpan></SearchbarSpan>
        </SearchbarButton>

        <SearchbarInput
          id="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Please input a query to search for a movie by its title"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchbarForm>
    </SearchbarWrap>
  );
};

export default Searchbar;
