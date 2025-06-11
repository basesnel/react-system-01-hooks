// import { useState } from 'react';

const PackingList = props => {
  const { items, onChangeItem, onDeleteItem } = props;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e =>
                onChangeItem({ ...item, packed: e.target.checked })
              }
            />{' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PackingList;
