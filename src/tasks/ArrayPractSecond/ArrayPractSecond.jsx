import DecoratedButton from 'components/DecoratedButton';
import { useState } from 'react';

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye' },
//   { id: 2, name: 'Louise Nevelson' },
// ];

let initialArtists = [
  'Marta Colvin Andrade',
  'Lamidi Olonade Fakeye',
  'Louise Nevelson',
];

export default function ArrayPractSecond() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      {/* <ul>
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
      </ul> */}
      <ul>
        {artists.map((artist, idx) => (
          <li key={idx}>
            {artist}{' '}
            <DecoratedButton
              caption="Delete"
              onClick={() => {
                // console.log(artists.indexOf(artist), idx);
                setArtists(
                  artists.filter(artist => artists.indexOf(artist) !== idx)
                );
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
