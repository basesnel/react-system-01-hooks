import { useRef } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

export default function CatFriends() {
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
        <Slide>
          <img
            src="https://placekitten.com/g/200/200"
            alt="Tom"
            ref={firstCatRef}
          />
        </Slide>
        <Slide>
          <img
            src="https://placekitten.com/g/300/200"
            alt="Maru"
            ref={secondCatRef}
          />
        </Slide>
        <Slide>
          <img
            src="https://placekitten.com/g/250/200"
            alt="Jellylorum"
            ref={thirdCatRef}
          />
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
