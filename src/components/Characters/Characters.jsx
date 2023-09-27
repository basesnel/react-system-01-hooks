import { useState, useMemo } from 'react';

import { FiFilter } from 'react-icons/fi';

import { initialCharacters } from 'constants';
import DecoratedButton from 'components/DecoratedButton';
import DecoratedInput from 'components/DecoratedInput';

import css from './Characters.module.css';
import UnnumList from 'components/UnnumList';

export default function Characters() {
  const [count, setCount] = useState(0);
  const [characters] = useState(initialCharacters);
  const [filter, setFilter] = useState('');

  // const visibleCharacters = characters.filter(character =>
  //   character.toLowerCase().includes(filter)
  // );

  const visibleCharacters = useMemo(() => {
    console.log('characters is filtering ' + Date.now());
    return characters.filter(character =>
      character.toLowerCase().includes(filter)
    );
  }, [filter, characters]);

  // const visibleCharacters = (() => {
  //   console.log('characters is filtering ' + Date.now());
  //   return characters.filter(character =>
  //     character.toLowerCase().includes(filter)
  //   );
  // })();

  return (
    <div>
      <DecoratedButton caption={count} onClick={() => setCount(c => c + 1)} />
      <hr />
      {/* <input onChange={e => setFilter(e.target.value)} value={filter} /> */}
      <DecoratedInput
        inputLabel="Filter"
        handleChange={e => setFilter(e.target.value)}
        inputValue={filter}
        icon={<FiFilter className={css.icon} />}
      />
      <UnnumList list={visibleCharacters} />
      {/* <ul>
        {visibleCharacters.map((character, idx) => (
          <li key={idx} className={css.item}>
            {character}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
