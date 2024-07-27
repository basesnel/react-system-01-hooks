import PropTypes from 'prop-types';

import styles from './styles.module.css';

const FieldOverlayP03P04 = props => {
  const { children } = props;

  return <div className={styles.fieldOverlay}>{children}</div>;
};

FieldOverlayP03P04.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FieldOverlayP03P04;
