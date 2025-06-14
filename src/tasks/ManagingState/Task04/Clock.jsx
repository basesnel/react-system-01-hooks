import { Span } from 'components';
import PropTypes from 'prop-types';

const Clock = props => {
  const { color, time } = props;

  return (
    <Span centered weighted color={color}>
      {time}
    </Span>
  );
};

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Clock;
