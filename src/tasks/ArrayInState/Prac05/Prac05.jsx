import { useState } from 'react';

import { RiInsertRowBottom } from 'react-icons/ri';

import { MiniForm, List, Item, ItemFlex, ItemText } from 'components';

import { initialArtistsList } from 'constants';

let nextId = 3;

const Prac05 = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtistsList);

  const handleClick = name => {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  };

  return (
    <>
      <MiniForm
        onFormSubmit={handleClick}
        filling={`Insert element ${name}`}
        icon={<RiInsertRowBottom />}
      />
      <List message="There is no elements in list.">
        {artists.map(artist => (
          <Item key={artist.id}>
            <ItemFlex>
              <ItemText content={artist.name} />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Prac05;
