import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import List from 'components/List';
import ListitemControlled from 'components/ListitemControlled';
import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialCountersList } from 'constants';

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
    <List message="There is no elements in list.">
      {counters.map((counter, i) => (
        <ListitemControlled key={i} content={counter}>
          <DecoratedIconButton
            caption={<RiAddCircleFill />}
            onClick={() => {
              handleIncrementalClick(i);
            }}
          />
        </ListitemControlled>
      ))}
    </List>
  );
}
