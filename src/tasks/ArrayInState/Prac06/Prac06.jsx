import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

import { initialSixArtsList } from 'constants';

const Prac06 = () => {
  const [list, setList] = useState(initialSixArtsList);

  const handleClick = () => {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  };

  return (
    <>
      <FlexBox>
        <Button caption="Reverse" onClick={handleClick} />
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
};

export default Prac06;
