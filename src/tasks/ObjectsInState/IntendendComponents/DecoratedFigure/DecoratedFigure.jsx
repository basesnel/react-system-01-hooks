import PropTypes from 'prop-types';

import css from './DecoratedFigure.module.css';

export default function DecoratedFigure({ picture, alt, caption }) {
  return (
    <figure className={css.figure}>
      <img src={picture} alt={alt} className={css.image} />
      <figcaption className={css.caption}>{caption}</figcaption>
    </figure>
  );
}

DecoratedFigure.propTypes = {
  picture: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
