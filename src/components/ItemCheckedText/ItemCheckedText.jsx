import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ItemCheckedText = props => {
  const { content, checked = false } = props;

  const done = checked ? `${styles.checked}` : '';

  return <span className={`${styles.text} ${done}`}>{content}</span>;
};

ItemCheckedText.propTypes = {
  content: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default ItemCheckedText;
