import { useImmer } from 'use-immer';
import { Title } from 'components';
import { initialSevenArtsList } from 'constants';
import { ItemListP07P08 } from '../intendedComponents';

const Prac08 = () => {
  const [myList, updateMyList] = useImmer(initialSevenArtsList);
  const [yourList, updateYourList] = useImmer(initialSevenArtsList);

  const handleToggleMyList = (id, nextSeen) => {
    updateMyList(draft => {
      const artWork = draft.find(a => a.id === id);
      artWork.seen = nextSeen;
    });
  };

  const handleToggleYourList = (id, nextSeen) => {
    updateYourList(draft => {
      const artWork = draft.find(a => a.id === id);
      artWork.seen = nextSeen;
    });
  };

  return (
    <>
      <Title level={3} caption="my list of art to see:" />
      <ItemListP07P08 artWorks={myList} onToggle={handleToggleMyList} />
      <Title level={3} caption="your list of art to see:" />
      <ItemListP07P08 artWorks={yourList} onToggle={handleToggleYourList} />
    </>
  );
};

export default Prac08;
