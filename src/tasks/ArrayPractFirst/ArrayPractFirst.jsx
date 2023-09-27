import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

import css from './ArrayPractFirst.module.css';

let nextId = 0;

export default function ArrayPractFirst() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

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
      <DecoratedButton
        caption="Add"
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
          setName('');
        }}
      />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
