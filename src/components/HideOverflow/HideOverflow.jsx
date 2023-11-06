import PropTypes from 'prop-types';

import css from './HideOverflow.module.css';

export default function HideOverflow({ children }) {
  return <div className={css['hide-overflow']}>{children}</div>;
}

HideOverflow.propTypes = {
  children: PropTypes.node.isRequired,
};
