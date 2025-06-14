import PropTypes from 'prop-types';

const Clock = props => {
  const { color, time } = props;

  return <h3 style={{ color: color, textAlign: 'center' }}>{time}</h3>;
};

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Clock;
