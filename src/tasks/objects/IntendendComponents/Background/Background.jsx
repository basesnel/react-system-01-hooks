import PropTypes from 'prop-types';

import css from './Background.module.css';

export default function Background({ position }) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: '100%',
        height: 250,
        backgroundColor: 'rgba(200, 200, 0, 0.2)',
      }}
      className={css.background}
    />
  );
}

Background.propTypes = {
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
};
