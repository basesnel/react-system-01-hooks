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

const Task08 = () => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  const handleToggle = toggledId => {
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  };

  return (
    <>
      <h3>Inbox</h3>
      <ul>
        {initialLetters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </ul>
      <hr />
      <p>You selected {selectedCount} letters</p>
    </>
  );
};

export default Task08;
