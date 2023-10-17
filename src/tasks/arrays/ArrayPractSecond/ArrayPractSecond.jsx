import { useState } from 'react';

import { RiIndeterminateCircleFill } from 'react-icons/ri';

import List from 'components/List';
import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialArtistsList } from 'constants';

import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

export default function ArrayPractSecond() {
  const [artists, setArtists] = useState(initialArtistsList);

  return (
    <>
      <List message="All elements were deleted.">
        {artists.map(artist => (
          // <ListitemControlled key={artist.id} content={artist.name}>
          //   <DecoratedIconButton
          //     caption={<RiIndeterminateCircleFill />}
          //     onClick={() => {
          //       setArtists(artists.filter(a => a.id !== artist.id));
          //     }}
          //   />
          // </ListitemControlled>
          <Item key={artist.id}>
            <ItemFlex>
              <ItemText content={artist.name} />
              <DecoratedIconButton
                caption={<RiIndeterminateCircleFill />}
                onClick={() => {
                  setArtists(artists.filter(a => a.id !== artist.id));
                }}
              />
            </ItemFlex>
          </Item>
        ))}
      </List>
      {/* <ul>
        {artists.map((artist, idx) => (
          <li key={idx}>
            {artist}{' '}
            <DecoratedButton
              caption="Delete"
              onClick={() => {
                setArtists(
                  artists.filter(artist => artists.indexOf(artist) !== idx)
                );
              }}
            />
          </li>
        ))}
      </ul> */}
    </>
  );
}
