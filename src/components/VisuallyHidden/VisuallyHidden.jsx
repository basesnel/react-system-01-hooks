import PropTypes from 'prop-types';

import styles from './styles.module.css';

const VisuallyHidden = props => {
  const { children, ...delegated } = props;

  return (
    <span className={styles.visuallyHidden} {...delegated}>
      {children}
    </span>
  );
};

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
  delegated: PropTypes.any,
};

VisuallyHidden.defaultProps = {
  delegated: null,
};

export default VisuallyHidden;
