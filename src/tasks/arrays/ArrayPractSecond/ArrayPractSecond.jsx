import { useState } from 'react';

import { RiIndeterminateCircleFill } from 'react-icons/ri';

import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialArtistsList } from 'constants';

import css from './ArrayPractSecond.module.css';

export default function ArrayPractSecond() {
  const [artists, setArtists] = useState(initialArtistsList);

  return (
    <>
      <ul>
        {artists.map(artist => (
          <li key={artist.id} className={css.item}>
            <div className={css['item-flex']}>
              <span className={css['item-content']}>{artist.name}</span>
              <DecoratedIconButton
                caption={<RiIndeterminateCircleFill />}
                onClick={() => {
                  setArtists(artists.filter(a => a.id !== artist.id));
                }}
              />
            </div>
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
