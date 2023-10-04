import { useState } from 'react';

import { FiEdit } from 'react-icons/fi';

import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';
import UnnumList from 'components/UnnumList';

import css from './ArrayPractFirst.module.css';
import FlexBox from 'components/FlexBox';

// let nextId = 0;

export default function ArrayPractFirst() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <FlexBox>
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
            // setArtists([...artists, { id: nextId++, name: name }]);
            name.trim() && setArtists([...artists, name]);
            setName('');
          }}
        />
      </FlexBox>
      <UnnumList list={artists} />
      {/* <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}
    </>
  );
}
