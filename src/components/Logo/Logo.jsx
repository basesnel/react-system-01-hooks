import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import css from './Logo.module.css';

const Logo = props => {
  const { text } = props;
  const { logo, decor } = css;

  return (
    <Link className={logo} to="/">
      {text.substr(0, 3)}
      <span className={decor}>{text.substr(3)}</span>
    </Link>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
