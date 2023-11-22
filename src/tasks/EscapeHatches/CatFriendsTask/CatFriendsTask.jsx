import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

import css from './CatFriendsTask.module.css';

export default function CatFriendsTask() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption="Next"
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            });
            selectedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
        />
      </FlexBox>
      <Slider>
        {catList.map((cat, i) => (
          <Slide key={cat.id} itemRef={index === i ? selectedRef : null}>
            <img
              className={
                index === i
                  ? `${css['img-slide']} ${css.active}`
                  : css['img-slide']
              }
              src={cat.imageUrl}
              alt={'Cat #' + cat.id}
            />
          </Slide>
        ))}
      </Slider>
    </>
  );
}

const catList = [];

for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
