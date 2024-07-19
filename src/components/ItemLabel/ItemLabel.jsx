import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ItemLabel = props => {
  const { children } = props;

  return <label className={styles.itemLabel}>{children}</label>;
};

ItemLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemLabel;
