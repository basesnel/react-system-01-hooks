import PropTypes from 'prop-types';
import { cardContext } from 'contexts';

import styles from './styles.module.css';

const Card = props => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <cardContext.Provider value={true}>{title}</cardContext.Provider>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;
