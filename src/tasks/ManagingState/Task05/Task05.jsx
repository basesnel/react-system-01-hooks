import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { MiniForm } from 'components';
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
  const total = items.length;
  const packed = items.reduce((acc, item) => acc + item.packed, 0);

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
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <>
      <MiniForm
        onFormSubmit={handleAddItem}
        filling="Add item"
        icon={<RiAddCircleFill />}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
};

export default Task05;
