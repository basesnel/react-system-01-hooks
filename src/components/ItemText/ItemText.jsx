import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ItemText = props => {
  const { content } = props;

  return <span className={styles.itemContent}>{content}</span>;
};

ItemText.propTypes = {
  content: PropTypes.any.isRequired,
};

export default ItemText;
