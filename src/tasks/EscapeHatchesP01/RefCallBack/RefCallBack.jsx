import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

import { catList } from 'constants';

export default function RefCallBack() {
  const itemsRef = useRef(null);

  const kittens = catList(18);

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

  for (let i = 0; i < kittens.length; i++) {
    buttonsList.push(
      <DecoratedButton key={i} caption={i} onClick={() => scrollToId(i)} />
    );
  }

  return (
    <>
      <Slider>
        {kittens.map(kitten => (
          <Slide
            key={kitten.id}
            itemRef={node => {
              const map = getMap();
              if (node) {
                map.set(kitten.id, node);
              } else {
                map.delete(kitten.id);
              }
            }}
          >
            <img src={kitten.imageUrl} alt={'Cat #' + kitten.id} />
          </Slide>
        ))}
      </Slider>
      <FlexBox>{buttonsList}</FlexBox>
    </>
  );
}
