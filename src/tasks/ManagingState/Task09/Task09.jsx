import { useState } from 'react';
import { initialLetters } from 'constants';
import { Title, List, Caption } from 'components';
import { LetterT08 } from '../intendendComponents';

const Task09 = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedCount = selectedIds.length;

  const handleToggle = toggledId => {
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter(id => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  };

  return (
    <>
      <Title level={3} caption="inbox" />
      <List message="There is no elements in list.">
        {initialLetters.map(letter => (
          <LetterT08
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </List>
      <hr />
      <Caption text={`You selected ${selectedCount} letters`} />
    </>
  );
};

export default Task09;
