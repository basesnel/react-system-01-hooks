import PropTypes from 'prop-types';

import styles from './styles.module.css';

const BackgroundT02T03 = props => {
  const { position } = props;

  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: '100%',
        height: 250,
        backgroundColor: 'rgba(200, 200, 0, 0.2)',
      }}
      className={styles.background}
    />
  );
};

BackgroundT02T03.propTypes = {
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    .isRequired,
};

export default BackgroundT02T03;
