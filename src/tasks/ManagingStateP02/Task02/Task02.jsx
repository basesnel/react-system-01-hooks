import { useState } from 'react';
// import PropTypes from 'prop-types';
import { filterItems, foods } from './data';

import styles from './styles.module.css';

const Task02 = () => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const items = filterItems(foods, query);

  return (
    <>
      <Searchbar query={query} handleQuery={handleChange} />
      <hr />
      <List items={items} />
    </>
  );
};

const Searchbar = ({ query, handleQuery }) => {
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

const List = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Input.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Task02;
