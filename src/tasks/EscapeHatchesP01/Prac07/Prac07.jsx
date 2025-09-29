import { forwardRef, useRef } from 'react';
import {
  Slider,
  Slide,
  ResponsiveImage,
  // FlexBox,
  Button,
  Scroll,
} from 'components';
import { catList, imageSizes } from 'constants';

import styles from './styles.module.css';

const Prac07 = () => {
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

  // const buttonsList = [];

  // for (let i = 0; i < kittens.length; i++) {
  //   const id = (i + 1).toString().padStart(2, '0');
  //   buttonsList.push(
  //     <Button key={i} caption={id} onClick={() => scrollToId(i)} />
  //   );
  // }

  return (
    <>
      <Slider>
        {kittens.map(kitten => (
          <Slide
            key={kitten.id}
            slideRef={node => {
              const map = getMap();
              if (node) {
                map.set(kitten.id, node);
              } else {
                map.delete(kitten.id);
              }
            }}
          >
            <ResponsiveImage
              isLazy="lazy"
              image320={`kittens/${kitten.image320}`}
              image640={`kittens/${kitten.image640}`}
              image960={`kittens/${kitten.image960}`}
              image1280={`kittens/${kitten.image1280}`}
              sizes={imageSizes}
              alt={`Kittens ${(kitten.id + 1).toString().padStart(2, '0')}`}
            />
          </Slide>
        ))}
      </Slider>
      {/* <FlexBox>{buttonsList}</FlexBox> */}
      <Scroll>
        <ButtonsList kittens={kittens} scrollToId={scrollToId} />
      </Scroll>
    </>
  );
};

const ButtonsList = forwardRef(({ kittens, scrollToId }, ref) => {
  const buttonsList = [];

  for (let i = 0; i < kittens.length; i++) {
    const id = (i + 1).toString().padStart(2, '0');
    buttonsList.push(
      <Button key={i} caption={id} onClick={() => scrollToId(i)} />
    );
  }

  return (
    <div ref={ref} className={styles.buttons}>
      {buttonsList}
    </div>
  );
});

export default Prac07;
