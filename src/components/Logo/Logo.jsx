import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import css from './Logo.module.css';

export default function Logo({ text }) {
  return (
    <Link className={css.logo} to="/">
      {text.substr(0, 3)}
      <span className={css.decor}>{text.substr(3)}</span>
    </Link>
  );
}

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};
