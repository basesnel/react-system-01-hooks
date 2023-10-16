import PropTypes from 'prop-types';

import css from './List.module.css';

export default function List({ children, message }) {
  return children.length ? (
    <ul className={css.list}>{children}</ul>
  ) : (
    <span className={css.message}>{message}</span>
  );
}

List.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string.isRequired,
};
