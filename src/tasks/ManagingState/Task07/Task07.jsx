import { useState } from 'react';
import { initialLettersStarred } from 'constants';
// import { RiAddCircleFill } from 'react-icons/ri';
import { Title, List, Caption } from 'components';
// import PackingList from './PackingList';
import Letter from './Letter';

// const initialLetters = [
//   { id: 0, subject: 'Ready for adventure?', isStarred: true },
//   { id: 1, subject: 'Time to check in!', isStarred: false },
//   { id: 2, subject: 'Festival Begins In Just SEVEN Days!', isStarred: false },
// ];

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
      <List>
        {letters.map(letter => (
          <Letter
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
