import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Heading = props => {
  const { level, children } = props;

  switch (level) {
    case 0:
      throw Error('Heading must be inside a section!');

    case 1:
      return (
        <h1 className={`${styles.heading} ${styles.heading01}`}>{children}</h1>
      );

    case 2:
      return (
        <h2 className={`${styles.heading} ${styles.heading02}`}>{children}</h2>
      );

    case 3:
      return (
        <h3 className={`${styles.heading} ${styles.heading03}`}>{children}</h3>
      );

    case 4:
      return (
        <h4 className={`${styles.heading} ${styles.heading04}`}>{children}</h4>
      );

    case 5:
      return (
        <h5 className={`${styles.heading} ${styles.heading05}`}>{children}</h5>
      );

    case 6:
      return (
        <h6 className={`${styles.heading} ${styles.heading06}`}>{children}</h6>
      );

    default:
      throw Error('Unknown level: ' + level);
  }
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Heading;
