import { useState } from 'react';

import { FiPlusSquare } from 'react-icons/fi';

import UnnumList from 'components/UnnumList';

import css from './ArrayPractFirst.module.css';
import DecoratedMiniForm from 'components/DecoratedMiniForm';

// let nextId = 0;

export default function ArrayPractFirst() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <DecoratedMiniForm
        onFormSubmit={name => {
          setName(name);
          name.trim() && setArtists([...artists, name]);
          setName('');
        }}
        filling={`Add element ${name}`}
        icon={<FiPlusSquare className={css.icon} />}
      />
      <UnnumList list={artists} />
      {/* <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}
    </>
  );
}
