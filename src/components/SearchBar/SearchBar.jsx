import { useState } from 'react';
import { toast } from 'react-toastify';

import css from './SearchBar.module.css';

export const SearchBar = ({ onFormSubmit, query = null }) => {
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
    <section className={css.searchbar}>
      <form
        onSubmit={handleSubmit}
        className={css.searchform}
        autoComplete="off"
      >
        <button className={css.searchform__btn}>
          <span className={css.searchform__label}>Search</span>
        </button>
        <input
          type="text"
          name="searchQuery"
          placeholder={query ? `Search ${query}...` : 'Search...'}
          value={searchQuery}
          onChange={handleInputChange}
          className={css.searchform__input}
        />
      </form>
    </section>
  );
};
