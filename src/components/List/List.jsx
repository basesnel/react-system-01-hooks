import PropTypes from 'prop-types';

import styles from './styles.module.css';

const List = props => {
  const { message, listRef, children } = props;

  return children.length ? (
    <ul className={styles.list} ref={listRef}>
      {children}
    </ul>
  ) : (
    <span className={styles.messageList}>{message}</span>
  );
};

List.propTypes = {
  message: PropTypes.string.isRequired,
  listRef: PropTypes.any,
  children: PropTypes.node,
};

List.defaultProps = {
  listRef: null,
  children: null,
};

export default List;
