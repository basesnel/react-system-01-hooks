import PropTypes from 'prop-types';

import styles from './styles.module.css';

const NumberedList = props => {
  const { message, listRef, children } = props;

  return children.length ? (
    <ol className={styles.list} ref={listRef}>
      {children}
    </ol>
  ) : (
    <span className={styles.message}>{message}</span>
  );
};

NumberedList.propTypes = {
  message: PropTypes.string.isRequired,
  listRef: PropTypes.any,
  children: PropTypes.node,
};

NumberedList.defaultProps = {
  listRef: null,
  children: null,
};

export default NumberedList;
