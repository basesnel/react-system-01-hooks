import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';
import ResponsiveImage from 'components/ResponsiveImage';

import { catList } from 'constants';

export default function Prac07() {
  const itemsRef = useRef(null);

  const kittens = catList(10);

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
    const id = i < 9 ? `0${i + 1}` : `${i + 1}`;
    buttonsList.push(
      <DecoratedButton key={i} caption={id} onClick={() => scrollToId(i)} />
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
            <ResponsiveImage
              image320={`kittens/${kitten.image320}`}
              image640={`kittens/${kitten.image640}`}
              image960={`kittens/${kitten.image960}`}
              image1280={`kittens/${kitten.image1280}`}
              alt={`Kittens ${
                kitten.id < 9 ? `0${kitten.id + 1}` : `${kitten.id + 1}`
              }`}
            />
          </Slide>
        ))}
      </Slider>
      <FlexBox>{buttonsList}</FlexBox>
    </>
  );
}
