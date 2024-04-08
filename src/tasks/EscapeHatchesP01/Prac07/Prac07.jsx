import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

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
            {/* <img src={kitten.imageUrl} alt={'Cat #' + kitten.id} /> */}
            <picture>
              <source
                srcSet={`
                ${require(`../../../assets/images/kittens/${kitten.image320}.webp`)}   320w,
                ${require(`../../../assets/images/kittens/${kitten.image640}.webp`)}   640w,
                ${require(`../../../assets/images/kittens/${kitten.image960}.webp`)}   960w,
                ${require(`../../../assets/images/kittens/${kitten.image1280}.webp`)} 1280w
              `}
                type="image/webp"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <img
                loading="lazy"
                srcSet={`
                ${require(`../../../assets/images/kittens/${kitten.image320}.jpg`)}   320w,
                ${require(`../../../assets/images/kittens/${kitten.image640}.jpg`)}  640w,
                ${require(`../../../assets/images/kittens/${kitten.image960}.jpg`)}   960w,
                ${require(`../../../assets/images/kittens/${kitten.image1280}.jpg`)} 1280w
              `}
                src={require(`../../../assets/images/kittens/${kitten.image320}.jpg`)}
                alt={`Kittens ${kitten.id}`}
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </picture>
          </Slide>
        ))}
      </Slider>
      <FlexBox>{buttonsList}</FlexBox>
    </>
  );
}
