import { useImmer } from 'use-immer';

import { Title } from 'components';

import { initialSevenArtsList } from 'constants';

import { ItemList } from '../intendedComponents';

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

export default Prac08;
