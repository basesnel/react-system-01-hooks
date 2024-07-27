import { useState } from 'react';
import { Title } from 'components';
import { initialSevenArtsList } from 'constants';
import { ItemListP07P08 } from '../intendedComponents';

const Prac07 = () => {
  const [myList, setMyList] = useState(initialSevenArtsList);
  const [yourList, setYourList] = useState(initialSevenArtsList);

  const handleToggleMyList = (artWorkId, nextSeen) => {
    setMyList(
      myList.map(artWork => {
        if (artWork.id === artWorkId) {
          return { ...artWork, seen: nextSeen };
        } else {
          return artWork;
        }
      })
    );
  };

  const handleToggleYourList = (artWorkId, nextSeen) => {
    setYourList(
      yourList.map(artWork => {
        if (artWork.id === artWorkId) {
          return { ...artWork, seen: nextSeen };
        } else {
          return artWork;
        }
      })
    );
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

export default Prac07;
