import PropTypes from 'prop-types';

import css from './ItemCheckedText.module.css';

export default function ItemCheckedText({ content, checked = false }) {
  const done = checked ? `${css.checked}` : '';

  return <span className={`${css['item-content']} ${done}`}>{content}</span>;
}

ItemCheckedText.propTypes = {
  content: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
};
