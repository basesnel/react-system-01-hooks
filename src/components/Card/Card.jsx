import PropTypes from 'prop-types';
import { cardContext } from 'contexts';
import { H } from 'components';

import styles from './styles.module.css';

const Card = props => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <cardContext.Provider value={true}>
        <div className={styles.header}>
          <H level={2}>{title}</H>
        </div>
        <div className={styles.content}>{children}</div>
      </cardContext.Provider>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;
