import { useState } from 'react';

import { FiEdit } from 'react-icons/fi';

import DecoratedInput from 'components/DecoratedInput';
import DecoratedButton from 'components/DecoratedButton';
import Grid from 'components/Grid';

import css from './ArrayPractFifth.module.css';

let nextId = 3;

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function ArrayPractFifth() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

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
      <Grid>
        <DecoratedInput
          inputType="text"
          inputName="name"
          inputValue={name}
          inputLabel="name"
          handleChange={e => setName(e.target.value)}
          icon={<FiEdit className={css.icon} />}
        />
        <DecoratedButton caption="Insert" onClick={handleClick} />
      </Grid>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
