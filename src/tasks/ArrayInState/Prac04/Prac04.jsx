import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { List, Item, ItemFlex, ItemText, IconButton } from 'components';
import { initialCountersList } from 'constants';

const Prac04 = () => {
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
        <Item key={i}>
          <ItemFlex>
            <ItemText content={counter} />
            <IconButton
              icon={<RiAddCircleFill />}
              caption="add"
              onClick={() => {
                handleIncrementalClick(i);
              }}
            />
          </ItemFlex>
        </Item>
      ))}
    </List>
  );
};

export default Prac04;
