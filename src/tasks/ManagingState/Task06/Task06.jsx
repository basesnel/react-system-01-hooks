import { useState } from 'react';
import { initialLettersStarred } from 'constants';
import { List, Title } from 'components';
import Letter from './Letter';

const Task06 = () => {
  const [letters, setLetters] = useState(initialLettersStarred);
  const [highlightedId, setHighlightedId] = useState(null);

  const handleHover = letterId => {
    setHighlightedId(letterId);
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
      <Title level={3} caption="inbox" />
      <List>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </List>
    </>
  );
};

export default Task06;
