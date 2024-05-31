import { useState } from 'react';

import PropTypes from 'prop-types';

import { Title, Paragraph } from 'components';

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

CountLabel.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CountLabel;
