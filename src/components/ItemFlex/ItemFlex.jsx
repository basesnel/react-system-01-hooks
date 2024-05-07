import PropTypes from 'prop-types';

import css from './ItemFlex.module.css';

export default function ItemFlex(props) {
  const { children } = props;
  const { itemFlex } = css;

  return <div className={itemFlex}>{children}</div>;
}

ItemFlex.propTypes = {
  children: PropTypes.node.isRequired,
};
