import { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [title, setTitle] = useState('');

  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle('');
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddItem;
