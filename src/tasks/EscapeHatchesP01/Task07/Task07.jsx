import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Slider, Slide, ResponsiveImage, FlexBox, Button } from 'components';
import { catList, imageSizes } from 'constants';

import styles from './styles.module.css';

const Task07 = () => {
  const { imageSlide, active } = styles;

  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const kittens = catList(10);

  return (
    <>
      <Slider>
        {kittens.map((kitten, i) => (
          <Slide key={kitten.id} slideRef={index === i ? selectedRef : null}>
            <div
              className={index === i ? `${imageSlide} ${active}` : imageSlide}
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
            </div>
          </Slide>
        ))}
      </Slider>
      <FlexBox>
        <Button
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
};

export default Task07;
