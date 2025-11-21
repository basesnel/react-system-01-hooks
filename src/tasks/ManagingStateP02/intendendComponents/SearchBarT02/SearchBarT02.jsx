import PropTypes from 'prop-types';

import styles from './styles.module.css';

const SearchbarT02 = ({ query, handleQuery }) => {
  return (
    <label className={styles.label}>
      <span className={styles.span}>Search: </span>
      <input
        className={styles.input}
        name="Task02 search"
        size={10}
        value={query}
        onChange={handleQuery}
        placeholder="Type any text..."
      />
    </label>
  );
};

SearchbarT02.propTypes = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
};

export default SearchbarT02;
