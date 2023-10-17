import { useImmer } from 'use-immer';

import { initialSevenArtsList } from 'constants';

import Title from 'components/Title';
import List from 'components/List';
import Item from 'components/Item';
import ItemLabel from 'components/ItemLabel';
import ItemText from 'components/ItemText';

export default function ArrayPractEighth() {
  const [myList, updateMyList] = useImmer(initialSevenArtsList);
  const [yourList, updateYourList] = useImmer(initialSevenArtsList);

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artWork = draft.find(a => a.id === id);
      artWork.seen = nextSeen;
    });
    // setMyList(
    //   myList.map(artWork => {
    //     if (artWork.id === artWorkId) {
    //       return { ...artWork, seen: nextSeen };
    //     } else {
    //       return artWork;
    //     }
    //   })
    // );
    // const myNextList = [...myList];
    // const artWork = myNextList.find(a => a.id === artWorkId);
    // artWork.seen = nextSeen;
    // setMyList(myNextList);
  }

  function handleToggleYourList(id, nextSeen) {
    updateYourList(draft => {
      const artWork = draft.find(a => a.id === id);
      artWork.seen = nextSeen;
    });
    // setYourList(
    //   yourList.map(artWork => {
    //     if (artWork.id === artWorkId) {
    //       return { ...artWork, seen: nextSeen };
    //     } else {
    //       return artWork;
    //     }
    //   })
    // );
    // const yourNextList = [...yourList];
    // const artWork = yourNextList.find(a => a.id === artWorkId);
    // artWork.seen = nextSeen;
    // setYourList(yourNextList);
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
            <ItemText content={artWork.title} />
          </ItemLabel>
        </Item>
      ))}
    </List>
  );
}
