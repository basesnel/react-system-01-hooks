import { useState } from 'react';
// import { RiAddCircleFill } from 'react-icons/ri';
// import { Caption, MiniForm } from 'components';
// import PackingList from './PackingList';
import Letter from './Letter';

const initialLetters = [
  { id: 0, subject: 'Ready for adventure?', isStarred: true },
  { id: 1, subject: 'Time to check in!', isStarred: false },
  { id: 2, subject: 'Festival Begins In Just SEVEN Days!', isStarred: false },
];

const Task06 = () => {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  const handleHover = letter => {
    setHighlightedId(letter.id);
  };

  const handleStar = starred => {
    setLetters(
      letters.map(letter => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        }
        return letter;
      })
    );
  };

  return (
    <>
      <h3>Inbox</h3>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
};

export default Task06;
