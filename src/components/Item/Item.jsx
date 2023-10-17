import PropTypes from 'prop-types';

import css from './Item.module.css';

export default function Item({ children, ...delegated }) {
  return (
    <li className={css.item} {...delegated}>
      {children}
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
};
