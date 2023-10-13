import { useState } from 'react';

import { RiInsertRowBottom } from 'react-icons/ri';

import List from 'components/List';
import DecoratedMiniForm from 'components/DecoratedMiniForm';

import { initialArtistsList } from 'constants';

import css from './ArrayPractFifth.module.css';

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
        icon={<RiInsertRowBottom />}
      />
      <List>
        {artists.map(artist => (
          <li key={artist.id} className={css.item}>
            <div className={css['item-flex']}>
              <span className={css['item-content']}>{artist.name}</span>
            </div>
          </li>
        ))}
      </List>
    </>
  );
}
