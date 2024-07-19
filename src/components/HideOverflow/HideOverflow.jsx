import PropTypes from 'prop-types';

import styles from './styles.module.css';

const HideOverflow = props => {
  const { children } = props;

  return <div className={styles.hideOverflow}>{children}</div>;
};

HideOverflow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HideOverflow;
