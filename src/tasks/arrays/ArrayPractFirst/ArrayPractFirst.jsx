import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import UnnumList from 'components/UnnumList';

// import css from './ArrayPractFirst.module.css';
import DecoratedMiniForm from 'components/DecoratedMiniForm';

export default function ArrayPractFirst() {
  const [artist, setArtist] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <DecoratedMiniForm
        onFormSubmit={name => {
          setArtist(name);
          name.trim() && setArtists([...artists, name]);
          setArtist('');
        }}
        filling={`Add element ${artist}`}
        icon={<RiAddCircleFill />}
      />
      <UnnumList list={artists} />
    </>
  );
}
