import { useState } from 'react';
// import PropTypes from 'prop-types';
import { foods } from './data';

import styles from './styles.module.css';

const Task02 = () => {
  // const [text, setText] = useState('');

  // const handleChange = e => {
  //   setText(e.target.value);
  // };

  return (
    <>
      <Searchbar />
      <hr />
      <List items={foods} />
    </>
  );
};

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <label className={styles.label}>
      <span className={styles.span}>Search: </span>
      <input
        className={styles.input}
        name="Task02 search"
        size={10}
        value={query}
        onChange={handleChange}
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
