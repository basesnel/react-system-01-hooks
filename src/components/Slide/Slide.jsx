import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Slide = props => {
  const { slideRef, children, ...delegated } = props;

  return (
    <li className={styles.slide} ref={slideRef} {...delegated}>
      {children}
    </li>
  );
};

Slide.propTypes = {
  slideRef: PropTypes.any,
  children: PropTypes.node.isRequired,
  delegated: PropTypes.any,
};

Slide.defaultProps = {
  slideRef: null,
  delegated: null,
};

export default Slide;
