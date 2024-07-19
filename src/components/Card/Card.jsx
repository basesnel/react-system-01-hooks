import PropTypes from 'prop-types';

import { Title } from 'components';

import styles from './styles.module.css';

const Card = props => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Title level={2} caption={title} />
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;
