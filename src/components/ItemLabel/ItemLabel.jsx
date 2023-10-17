import PropTypes from 'prop-types';

import css from './ItemLabel.module.css';

export default function ItemLabel({ children }) {
  return <label className={css['item-flex']}>{children}</label>;
}

ItemLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
