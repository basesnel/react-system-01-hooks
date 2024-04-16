import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';
import ResponsiveImage from 'components/ResponsiveImage';

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
            id={2}
            image320="kitten-320-02"
            image640="kitten-640-02"
            image960="kitten-960-02"
            image1280="kitten-1280-02"
          />
          {/* <picture>
            <source
              srcSet={`
                ${require(`../../../assets/images/kittens/kitten-320-02.webp`)}   320w,
                ${require(`../../../assets/images/kittens/kitten-640-02.webp`)}   640w,
                ${require(`../../../assets/images/kittens/kitten-960-02.webp`)}   960w,
                ${require(`../../../assets/images/kittens/kitten-1280-02.webp`)} 1280w
              `}
              type="image/webp"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <img
              loading="lazy"
              srcSet={`
                ${require(`../../../assets/images/kittens/kitten-320-02.jpg`)}   320w,
                ${require(`../../../assets/images/kittens/kitten-640-02.jpg`)}  640w,
                ${require(`../../../assets/images/kittens/kitten-960-02.jpg`)}   960w,
                ${require(`../../../assets/images/kittens/kitten-1280-02.jpg`)} 1280w
              `}
              src={require(`../../../assets/images/kittens/kitten-320-02.jpg`)}
              alt="Tom"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </picture> */}
        </Slide>
        <Slide itemRef={secondCatRef}>
          <ResponsiveImage
            id={3}
            image320="kitten-320-03"
            image640="kitten-640-03"
            image960="kitten-960-03"
            image1280="kitten-1280-03"
          />
          {/* <picture>
            <source
              srcSet={`
                ${require(`../../../assets/images/kittens/kitten-320-03.webp`)}   320w,
                ${require(`../../../assets/images/kittens/kitten-640-03.webp`)}   640w,
                ${require(`../../../assets/images/kittens/kitten-960-03.webp`)}   960w,
                ${require(`../../../assets/images/kittens/kitten-1280-03.webp`)} 1280w
              `}
              type="image/webp"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <img
              loading="lazy"
              srcSet={`
                ${require(`../../../assets/images/kittens/kitten-320-03.jpg`)}   320w,
                ${require(`../../../assets/images/kittens/kitten-640-03.jpg`)}   640w,
                ${require(`../../../assets/images/kittens/kitten-960-03.jpg`)}   960w,
                ${require(`../../../assets/images/kittens/kitten-1280-03.jpg`)} 1280w
              `}
              src={require(`../../../assets/images/kittens/kitten-320-03.jpg`)}
              alt="Maru"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </picture> */}
        </Slide>
        <Slide itemRef={thirdCatRef}>
          <ResponsiveImage
            id={5}
            image320="kitten-320-05"
            image640="kitten-640-05"
            image960="kitten-960-05"
            image1280="kitten-1280-05"
          />
          {/* <picture>
            <source
              srcSet={`
                ${require(`../../../assets/images/kittens/kitten-320-05.webp`)}   320w,
                ${require(`../../../assets/images/kittens/kitten-640-05.webp`)}   640w,
                ${require(`../../../assets/images/kittens/kitten-960-05.webp`)}   960w,
                ${require(`../../../assets/images/kittens/kitten-1280-05.webp`)} 1280w
              `}
              type="image/webp"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <img
              loading="lazy"
              srcSet={`
                ${require(`../../../assets/images/kittens/kitten-320-05.jpg`)}   320w,
                ${require(`../../../assets/images/kittens/kitten-640-05.jpg`)}   640w,
                ${require(`../../../assets/images/kittens/kitten-960-05.jpg`)}   960w,
                ${require(`../../../assets/images/kittens/kitten-1280-05.jpg`)} 1280w
              `}
              src={require(`../../../assets/images/kittens/kitten-320-05.jpg`)}
              alt="Jellylorum"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </picture> */}
        </Slide>
      </Slider>
      <FlexBox>
        <DecoratedButton caption="Tom" onClick={handleScrollToFirstCat} />
        <DecoratedButton caption="Maru" onClick={handleScrollToSecondCat} />
        <DecoratedButton caption="Jelly" onClick={handleScrollToThirdCat} />
      </FlexBox>
    </>
  );
}
