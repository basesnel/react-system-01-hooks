import PropTypes from 'prop-types';

import css from './Card.module.css';

export default function Card({ title, children }) {
  return (
    <div className={css.card}>
      <div className={css['card-title']}>{title}</div>
      <div className={css['card-content']}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
