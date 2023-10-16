import PropTypes from 'prop-types';

import css from './ListitemII.module.css';

export default function ListitemII({ content, ...delegated }) {
  return (
    <li className={css.item} {...delegated}>
      <div className={css['item-flex']}>{content}</div>
    </li>
  );
}

ListitemII.propTypes = {
  content: PropTypes.node,
};
