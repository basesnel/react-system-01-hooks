import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Item = props => {
  const { children, ...delegated } = props;

  return (
    <li className={styles.item} {...delegated}>
      {children}
    </li>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  delegated: PropTypes.any,
};

Item.defaultProps = {
  delegated: null,
};

export default Item;
