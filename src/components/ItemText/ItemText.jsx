import PropTypes from 'prop-types';

import css from './ItemText.module.css';

export default function ItemText(props) {
  const { content } = props;
  const { itemContent } = css;

  return <span className={itemContent}>{content}</span>;
}

ItemText.propTypes = {
  content: PropTypes.any.isRequired,
};
