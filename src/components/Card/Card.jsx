import PropTypes from 'prop-types';

import css from './Card.module.css';

export default function Card({ children }) {
  return <section className={css.card}>{children}</section>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
