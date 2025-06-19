import { useState } from 'react';
import { initialLetters } from 'constants';
import { Title, List, Caption } from 'components';
import { LetterT08 } from '../intendendComponents';

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
      <Title level={3} caption="inbox" />
      <List message="There is no elements in list.">
        {initialLetters.map(letter => (
          <LetterT08
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </List>
      <hr />
      <Caption text={`You selected ${selectedCount} letters`} />
    </>
  );
};

export default Task08;
