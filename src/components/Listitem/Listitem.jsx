import PropTypes from 'prop-types';

import css from './Listitem.module.css';

export default function Listitem({ content, ...delegated }) {
  return (
    <li className={css.item} {...delegated}>
      <div className={css['item-flex']}>
        <span className={css['item-content']}>{content}</span>
      </div>
    </li>
  );
}

Listitem.propTypes = {
  children: PropTypes.node,
};
