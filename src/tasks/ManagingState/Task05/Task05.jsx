import { useState } from 'react';
import { nanoid } from 'nanoid';
import { RiAddCircleFill } from 'react-icons/ri';
import { Caption, MiniForm } from 'components';
import PackingList from './PackingList';
// import { FlexBox, Select } from 'components';

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
        id: nanoid(),
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
      <Caption text={`${packed} out of ${total} packed!`} />
    </>
  );
};

export default Task05;
