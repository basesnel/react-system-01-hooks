import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import List from 'components/List';
import Item from 'components/Item';

import DecoratedMiniForm from 'components/DecoratedMiniForm';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText/ItemText';

export default function ArrayPractFirst() {
  const [artist, setArtist] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <DecoratedMiniForm
        onFormSubmit={name => {
          setArtist(name);
          name.trim() && setArtists([...artists, name]);
          setArtist('');
        }}
        filling={`Add element ${artist}`}
        icon={<RiAddCircleFill />}
      />
      <List message="Please, add an element to list.">
        {artists.map((item, idx) => (
          <Item key={idx}>
            <ItemFlex>
              <ItemText content={item} />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </>
  );
}
