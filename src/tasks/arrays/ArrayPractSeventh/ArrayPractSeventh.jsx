import { useState } from 'react';

import Title from 'components/Title';

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
    // const myNextList = [...myList];
    // const artWork = myNextList.find(a => a.id === artWorkId);
    // artWork.seen = nextSeen;
    // setMyList(myNextList);
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
    <ul>
      {artWorks.map(artWork => (
        <li key={artWork.id}>
          <label>
            <input
              type="checkbox"
              checked={artWork.seen}
              onChange={e => {
                onToggle(artWork.id, e.target.checked);
              }}
            />
            {artWork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
