import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

import { initialSixArtsList } from 'constants';

export default function ArrayPractSixth() {
  const [list, setList] = useState(initialSixArtsList);

  const handleClick = () => {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  };

  return (
    <>
      <DecoratedButton caption="Reverse" onClick={handleClick} />
      <ul>
        {list.map(art => (
          <li key={art.id}>{art.title}</li>
        ))}
      </ul>
    </>
  );
}
