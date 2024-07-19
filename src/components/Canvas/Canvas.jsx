import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Canvas = props => {
  const { children, onPointerMove, ...delegated } = props;

  return (
    <div onPointerMove={onPointerMove} className={styles.canvas} {...delegated}>
      {children}
    </div>
  );
};

Canvas.propTypes = {
  children: PropTypes.any.isRequired,
  onPointerMove: PropTypes.func,
  delegated: PropTypes.any,
};

Canvas.defaultProps = {
  onPointerMove: null,
  delegated: null,
};

export default Canvas;
