import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Slider from 'components/Slider';
import Slide from 'components/Slide';
import ResponsiveImage from 'components/ResponsiveImage';

import { imageSizes } from 'constants';

export default function Prac06() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <Slider>
        <Slide itemRef={firstCatRef}>
          <ResponsiveImage
            isLazy="lazy"
            image320="kittens/kitten-320-02"
            image640="kittens/kitten-640-02"
            image960="kittens/kitten-960-02"
            image1280="kittens/kitten-1280-02"
            sizes={imageSizes}
            alt="Tom"
          />
        </Slide>
        <Slide itemRef={secondCatRef}>
          <ResponsiveImage
            isLazy="lazy"
            image320="kittens/kitten-320-03"
            image640="kittens/kitten-640-03"
            image960="kittens/kitten-960-03"
            image1280="kittens/kitten-1280-03"
            sizes={imageSizes}
            alt="Mary"
          />
        </Slide>
        <Slide itemRef={thirdCatRef}>
          <ResponsiveImage
            isLazy="lazy"
            image320="kittens/kitten-320-05"
            image640="kittens/kitten-640-05"
            image960="kittens/kitten-960-05"
            image1280="kittens/kitten-1280-05"
            sizes={imageSizes}
            alt="Jellylorum"
          />
        </Slide>
      </Slider>
      <FlexBox>
        <Button caption="Tom" onClick={handleScrollToFirstCat} />
        <Button caption="Maru" onClick={handleScrollToSecondCat} />
        <Button caption="Jelly" onClick={handleScrollToThirdCat} />
      </FlexBox>
    </>
  );
}
