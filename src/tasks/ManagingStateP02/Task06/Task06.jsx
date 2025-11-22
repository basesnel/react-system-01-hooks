import { useState } from 'react';
import { Button, Title, FlexBox } from 'components';
import { trams } from 'constants';
import { FigureT06 } from '../intendendComponents';

const Task06 = () => {
  const [index, setIndex] = useState(0);
  const hasNext = index < trams.length - 1;

  const handleClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  let image = trams[index];

  return (
    <FlexBox direction="column">
      <Title level={3} caption={`Image ${index + 1} of ${trams.length}`} />
      <FigureT06 image={image} />
      <Button caption="Next" onClick={handleClick} />
    </FlexBox>
  );
};

export default Task06;
