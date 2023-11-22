import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

export default function RefCallBack() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  const buttonsList = [];

  for (let i = 0; i < length; i++) {
    buttonsList.push(
      <DecoratedButton key={i} caption={i} onClick={() => scrollToId(i)} />
    );
  }

  return (
    <>
      <Slider>
        {catList.map(cat => (
          <Slide
            key={cat.id}
            itemRef={node => {
              const map = getMap();
              if (node) {
                map.set(cat.id, node);
              } else {
                map.delete(cat.id);
              }
            }}
          >
            <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
          </Slide>
        ))}
      </Slider>
      <FlexBox>{buttonsList}</FlexBox>
    </>
  );
}

const length = 10;

const catList = [];
for (let i = 0; i < length; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
