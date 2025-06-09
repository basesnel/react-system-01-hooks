import PropTypes from 'prop-types';

const Clock = props => {
  const { color, time } = props;

  return <h3 style={{ color: color }}>{time}</h3>;
};

export default Clock;

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
