import PropTypes from 'prop-types';

import { Title } from 'components';

import styles from './styles.module.css';

const Card = props => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Title level={2} caption={title} />
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
