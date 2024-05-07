import PropTypes from 'prop-types';

import css from './List.module.css';

export default function List(props) {
  const { message, listRef, children } = props;
  const { list, messageList } = css;

  return children.length ? (
    <ul className={list} ref={listRef}>
      {children}
    </ul>
  ) : (
    <span className={messageList}>{message}</span>
  );
}

List.propTypes = {
  message: PropTypes.string.isRequired,
  listRef: PropTypes.any,
  children: PropTypes.node,
};

List.defaultProps = {
  listRef: null,
  children: null,
};
