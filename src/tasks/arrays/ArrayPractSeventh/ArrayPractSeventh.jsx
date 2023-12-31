import { useState } from 'react';

import Title from 'components/Title';
import List from 'components/List';
import Item from 'components/Item';
import ItemLabel from 'components/ItemLabel';
import ItemCheckedText from 'components/ItemCheckedText/ItemCheckedText';

import { initialSevenArtsList } from 'constants';

export default function ArrayPractSeventh() {
  const [myList, setMyList] = useState(initialSevenArtsList);
  const [yourList, setYourList] = useState(initialSevenArtsList);

  function handleToggleMyList(artWorkId, nextSeen) {
    setMyList(
      myList.map(artWork => {
        if (artWork.id === artWorkId) {
          return { ...artWork, seen: nextSeen };
        } else {
          return artWork;
        }
      })
    );
  }

  function handleToggleYourList(artWorkId, nextSeen) {
    setYourList(
      yourList.map(artWork => {
        if (artWork.id === artWorkId) {
          return { ...artWork, seen: nextSeen };
        } else {
          return artWork;
        }
      })
    );
  }

  return (
    <>
      <Title level={3} caption="my list of art to see:" />
      <ItemList artWorks={myList} onToggle={handleToggleMyList} />
      <Title level={3} caption="your list of art to see:" />
      <ItemList artWorks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artWorks, onToggle }) {
  return (
    <List message="There is no elements in list.">
      {artWorks.map(artWork => (
        <Item key={artWork.id}>
          <ItemLabel>
            <input
              type="checkbox"
              name={artWork.id}
              checked={artWork.seen}
              onChange={e => {
                onToggle(artWork.id, e.target.checked);
              }}
            />
            <ItemCheckedText content={artWork.title} checked={artWork.seen} />
          </ItemLabel>
        </Item>
      ))}
    </List>
  );
}
