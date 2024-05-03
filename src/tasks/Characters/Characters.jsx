import { useState, useMemo } from 'react';

import { FiFilter } from 'react-icons/fi';

import Box from 'components/Box';
import Button from 'components/Button';
import Input from 'components/Input';
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
      <Button caption={count} onClick={() => setCount(c => c + 1)} />
      <hr />
      <Box>
        <Input
          inputLabel="Filter"
          inputType="text"
          inputName="Character"
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
