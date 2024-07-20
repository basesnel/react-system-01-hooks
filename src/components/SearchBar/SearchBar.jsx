import { useState } from 'react';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import styles from './styles.module.css';

const SearchBar = props => {
  const { onFormSubmit, query } = props;

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
    <section className={styles.searchBar}>
      <form
        onSubmit={handleSubmit}
        className={styles.searchForm}
        autoComplete="off"
      >
        <button className={styles.searchButton}>
          <span className={styles.searchLabel}>Search</span>
        </button>
        <input
          type="text"
          name="searchQuery"
          placeholder={query ? `Search ${query}...` : 'Search...'}
          value={searchQuery}
          onChange={handleInputChange}
          className={styles.searchInput}
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
