import PropTypes from 'prop-types';

import css from './ItemText.module.css';

export default function ItemText({ content }) {
  return <span className={css['item-content']}>{content}</span>;
}

ItemText.propTypes = {
  content: PropTypes.any.isRequired,
};
