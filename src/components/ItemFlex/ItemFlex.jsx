import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ItemFlex = props => {
  const { children } = props;

  return <div className={styles.flexed}>{children}</div>;
};

ItemFlex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemFlex;
