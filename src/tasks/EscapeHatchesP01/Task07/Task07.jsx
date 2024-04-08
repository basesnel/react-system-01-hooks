import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

import { catList } from 'constants';

import css from './Task07.module.css';

export default function Task07() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const kittens = catList(10);

  return (
    <>
      <Slider>
        {kittens.map((kitten, i) => (
          <Slide key={kitten.id} itemRef={index === i ? selectedRef : null}>
            {/* <img
              className={
                index === i
                  ? `${css['img-slide']} ${css.active}`
                  : css['img-slide']
              }
              src={kitten.imageUrl}
              alt={'Cat #' + kitten.id}
            /> */}
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
                className={
                  index === i
                    ? `${css['img-slide']} ${css.active}`
                    : css['img-slide']
                }
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
