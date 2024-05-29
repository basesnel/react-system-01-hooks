import { useState } from 'react';

import { RiIndeterminateCircleFill } from 'react-icons/ri';

import { List, Item, ItemFlex, ItemText, IconButton } from 'components';

import { initialArtistsList } from 'constants';

const Prac02 = () => {
  const [artists, setArtists] = useState(initialArtistsList);

  return (
    <>
      <List message="All elements were deleted.">
        {artists.map(artist => (
          <Item key={artist.id}>
            <ItemFlex>
              <ItemText content={artist.name} />
              <IconButton
                icon={<RiIndeterminateCircleFill />}
                caption="subtract"
                onClick={() => {
                  setArtists(artists.filter(a => a.id !== artist.id));
                }}
              />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Prac02;
