import { useState } from 'react';
import { ListT02, SearchBarT02 } from '../intendendComponents';
import { filterItems, foods } from 'constants';

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
      <ListT02 items={items} />
    </>
  );
};

export default Task02;
