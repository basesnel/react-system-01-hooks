import { useState } from 'react';

import { RiIndeterminateCircleFill } from 'react-icons/ri';

import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';
import IconButton from 'components/IconButton';

import { initialArtistsList } from 'constants';

export default function Prac02() {
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
}
