import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ItemFlex = props => {
  const { children } = props;

  return <div className={styles.itemFlex}>{children}</div>;
};

ItemFlex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemFlex;
