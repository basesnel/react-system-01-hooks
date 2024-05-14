import PropTypes from 'prop-types';

import css from './Figure.module.css';

const Figure = props => {
  const { picture, alt, caption } = props;
  const { figure, image, captionImage } = css;

  return (
    <figure className={figure}>
      <img src={picture} alt={alt} className={image} />
      <figcaption className={captionImage}>{caption}</figcaption>
    </figure>
  );
};

Figure.propTypes = {
  picture: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Figure;
