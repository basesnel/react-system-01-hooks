import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

import css from './SearchBar.module.css';

const SearchBar = props => {
  const { onFormSubmit, query } = props;
  const { searchBar, searchForm, searchButton, searchLabel, searchInput } = css;

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.warning('Please, input pokemon name!');
    }

    onFormSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <section className={searchBar}>
      <form onSubmit={handleSubmit} className={searchForm} autoComplete="off">
        <button className={searchButton}>
          <span className={searchLabel}>Search</span>
        </button>
        <input
          type="text"
          name="searchQuery"
          placeholder={query ? `Search ${query}...` : 'Search...'}
          value={searchQuery}
          onChange={handleInputChange}
          className={searchInput}
        />
      </form>
    </section>
  );
};

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};

SearchBar.defaultProps = {
  query: null,
};

export default SearchBar;
