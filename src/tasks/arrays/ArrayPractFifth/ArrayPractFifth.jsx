import { useState } from 'react';

import { RiInsertRowBottom } from 'react-icons/ri';

import DecoratedMiniForm from 'components/DecoratedMiniForm';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

import { initialArtistsList } from 'constants';

let nextId = 3;

export default function ArrayPractFifth() {
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
      <DecoratedMiniForm
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
}
