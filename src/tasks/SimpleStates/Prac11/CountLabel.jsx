import { useState } from 'react';

import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

const CountLabel = props => {
  const { count } = props;

  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }

  return (
    <>
      <Title level={3} caption={count} />
      {trend && <Paragraph>The count is {trend}</Paragraph>}
    </>
  );
};

export default CountLabel;
