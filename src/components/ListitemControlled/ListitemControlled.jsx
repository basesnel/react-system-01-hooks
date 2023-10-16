import PropTypes from 'prop-types';

import css from './ListitemControlled.module.css';

export default function ListitemControlled({
  children,
  content,
  ...delegated
}) {
  return (
    <li className={css.item} {...delegated}>
      <div className={css['item-flex']}>
        <span className={css['item-content']}>{content}</span>
        {children}
      </div>
    </li>
  );
}

ListitemControlled.propTypes = {
  children: PropTypes.node,
  content: PropTypes.any.isRequired,
};
