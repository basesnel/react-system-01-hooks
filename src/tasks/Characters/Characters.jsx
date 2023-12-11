import { useState, useMemo } from 'react';

import { FiFilter } from 'react-icons/fi';

import Box from 'components/Box';
import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

import { initialCharacters } from 'constants';

export default function Characters() {
  const [count, setCount] = useState(0);
  const [characters] = useState(initialCharacters);
  const [filter, setFilter] = useState('');

  const visibleCharacters = useMemo(() => {
    console.log('characters is filtering ' + Date.now());
    return characters.filter(character =>
      character.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }, [filter, characters]);

  return (
    <div>
      <DecoratedButton caption={count} onClick={() => setCount(c => c + 1)} />
      <hr />
      <Box>
        <DecoratedInput
          inputLabel="Filter"
          handleChange={e => setFilter(e.target.value)}
          inputValue={filter}
          icon={<FiFilter />}
        />
      </Box>
      <List message={`The list no contain elements with word: ${filter}.`}>
        {visibleCharacters.map((item, idx) => (
          <Item key={idx}>
            <ItemFlex>
              <ItemText content={item} />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </div>
  );
}
