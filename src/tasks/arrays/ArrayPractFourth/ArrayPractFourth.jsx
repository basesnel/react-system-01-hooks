import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import DecoratedButton from 'components/DecoratedButton';

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
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <DecoratedButton
            caption={<RiAddCircleFill />}
            onClick={() => {
              handleIncrementalClick(i);
            }}
          />
        </li>
      ))}
    </ul>
  );
}