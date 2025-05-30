import { useState } from 'react';
// import { FiEdit3 } from 'react-icons/fi';
// import { Button, FlexBox, Form, Paragraph, TextArea } from 'components';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

const Prac07 = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item => item.id === selectedId);

  const handleItemChange = (id, e) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <h3>What's your travel snack?</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => handleItemChange(item.id, e)}
              size={10}
            />{' '}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
};

export default Prac07;
