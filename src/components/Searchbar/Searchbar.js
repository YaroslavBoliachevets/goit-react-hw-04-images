import { useState } from 'react';
import {
  Searcher,
  SearchForm,
  SearchFromButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.module';

import { MdSearch } from 'react-icons/md';

function Searchbar(options) {

  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return;
    }

    options.onSubmit(query.toLowerCase());
    setQuery('');
  };

  return (
    <>
      <Searcher>
        <SearchForm onSubmit={onSubmit}>
          <SearchFromButton type="submit">
            <MdSearch size={24} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFromButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </SearchForm>
      </Searcher>
    </>
  );
}

export default Searchbar;
