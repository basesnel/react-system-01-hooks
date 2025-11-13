import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Figure = ({ image }) => {
  return (
    <figure className={styles.figure}>
      <img
        key={image.src}
        src={image.src}
        alt={image.place}
        className={styles.image}
      />
      <figcaption className={styles.figcaption}>{image.place}</figcaption>
    </figure>
  );
};

Figure.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
  }).isRequired,
};

export default Figure;
