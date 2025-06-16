import { useState } from 'react';
// import { RiAddCircleFill } from 'react-icons/ri';
// import { Caption, MiniForm } from 'components';
// import PackingList from './PackingList';
import Letter from './Letter';

const letters = [
  { id: 0, subject: 'Ready for adventure?', isStarred: true },
  { id: 1, subject: 'Time to check in!', isStarred: false },
  { id: 2, subject: 'Festival Begins In Just SEVEN Days!', isStarred: false },
];

const Task07 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedCount = 1;

  const handleToggle = toggledId => {
    setSelectedId(toggledId);
  };

  return (
    <>
      <h3>Inbox</h3>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={letter.id === selectedId}
            onToggle={handleToggle}
          />
        ))}
      </ul>
      <hr />
      <p>You selected {selectedCount} letters</p>
    </>
  );
};

export default Task07;
