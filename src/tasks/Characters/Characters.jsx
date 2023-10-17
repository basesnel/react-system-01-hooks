import { useState, useMemo } from 'react';

import { FiFilter } from 'react-icons/fi';

import { initialCharacters } from 'constants';
import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';

import List from 'components/List';
import Listitem from 'components/Listitem';

export default function Characters() {
  const [count, setCount] = useState(0);
  const [characters] = useState(initialCharacters);
  const [filter, setFilter] = useState('');

  const visibleCharacters = useMemo(() => {
    console.log('characters is filtering ' + Date.now());
    return characters.filter(character =>
      character.toLowerCase().includes(filter)
    );
  }, [filter, characters]);

  return (
    <div>
      <DecoratedButton caption={count} onClick={() => setCount(c => c + 1)} />
      <hr />
      <DecoratedInput
        inputLabel="Filter"
        handleChange={e => setFilter(e.target.value)}
        inputValue={filter}
        icon={<FiFilter />}
      />
      <List message={`The list no contain elements with word: ${filter}.`}>
        {visibleCharacters.map((item, idx) => (
          <Listitem key={idx} content={item} />
        ))}
      </List>
    </div>
  );
}
