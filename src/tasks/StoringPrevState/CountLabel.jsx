import { useState } from 'react';

import Title from 'components/Title';
import Text from 'components/Text';

export default function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }

  return (
    <>
      <Title level={3} caption={count} />
      {trend && <Text>The count is {trend}</Text>}
    </>
  );
}
