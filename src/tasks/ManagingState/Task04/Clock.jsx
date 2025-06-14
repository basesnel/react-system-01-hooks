import PropTypes from 'prop-types';

const Clock = props => {
  const { color, time } = props;

  return <span style={{ color: color, textAlign: 'center' }}>{time}</span>;
};

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Clock;
