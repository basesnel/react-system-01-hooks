import DecoratedButton from 'components/DecoratedButton';
import { useState } from 'react';

const initialCounters = [0, 0, 0];

export default function ArrayPractFourth() {
  const [counters, setCounters] = useState(initialCounters);

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
            caption="+1"
            onClick={() => {
              handleIncrementalClick(i);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
