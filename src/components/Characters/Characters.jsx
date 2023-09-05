import { useState } from 'react';

import { initialCharacters } from 'constants';
import DecoratedButton from 'components/DecoratedButton';

export default function Characters() {
  const [count, setCount] = useState(0);
  const [characters] = useState(initialCharacters);
  const [filter, setFilter] = useState('');

  const visibleCharacters = characters.filter(character =>
    character.toLowerCase().includes(filter)
  );

  return (
    <div>
      <DecoratedButton caption={count} onClick={() => setCount(c => c + 1)} />
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleCharacters.map((character, idx) => (
          <li key={idx}>{character}</li>
        ))}
      </ul>
    </div>
  );
}
