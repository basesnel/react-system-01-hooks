import PropTypes from 'prop-types';
import { cardContext } from 'contexts';
import { H } from 'components';

import styles from './styles.module.css';

const Card = props => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <cardContext.Provider value={true}>
          <H level={2}>{title}</H>
        </cardContext.Provider>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;
