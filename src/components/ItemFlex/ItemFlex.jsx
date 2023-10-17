import PropTypes from 'prop-types';

import css from './ItemFlex.module.css';

export default function ItemFlex({ children }) {
  return <div className={css['item-flex']}>{children}</div>;
}

ItemFlex.propTypes = {
  children: PropTypes.node.isRequired,
};
