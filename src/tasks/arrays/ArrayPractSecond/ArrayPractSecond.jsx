import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

import { initialArtistsList } from 'constants';

export default function ArrayPractSecond() {
  const [artists, setArtists] = useState(initialArtistsList);

  return (
    <>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <DecoratedButton
              caption="Delete"
              onClick={() => {
                setArtists(artists.filter(a => a.id !== artist.id));
              }}
            />
          </li>
        ))}
      </ul>
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
