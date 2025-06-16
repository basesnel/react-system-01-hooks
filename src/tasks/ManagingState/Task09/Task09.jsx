import { useState } from 'react';
// import { RiAddCircleFill } from 'react-icons/ri';
// import { Caption, MiniForm } from 'components';
// import PackingList from './PackingList';
import Letter from './Letter';

const initialLetters = [
  { id: 0, subject: 'Ready for adventure?' },
  { id: 1, subject: 'Time to check in!' },
  { id: 2, subject: 'Festival Begins In Just SEVEN Days!' },
];

const Task09 = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedCount = selectedIds.size;

  const handleToggle = toggledId => {
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter(id => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  };

  return (
    <>
      <h3>Inbox</h3>
      <ul>
        {initialLetters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </ul>
      <hr />
      <p>You selected {selectedCount} letters</p>
    </>
  );
};

export default Task09;
