import PropTypes from 'prop-types';

import css from './Title.module.css';

export default function Title({ level, caption }) {
  switch (level) {
    case 1:
      return <h1 className={css['title-01']}>{caption}</h1>;

    case 2:
      return <h2 className={css['title-02']}>{caption}</h2>;

    case 3:
      return <h3 className={css['title-03']}>{caption}</h3>;

    default:
      return null;
  }
}

Title.propTypes = {
  level: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
};
