import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

import { catList } from 'constants';

import css from './Task07.module.css';
import ResponsiveImage from 'components/ResponsiveImage';

export default function Task07() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const kittens = catList(10);

  return (
    <>
      <Slider>
        {kittens.map((kitten, i) => (
          <Slide key={kitten.id} itemRef={index === i ? selectedRef : null}>
            <div
              className={
                index === i
                  ? `${css['img-slide']} ${css.active}`
                  : css['img-slide']
              }
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
            </div>
          </Slide>
        ))}
      </Slider>
      <FlexBox>
        <DecoratedButton
          caption="Next"
          onClick={() => {
            flushSync(() => {
              if (index < kittens.length - 1) {
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
    </>
  );
}
