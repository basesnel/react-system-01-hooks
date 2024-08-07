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
    <section className={styles.bar}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        autoComplete="off"
      >
        <button className={styles.button}>
          <span className={styles.label}>Search</span>
        </button>
        <input
          type="text"
          name="searchQuery"
          placeholder={query ? `Search ${query}...` : 'Search...'}
          value={searchQuery}
          onChange={handleInputChange}
          className={styles.input}
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
