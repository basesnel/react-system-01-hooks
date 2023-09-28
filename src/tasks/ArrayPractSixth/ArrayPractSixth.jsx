import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

const initialList = [
  { id: 0, name: 'Big Bellies' },
  { id: 1, name: 'Lunar Landscape' },
  { id: 2, name: 'Terracota Army' },
];

export default function ArrayPractSixth() {
  const [list, setList] = useState(initialList);

  const handleClick = () => {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  };

  return (
    <>
      <DecoratedButton caption="Reverse" onClick={handleClick} />
      <ul>
        {list.map(artWork => (
          <li key={artWork.id}>{artWork.name}</li>
        ))}
      </ul>
    </>
  );
}
