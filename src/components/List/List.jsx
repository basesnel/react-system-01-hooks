import PropTypes from 'prop-types';

import css from './List.module.css';

export default function List({ children }) {
  // if (children.length) return <ul className={css.list}>{children}</ul>;
  // return null;

  return children.length ? <ul className={css.list}>{children}</ul> : null;
}

List.propTypes = {
  children: PropTypes.node,
};
