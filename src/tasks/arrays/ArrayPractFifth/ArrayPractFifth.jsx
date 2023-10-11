import { useState } from 'react';

import { RiInsertRowBottom } from 'react-icons/ri';

import { initialArtistsList } from 'constants';

import css from './ArrayPractFifth.module.css';
import DecoratedMiniForm from 'components/DecoratedMiniForm';

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
        icon={<RiInsertRowBottom className={css.icon} />}
      />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
