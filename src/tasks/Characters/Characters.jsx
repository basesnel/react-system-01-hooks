import { useState, useMemo, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import { Box, Button, List, Item, ItemFlex, ItemText, Input } from 'components';
import { initialCharacters } from 'constants';

const Characters = () => {
  useEffect(() => {
    const getCharacters = () => {
      return fetch('./jsons/characters.json').then(response => response.json());
    };

    try {
      getCharacters().then(value => {
        console.log(value);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          type="text"
          name="Character"
          value={filter}
          label="Filter"
          placeholder="Type the character's name..."
          onChange={e => setFilter(e.target.value)}
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
};

export default Characters;
