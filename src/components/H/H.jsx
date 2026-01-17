import { useContext } from 'react';
import PropTypes from 'prop-types';
import { mainContext, cardContext } from 'contexts';

import styles from './styles.module.css';

const H = props => {
  const { level, children } = props;
  const isMain = useContext(mainContext);
  const isCard = useContext(cardContext);

  switch (level) {
    case 0:
      throw Error('Heading must be inside a section!');

    case 1:
      return (
        <h1
          className={`${styles.heading} ${styles.heading01} ${isMain ? styles.pageTitle : ''}`}
        >
          {children}
        </h1>
      );

    case 2:
      return (
        <h2
          className={`${styles.heading} ${styles.heading02} ${isCard ? styles.cardTitle : ''}`}
        >
          {children}
        </h2>
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

H.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default H;
