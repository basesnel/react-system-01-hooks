import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ItemFlex = props => {
  const { children, spaceBetween } = props;

  const styledFlex = () => {
    if (spaceBetween) {
      return `${styles.flexed} ${styles.spaceBetween}`;
    }

    return `${styles.flexed}`;
  };

  return <div className={styledFlex()}>{children}</div>;
};

ItemFlex.propTypes = {
  children: PropTypes.node.isRequired,
  spaceBetween: PropTypes.bool,
};

ItemFlex.defaultProps = {
  spaceBetween: null,
};

export default ItemFlex;
