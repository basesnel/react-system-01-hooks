import { useImmer } from 'use-immer';

import { initialList } from 'constants';

import Title from 'components/Title';

const initList = initialList;

export default function ArrayPractEighth() {
  const [myList, updateMyList] = useImmer(initList);
  const [yourList, updateYourList] = useImmer(initList);

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
      <Title level={3} caption="My list of art to see:" />
      <ItemList artWorks={myList} onToggle={handleToggleMyList} />
      <Title level={3} caption="Your list of art to see:" />
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
