import { useState } from 'react';

import List from 'components/List';
import Listitem from 'components/Listitem';
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
      <List message="There is no elements in list.">
        {list.map(art => (
          <Listitem key={art.id} content={art.title} />
        ))}
      </List>
    </>
  );
}
