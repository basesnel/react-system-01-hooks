import PropTypes from 'prop-types';

import styles from './styles.module.css';

const FigureP03P04 = props => {
  const { picture, alt, caption } = props;

  return (
    <figure className={styles.figure}>
      <img src={picture} alt={alt} className={styles.image} />
      <figcaption className={styles.captionImage}>{caption}</figcaption>
    </figure>
  );
};

FigureP03P04.propTypes = {
  picture: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default FigureP03P04;
