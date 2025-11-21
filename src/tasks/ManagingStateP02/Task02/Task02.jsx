import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBarT02 } from '../intendendComponents';
import { filterItems, foods } from './data';

const Task02 = () => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const items = filterItems(foods, query);

  return (
    <>
      <SearchBarT02 query={query} handleQuery={handleChange} />
      <hr />
      <List items={items} />
    </>
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

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

List.defaultProps = {
  list: null,
};

export default Task02;
