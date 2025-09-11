import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Title = props => {
  const { level, caption } = props;

  switch (level) {
    case 1:
      return <h1 className={styles.title01}>{caption}</h1>;

    case 2:
      return <h2 className={styles.title02}>{caption}</h2>;

    case 3:
      return <h3 className={styles.title03}>{caption}</h3>;

    case 4:
      return <h4 className={styles.title04}>{caption}</h4>;

    default:
      return null;
  }
};

Title.propTypes = {
  level: PropTypes.number.isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Title;
