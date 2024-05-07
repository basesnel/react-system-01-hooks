import PropTypes from 'prop-types';

import css from './ItemCheckedText.module.css';

export default function ItemCheckedText(props) {
  const { content, checked = false } = props;
  const { itemContent } = css;
  const done = checked ? `${css.checked}` : '';

  return <span className={`${itemContent} ${done}`}>{content}</span>;
}

ItemCheckedText.propTypes = {
  content: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
};
