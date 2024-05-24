import { useImmer } from 'use-immer';

import Title from 'components/Title';
import List from 'components/List';
import Item from 'components/Item';
import ItemLabel from 'components/ItemLabel';
import ItemCheckedText from 'components/ItemCheckedText';

import { initialSevenArtsList } from 'constants';

const Prac08 = () => {
  const [myList, updateMyList] = useImmer(initialSevenArtsList);
  const [yourList, updateYourList] = useImmer(initialSevenArtsList);

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artWork = draft.find(a => a.id === id);
      artWork.seen = nextSeen;
    });
  }

  function handleToggleYourList(id, nextSeen) {
    updateYourList(draft => {
      const artWork = draft.find(a => a.id === id);
      artWork.seen = nextSeen;
    });
  }

  return (
    <>
      <Title level={3} caption="my list of art to see:" />
      <ItemList artWorks={myList} onToggle={handleToggleMyList} />
      <Title level={3} caption="your list of art to see:" />
      <ItemList artWorks={yourList} onToggle={handleToggleYourList} />
    </>
  );
};

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

export { Prac08 };
