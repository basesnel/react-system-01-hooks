import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import List from 'components/List';
import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialCountersList } from 'constants';

import css from './ArrayPractFourth.module.css';

export default function ArrayPractFourth() {
  const [counters, setCounters] = useState(initialCountersList);

  const handleIncrementalClick = index => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  };

  return (
    <List>
      {counters.map((counter, i) => (
        <li key={i} className={css.item}>
          <div className={css['item-flex']}>
            <span className={css['item-content']}>{counter}</span>
            <DecoratedIconButton
              caption={<RiAddCircleFill />}
              onClick={() => {
                handleIncrementalClick(i);
              }}
            />
          </div>
        </li>
      ))}
    </List>
  );
}
