import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

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
      <FlexBox>
        <DecoratedButton caption="Reverse" onClick={handleClick} />
      </FlexBox>
      <List message="There is no elements in list.">
        {list.map(art => (
          <Item key={art.id}>
            <ItemFlex>
              <ItemText content={art.title} />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </>
  );
}
