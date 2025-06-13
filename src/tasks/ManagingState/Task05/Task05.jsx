import { useState } from 'react';
import AddItem from './AddItem';
import PackingList from './PackingList';
// import { FlexBox, Select } from 'components';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

const Task05 = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = title => {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  };

  const handleChangeItem = nextItem => {
    setItems(
      items.map(item => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteItem = itemId => {
    // setTotal(total - 1);
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {items.reduce((acc, item) => acc + item.packed, 0)} out of{' '}
        {items.length} packed!
      </b>
    </>
  );
};

export default Task05;
