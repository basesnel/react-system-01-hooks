import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import List from 'components/List';
import Listitem from 'components/Listitem';

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
      <List message="Please, add an element to list.">
        {artists.map((item, idx) => (
          <Listitem key={idx} content={item} />
        ))}
      </List>
    </>
  );
}
