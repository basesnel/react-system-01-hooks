import PropTypes from 'prop-types';

import css from './Item.module.css';

const Item = props => {
  const { children, ...delegated } = props;
  const { item } = css;

  return (
    <li className={item} {...delegated}>
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
