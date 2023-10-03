import { useState } from 'react';

import { FiEdit } from 'react-icons/fi';

import DecoratedInput from 'components/DecoratedInput';
import DecoratedButton from 'components/DecoratedButton';

import { initialArtistsList } from 'constants';

import css from './ArrayPractFifth.module.css';

let nextId = 3;

export default function ArrayPractFifth() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtistsList);

  const handleClick = () => {
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
      <DecoratedInput
        inputType="text"
        inputName="name"
        inputValue={name}
        inputLabel="name"
        handleChange={e => setName(e.target.value)}
        icon={<FiEdit className={css.icon} />}
      />
      <DecoratedButton caption="Insert" onClick={handleClick} />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
