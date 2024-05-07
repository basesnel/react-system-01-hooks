import PropTypes from 'prop-types';

import css from './ItemLabel.module.css';

export default function ItemLabel(props) {
  const { children } = props;
  const { itemLabel } = css;

  return <label className={itemLabel}>{children}</label>;
}

ItemLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
