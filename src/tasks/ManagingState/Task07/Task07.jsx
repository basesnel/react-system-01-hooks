import { useState } from 'react';
import { initialLettersStarred } from 'constants';
import { Title, List, Caption } from 'components';
// import Letter from './Letter';
import { LetterT07 } from '../intendendComponents';

const Task07 = () => {
  const [letters, setLetters] = useState(initialLettersStarred);

  const selectedCount = letters.reduce((acc, item) => acc + item.isStarred, 0);

  const handleToggle = toggledId => {
    setLetters(
      letters.map(letter => {
        if (letter.id === toggledId)
          return { ...letter, isStarred: !letter.isStarred };
        return letter;
      })
    );
  };

  return (
    <>
      <Title level={3} caption="inbox" />
      <List message="There is no elements in list.">
        {letters.map(letter => (
          <LetterT07
            key={letter.id}
            letter={letter}
            isSelected={letter.isStarred}
            onToggle={handleToggle}
          />
        ))}
      </List>
      <hr />
      <Caption text={`You selected ${selectedCount} letters`} />
    </>
  );
};

export default Task07;
