import { useRef } from 'react';
import { Slider, Slide, ResponsiveImage, FlexBox, Button } from 'components';
import { imageSizes } from 'constants';

const Prac06 = () => {
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
        <Slide slideRef={firstCatRef}>
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
        <Slide slideRef={secondCatRef}>
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
        <Slide slideRef={thirdCatRef}>
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
};

export default Prac06;
