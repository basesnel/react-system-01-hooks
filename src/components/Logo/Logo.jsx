import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Logo = props => {
  const { text } = props;

  return (
    <Link className={styles.logo} to="/">
      {text.substr(0, 3)}
      <span className={styles.decor}>{text.substr(3)}</span>
    </Link>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
