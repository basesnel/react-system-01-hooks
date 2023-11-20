import PropTypes from 'prop-types';

import css from './Slide.module.css';

export default function Slide({ children }) {
  return <li className={css.slide}>{children}</li>;
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
};
