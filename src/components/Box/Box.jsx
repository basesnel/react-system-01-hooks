import PropTypes from 'prop-types';

import css from './Box.module.css';

export default function Box({ children }) {
  return <section className={css.box}>{children}</section>;
}

Box.propTypes = {
  children: PropTypes.element.isRequired,
};
