import PropTypes from 'prop-types';

import css from './Card.module.css';

export default function Card({ children }) {
  return <div className={css.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
