import { useState } from 'react';

import { MiniForm, List, Item, ItemFlex, ItemText } from 'components';

import { RiAddCircleFill } from 'react-icons/ri';

const Prac01 = () => {
  const [artist, setArtist] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <MiniForm
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
};

export default Prac01;
