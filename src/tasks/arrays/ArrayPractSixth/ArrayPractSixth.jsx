import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

import { initialSixArtsList } from 'constants';

import css from './ArrayPractSixth.module.css';
import List from 'components/List';

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
          <li key={art.id} className={css.item}>
            <div className={css['item-flex']}>
              <span className={css['item-content']}>{art.title}</span>
            </div>
          </li>
        ))}
      </List>
    </>
  );
}
